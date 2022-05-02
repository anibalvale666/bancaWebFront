package com.nttdata.transactionservice.repository;

import com.nttdata.transactionservice.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByIdaccount (Long id);
    List<Transaction> findByIdcredit (Long id);
    List<Transaction> findByIdcardcredit (Long id);
}
