package com.nttdata.productcustomer.services;

import com.nttdata.productcustomer.entity.Account;

import java.util.List;
import java.util.Map;


public interface AccountService {

    public List<Account> findAllAccounts();
    public List<Account> findByIdcustomer(Long id);
    public Map.Entry<Boolean,Account> createdAccount (Account account);
    public Account updateAccount (Long id, Account account);
    public Account updateBalance(Long id, Double balance, String ope );
    public Account findById(Long id);

    public Account existAccountTypeUser( Long id, String type);

}
