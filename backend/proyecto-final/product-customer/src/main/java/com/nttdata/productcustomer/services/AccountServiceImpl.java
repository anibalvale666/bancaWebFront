package com.nttdata.productcustomer.services;


import com.nttdata.productcustomer.client.ProductClientRepository;
import com.nttdata.productcustomer.entity.Account;


import com.nttdata.productcustomer.repository.AccountRepository;
import com.nttdata.productcustomer.utils.GeneratedCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Date;
import java.util.List;


@Service
public class AccountServiceImpl implements AccountService{

    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private ProductClientRepository productClientRepository;



    @Override
    public List<Account> findAllAccounts() {
        List<Account> accounts =  accountRepository.findAll();
        accounts.forEach(a -> a.setProduct(productClientRepository.gerProduct(a.getIdproduct()).getBody()));
        return accounts;
    }

    @Override
    public List<Account> findByIdcustomer(Long id) {

        List<Account> accounts =  accountRepository.findByIdcustomer(id);
        accounts.forEach(a -> a.setProduct(productClientRepository.gerProduct(a.getIdproduct()).getBody()));
        return  accounts;
    }

    @Override
    public Account createdAccount(Account account) {
        GeneratedCode gene = new GeneratedCode();
        account.setDate(new Date());
        account.setNumberaccount(gene.Generated(18));
        account.setCci(gene.Generated(18));
        account.setBalance(0.00);
        return accountRepository.save(account);
    }

    @Override
    public Account updateBalance(Long id, Double balance, Integer ope) {
        //ope = 1 = deposito: ope=2 = retiro
        Account accountDb = findById(id);
        Double total;
        if(null==accountDb){
            return null;
        }
        if(ope==1){
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
