package com.nttdata.productcustomer.services;

import com.nttdata.productcustomer.client.ProductClientRepository;
import com.nttdata.productcustomer.entity.Credit;
import com.nttdata.productcustomer.repository.CreditRepository;
import com.nttdata.productcustomer.utils.GeneratedCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;



@Service
public class CreditServiceImpl implements CreditService{

    @Autowired
    private CreditRepository creditRepository;
    @Autowired
    private ProductClientRepository productClientRepository;


    @Override
    public List<Credit> findByIdcustomer(Long idcustomer) {

        List<Credit> credits =  creditRepository.findByIdcustomer(idcustomer);
        credits.forEach(credit -> credit.setProduct(productClientRepository.gerProduct(credit.getIdproduct()).getBody() ) );
        return credits;
    }
    @Override
    public Credit saveCredit(Credit credit) {
        GeneratedCode gene = new GeneratedCode();
        credit.setDate( new Date());
        credit.setInterest(10);
        Double montoTotal = (credit.getAmountborrowed()+(credit.getInterest()*0.10))/credit.getQuotas();
        credit.setMonthlyamount(montoTotal);
        credit.setAmountpaid(0.00);
        credit.setNumbercredit(gene.Generated(10));
        return creditRepository.save(credit);
    }
    @Override
    public List<Credit> listAllCredtis() {
        List<Credit> credits =  creditRepository.findAll();
        credits.forEach(credit -> credit.setProduct(productClientRepository.gerProduct(credit.getIdproduct()).getBody() ) );
        return credits;
    }

    @Override
    public Credit findById(Long id) {
        Credit credit = creditRepository.findById(id).orElse(null);
        if (credit==null){
            return null;
        }
        credit.setProduct(productClientRepository.gerProduct(credit.getIdproduct()).getBody());
        return credit;
    }

    @Override
    public Credit updateAmountAndQuotapaid(Long id, Double quantity, Integer quota) {
        //ope = 1 = deposito o pago: ope=2 = retiro o consumo
        Credit creditDb = findById(id);
        Double total;
        if(null==creditDb){
            return null;
        }

        total = creditDb.getAmountpaid() + quantity;
        creditDb.setAmountpaid(total);
        creditDb.setQuotaspaid(quota);
        //creditDb.setProduct(productClientRepository.gerProduct(creditDb.getIdproduct()).getBody());
        return creditRepository.save(creditDb);
    }
}
