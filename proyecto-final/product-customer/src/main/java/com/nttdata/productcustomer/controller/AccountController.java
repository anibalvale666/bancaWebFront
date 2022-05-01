package com.nttdata.productcustomer.controller;

import com.nttdata.productcustomer.entity.Account;
import com.nttdata.productcustomer.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
        // newAccount = accountService.createdAccount(account);
        Map.Entry<Boolean,Account> newAccount = accountService.createdAccount(account);
        if(newAccount.getKey()) {
          return ResponseEntity.status(HttpStatus.CREATED).body(newAccount.getValue());
        }
        else {
          return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }


    }
    @GetMapping("/{id}/balance")
    public ResponseEntity<Account> updateBalance(@PathVariable Long id,
                                                 @RequestParam(name = "quantity", required = true)
                                                 Double quantity,
        @RequestParam(name ="operation", required = true ) String ope){
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

  @PutMapping("/{id}")
  public ResponseEntity<Account> updateAmount(@PathVariable("id") long id, @RequestBody Account account) {
    Account _account = accountService.updateAccount(id, account);
    if (_account==null){
      return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(_account);
  }






}
