package com.nttdata.productcustomer.controller;


import com.nttdata.productcustomer.entity.Account;
import com.nttdata.productcustomer.entity.CardCredit;
import com.nttdata.productcustomer.services.CardCreditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/card-credits")
public class CardCreditController {
    @Autowired
    private CardCreditService cardCreditService;

    @GetMapping
    public ResponseEntity<List<CardCredit>> getCardCreditsXCustomer(@RequestParam(name="customer", required = false)  Long id){
        List<CardCredit> cardCredits = new ArrayList<>();
        if (id==null){
            cardCredits = cardCreditService.listAllCardCredits();
            if (cardCredits.isEmpty()){
                return ResponseEntity.noContent().build();
            }
        }else {
            cardCredits = cardCreditService.findByIdcustomer(id);
            if (cardCredits.isEmpty()){
                return ResponseEntity.noContent().build();
            }
        }
        return  ResponseEntity.ok(cardCredits);
    }

  @CrossOrigin(origins = "*")
    @PostMapping()
    public ResponseEntity<CardCredit> saveCardCredit(@RequestBody CardCredit cardCredit){
        CardCredit newCard = cardCreditService.saveCardCredit(cardCredit);
        return ResponseEntity.status(HttpStatus.CREATED).body(newCard);
    }


    @GetMapping("/{id}/availableline")
    public ResponseEntity<CardCredit> updateAvailibleLine(@PathVariable Long id,
                                                          @RequestParam(name = "quantity", required = true) Double quantity,
                                                          @RequestParam(name = "operation",required = true) String ope ) {
        CardCredit cardCredit = cardCreditService.updateAvailibleLine(id,quantity,ope);
        if (null == cardCredit){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(cardCredit);
    }
    @GetMapping("/{id}")
    public ResponseEntity<CardCredit> findById(@PathVariable("id") Long id ){
        CardCredit cardCredit = cardCreditService.findById(id);
        if (cardCredit==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(cardCredit);

    }


    @PutMapping("/{id}")
    public ResponseEntity<CardCredit> updateAmount(@PathVariable("id") long id, @RequestBody CardCredit cardCredit) {
      CardCredit _cc = cardCreditService.updateCreditCard(id, cardCredit);
      if (_cc==null){
        return ResponseEntity.notFound().build();
      }
      return ResponseEntity.ok(_cc);
    }


}
