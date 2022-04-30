package com.nttdata.transactionservice.client;

import com.nttdata.transactionservice.model.AccountModel;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(value = "productxcustomer-microservice", url="http://localhost:8080" )
public interface AccountClient {
    @GetMapping("/{id}/balance")
    public ResponseEntity<AccountModel> updateBalance(@PathVariable Long id,
                                                      @RequestParam(name = "quantity", required = true)
                                                 Double quantity,
                                                      @RequestParam(name ="operation", required = true ) Integer ope);
}
