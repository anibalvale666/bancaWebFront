package com.nttdata.productcustomer.services;

import com.nttdata.productcustomer.client.ProductClientRepository;
import com.nttdata.productcustomer.entity.Account;

import com.nttdata.productcustomer.entity.Customer;
import com.nttdata.productcustomer.repository.AccountRepository;
import com.nttdata.productcustomer.repository.CustomerRepository;
import com.nttdata.productcustomer.utils.GeneratedCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.*;
import java.util.stream.Collectors;


@Service
public class AccountServiceImpl implements AccountService{

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private ProductClientRepository productClientRepository;

    @Autowired
    private CustomerService customerService;

    @Override
    public List<Account> findAllAccounts() {
        List<Account> accounts =  accountRepository.findAll();
        //accounts.forEach(a -> a.setProduct(productClientRepository.gerProduct(a.getIdproduct()).getBody()));
        return accounts;
    }

    @Override
    public List<Account> findByIdcustomer(Long id) {

        List<Account> accounts =  accountRepository.findByIdcustomer(id);
        accounts.forEach(a -> a.setProduct(productClientRepository.gerProduct(a.getIdproduct()).getBody()));
        return  accounts;
    }

    @Override
    public Account existAccountTypeUser( Long id, String accounttype){

      List<Account> accounts =  this.findByIdcustomer(id);
       return accounts.stream()
              .filter(a -> a.getAccounttype().equals(accounttype))
              .findFirst()
              .orElse(null);
    }

    @Override
    public Map.Entry<Boolean,Account> createdAccount(Account account) {

      //Primero verificamos si es cliente persona o empresa
      Customer customer = customerService.customerbyId(account.getIdcustomer());
      Account exist = null;
      if(Objects.equals(customer.getType(), "personal")) {
        exist = this.existAccountTypeUser(customer.getId(), account.getAccounttype());
      }

      if(exist == null || Objects.equals(customer.getType(), "business")) {
        GeneratedCode gene = new GeneratedCode();
        account.setOpeningdate(new Date());
        account.setNumberaccount(gene.Generated(18));
        account.setCci(gene.Generated(18));
        account.setBalance(0.00);
        accountRepository.save(account);
        return new AbstractMap.SimpleEntry<>(true, account);
      }
      else {
        return new AbstractMap.SimpleEntry<>(false, account);
      }

    }

    @Override
    public Account updateAccount (Long id, Account account) {
      Account accountDB = accountRepository.findById(id).orElse(null);

      accountDB.setBalance(account.getBalance());
      return accountRepository.save(accountDB);

    }

    @Override
    public Account updateBalance(Long id, Double balance, String ope) {
        //ope = 1 = deposito: ope=2 = retiro
        Account accountDb = findById(id);
        Double total;
        if(null==accountDb){
            return null;
        }
        if(ope=="deposit"){
            total = accountDb.getBalance() + balance;
        }else {
            total = accountDb.getBalance() - balance;
        }
        accountDb.setBalance(total);
        //accountDb.setProduct(productClientRepository.gerProduct(accountDb.getIdproduct()).getBody());
        return accountRepository.save(accountDb);
    }

    @Override
    public Account findById(Long id) {

       Account account = accountRepository.findById(id).orElse(null);
       if (account==null){
           return null;
       }
       account.setProduct(productClientRepository.gerProduct(account.getIdproduct()).getBody());
       return account;
    }
}
