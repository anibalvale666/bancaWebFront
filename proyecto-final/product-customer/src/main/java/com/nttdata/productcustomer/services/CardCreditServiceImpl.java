package com.nttdata.productcustomer.services;

import com.nttdata.productcustomer.client.ProductClientRepository;

import com.nttdata.productcustomer.entity.Account;
import com.nttdata.productcustomer.entity.CardCredit;
import com.nttdata.productcustomer.repository.CardCreditRepository;
import com.nttdata.productcustomer.utils.GeneratedCode;
import org.apache.commons.lang.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
public class CardCreditServiceImpl implements  CardCreditService{

    @Autowired
    private CardCreditRepository cardCreditRepository;
    @Autowired
    private ProductClientRepository productClientRepository;


    @Override
    public List<CardCredit> findByIdcustomer(Long idcustomer) {
        List<CardCredit> cardsCredits = cardCreditRepository.findByIdcustomer(idcustomer);
        cardsCredits.forEach(c -> c.setProduct(productClientRepository.gerProduct(c.getIdproduct()).getBody()));
        return cardsCredits;
    }

    @Override
    public CardCredit saveCardCredit(CardCredit cardCredit) {
      Date dateCreation = new Date();
      Date dateExpiration = DateUtils.addYears(dateCreation,  5);
      Double creditLine;
      if(cardCredit.getCurrency() == "PEN") {
        creditLine = 10000.0;
      } else {
        creditLine = 4000.0;
      }

      GeneratedCode gene = new GeneratedCode();
      cardCredit.setOpeningdate(dateCreation);
      cardCredit.setNumbercard(gene.Generated(16));
      cardCredit.setCvc(gene.Generated(3));
      cardCredit.setAvailableline(creditLine);
      cardCredit.setCreditline(creditLine);
      cardCredit.setExpirationday(dateExpiration);
      System.out.println(cardCredit);
      return cardCreditRepository.save(cardCredit);
    }

    @Override
    public CardCredit findById(Long id) {
        CardCredit cardCredit= cardCreditRepository.findById(id).orElse(null);
        if (cardCredit==null){
            return null;
        }
        cardCredit.setProduct(productClientRepository.gerProduct(cardCredit.getIdproduct()).getBody());
        return cardCredit;
    }

    @Override
    public List<CardCredit> listAllCardCredits() {
        List<CardCredit> cardsCredits = cardCreditRepository.findAll();
        cardsCredits.forEach(c -> c.setProduct(productClientRepository.gerProduct(c.getIdproduct()).getBody()));
        return cardsCredits;
    }
    @Override
    public CardCredit updateCreditCard (Long id, CardCredit cardCredit) {
      CardCredit ccDB = cardCreditRepository.findById(id).orElse(null);

      ccDB.setAvailableline(cardCredit.getAvailableline());
      return cardCreditRepository.save(ccDB);

    }


    @Override
    public CardCredit updateAvailibleLine(Long id, Double quantity, String ope) {
        //ope = "deposit" = deposito o pago: ope = "withdrawal" o consumo
        CardCredit cardCreditDb = findById(id);
        Double total;
        if(null==cardCreditDb){
            return null;
        }
        if(ope=="deposit"){
            total = cardCreditDb.getAvailableline() + quantity;
        }else {
            total = cardCreditDb.getAvailableline() - quantity;
        }
        cardCreditDb.setAvailableline(total);
        //cardCreditDb.setProduct(productClientRepository.gerProduct(cardCreditDb.getIdproduct()).getBody());
        return cardCreditRepository.save(cardCreditDb);
    }
}
