package com.nttdata.transactionservice.service;

import com.nttdata.transactionservice.entity.Transaction;

import java.util.List;

public interface TransactionService {
    public List<Transaction> findAll();
    public List<Transaction> finByIdaccount(Long id);
    public List<Transaction> findByIdcredit(Long id);
    public List<Transaction> findByIdcardcredit(Long id);

    public Transaction saveTransaction(Transaction transaction);
    public Transaction findById (Long id);
}
