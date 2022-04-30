package com.nttdata.transactionservice.service;

import com.nttdata.transactionservice.client.AccountClient;
import com.nttdata.transactionservice.entity.Transaction;
import com.nttdata.transactionservice.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService{

    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private AccountClient accountClient;

    @Override
    public List<Transaction> findAll() {
        return transactionRepository.findAll();
    }

    @Override
    public List<Transaction> finByIdaccount(Long id) {
        return transactionRepository.findByIdaccount(id);
    }

    @Override
    public List<Transaction> findByIdcredit(Long id) {
        return transactionRepository.findByIdcredit(id);
    }

    @Override
    public List<Transaction> findByIdcardcredit(Long id) {
        return transactionRepository.findByIdcardcredit(id);
    }

    @Override
    public Transaction saveTransaction(Transaction transaction) {
        transaction.setDate(new Date());

        //accountClient.updateBalance(transaction.getIdaccount(),transaction.getAmount(),transaction.getOperation());

        return transactionRepository.save(transaction);
    }

    @Override
    public Transaction findById(Long id) {
        return transactionRepository.findById(id).orElse(null);
    }
}
