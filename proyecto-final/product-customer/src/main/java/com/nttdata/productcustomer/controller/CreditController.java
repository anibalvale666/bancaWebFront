package com.nttdata.productcustomer.controller;


import com.nttdata.productcustomer.entity.CardCredit;
import com.nttdata.productcustomer.entity.Credit;
import com.nttdata.productcustomer.services.CreditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/credits")
public class CreditController {
    @Autowired
    private CreditService creditService;


    @GetMapping
    public ResponseEntity<List<Credit>> getCreditsXCustomer(@RequestParam(name="customer", required = false) Long id){
        List<Credit> credits =  new ArrayList<>();
        if (null==id){
            credits = creditService.listAllCredtis();
            if (credits.isEmpty()){
                return ResponseEntity.noContent().build();
            }
        }else{
            credits = creditService.findByIdcustomer(id);
            if (credits.isEmpty()){
                return ResponseEntity.noContent().build();
            }
        }
        return ResponseEntity.ok(credits);
    }
    //Para crear una cuenta
    @PostMapping
    public  ResponseEntity<Credit> saveCredit(@RequestBody Credit credit){
        Credit newCredit = creditService.saveCredit(credit);
        return ResponseEntity.status(HttpStatus.CREATED).body(newCredit);
    }

    @GetMapping("/{id}/update-amount-quota")
    public ResponseEntity<Credit> updateAmountQuotaPaid(@PathVariable Long id,
                                                        @RequestParam(name = "quantity", required = true) Double quantity,
                                                        @RequestParam(name = "quota", required = true) Integer quota ){
        Credit credit = creditService.updateAmountAndQuotapaid(id,quantity,quota);
        if (null == credit){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(credit);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Credit> findById(@PathVariable("id") Long id ){
        Credit credit = creditService.findById(id);
        if (credit==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(credit);

    }
}
