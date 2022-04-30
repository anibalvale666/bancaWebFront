package com.nttdata.transactionservice.controller;

import com.nttdata.transactionservice.entity.Transaction;
import com.nttdata.transactionservice.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/transactions")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @GetMapping("/account/{id}")
    public ResponseEntity<List<Transaction>> findByIdaccount(@PathVariable Long id){
        List<Transaction> transactions;

                transactions = transactionService.finByIdaccount(id);
                if (transactions.isEmpty()){
                    return ResponseEntity.noContent().build();
                }
                return ResponseEntity.ok(transactions);

    }
    @GetMapping("/credit/{id}")
    public ResponseEntity<List<Transaction>> findByIdcredit(@PathVariable Long id){
        List<Transaction> transactions;

        transactions = transactionService.findByIdcredit(id);
        if (transactions.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(transactions);

    }
    @GetMapping("/card-credit/{id}")
    public ResponseEntity<List<Transaction>> findByIdcardcredit(@PathVariable Long id){
        List<Transaction> transactions;

        transactions = transactionService.findByIdcardcredit(id);
        if (transactions.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(transactions);

    }
    @PostMapping
    public ResponseEntity<Transaction> saveTransaction(@RequestBody Transaction transaction ){
        Transaction newtransaction = transactionService.saveTransaction(transaction);
        return ResponseEntity.status(HttpStatus.CREATED).body(newtransaction);
    }

}
