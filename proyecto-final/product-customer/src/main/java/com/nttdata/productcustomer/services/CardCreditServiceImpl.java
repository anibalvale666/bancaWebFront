package com.nttdata.productcustomer.services;

import com.nttdata.productcustomer.client.ProductClientRepository;

import com.nttdata.productcustomer.entity.CardCredit;
import com.nttdata.productcustomer.repository.CardCreditRepository;
import com.nttdata.productcustomer.utils.GeneratedCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        GeneratedCode gene = new GeneratedCode();
        cardCredit.setOpeningdate(new Date());
        cardCredit.setNumbercard(gene.Generated(16));
        cardCredit.setCvc(gene.Generated(3));
        cardCredit.setAvailableline(cardCredit.getCreditline());
        cardCredit.setExpirationday(new Date("2022-04-27 22:39:42"));
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
    public CardCredit updateAvailibleLine(Long id, Double quantity, Integer ope) {
        //ope = 1 = deposito o pago: ope=2 = retiro o consumo
        CardCredit cardCreditDb = findById(id);
        Double total;
        if(null==cardCreditDb){
            return null;
        }
        if(ope==1){
            total = cardCreditDb.getAvailableline() + quantity;
        }else {
            total = cardCreditDb.getAvailableline() - quantity;
        }
        cardCreditDb.setAvailableline(total);
        //cardCreditDb.setProduct(productClientRepository.gerProduct(cardCreditDb.getIdproduct()).getBody());
        return cardCreditRepository.save(cardCreditDb);
    }
}
