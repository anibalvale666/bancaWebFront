package com.nttdata.productcustomer.services;

import com.nttdata.productcustomer.entity.Account;

import java.util.List;

public interface AccountService {

    public List<Account> findAllAccounts();
    public List<Account> findByIdcustomer(Long id);
    public Account createdAccount (Account account);
    public Account updateBalance(Long id, Double balance, Integer ope );
    public Account findById(Long id);

}
