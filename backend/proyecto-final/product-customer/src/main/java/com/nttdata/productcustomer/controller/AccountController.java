package com.nttdata.productcustomer.controller;

import com.nttdata.productcustomer.entity.Account;
import com.nttdata.productcustomer.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/accounts")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @GetMapping
    public ResponseEntity<List<Account>> getAccountbyCustomer(@RequestParam(name="customer", required = false) Long id){

        List<Account> account =  new ArrayList<>();
        if (null == id){
            account = accountService.findAllAccounts();
            if (account.isEmpty()){
                return ResponseEntity.noContent().build();
            }
        }else {
            account = accountService.findByIdcustomer(id);
            if (account.isEmpty()){
                return ResponseEntity.noContent().build();
            }
        }
        return ResponseEntity.ok(account);
    }

    //Para crear una cuenta
    @PostMapping
    public  ResponseEntity<Account> saveAccount(@RequestBody Account account){
        Account newAccount = accountService.createdAccount(account);
        return ResponseEntity.status(HttpStatus.CREATED).body(newAccount);
    }
    @GetMapping("/{id}/balance")
    public ResponseEntity<Account> updateBalance(@PathVariable Long id,
                                                 @RequestParam(name = "quantity", required = true)
                                                 Double quantity,
        @RequestParam(name ="operation", required = true ) Integer ope){
        Account account = accountService.updateBalance(id,quantity,ope);
        if(null == account){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(account);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Account> findById(@PathVariable("id") Long id ){
        Account account = accountService.findById(id);
        if (account==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(account);

    }




}
