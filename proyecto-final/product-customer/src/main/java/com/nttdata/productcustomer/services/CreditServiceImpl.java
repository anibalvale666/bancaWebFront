package com.nttdata.productcustomer.services;

import com.nttdata.productcustomer.client.ProductClientRepository;
import com.nttdata.productcustomer.entity.Account;
import com.nttdata.productcustomer.entity.Credit;
import com.nttdata.productcustomer.entity.Customer;
import com.nttdata.productcustomer.repository.CreditRepository;
import com.nttdata.productcustomer.utils.GeneratedCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class CreditServiceImpl implements CreditService{

    @Autowired
    private CreditRepository creditRepository;
    @Autowired
    private ProductClientRepository productClientRepository;
    @Autowired
    private CustomerService customerService;

    @Override
    public List<Credit> findByIdcustomer(Long idcustomer) {

        List<Credit> credits =  creditRepository.findByIdcustomer(idcustomer);
        credits.forEach(credit -> credit.setProduct(productClientRepository.gerProduct(credit.getIdproduct()).getBody() ) );
        return credits;
    }
    @Override
    public Map.Entry<Boolean,Credit> saveCredit(Credit credit) {

      //Primero verificamos si es cliente persona o empresa
      Customer customer = customerService.customerbyId(credit.getIdcustomer());
      Boolean exist = false;
      if(Objects.equals(customer.getType(), "personal")) {
        exist = (this.findByIdcustomer(customer.getId()).size() != 0);
      }

      if(!exist  || Objects.equals(customer.getType(), "business") ) {
        GeneratedCode gene = new GeneratedCode();
        credit.setOpeningdate(new Date());
        credit.setInterest(10);
        Double montoTotal = (credit.getAmountborrowed() * 1.10) / credit.getQuotas();
        credit.setMonthlyamount(montoTotal);
        credit.setQuotaspaid(0);
        credit.setAmountpaid(0.00);
        credit.setNumbercredit(gene.Generated(10));
        creditRepository.save(credit);
        return new AbstractMap.SimpleEntry<>(true, credit);
      }
      else {
        return new AbstractMap.SimpleEntry<>(false, credit);
      }
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
