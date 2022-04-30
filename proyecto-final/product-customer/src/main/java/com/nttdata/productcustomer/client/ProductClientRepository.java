package com.nttdata.productcustomer.client;

import com.nttdata.productcustomer.model.ProductClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@FeignClient(value = "product-microservice", url="http://localhost:8080" )
public interface ProductClientRepository {
    @GetMapping(value = "/api/products/{id}")
    public ResponseEntity<ProductClient> gerProduct(@PathVariable("id") Long id);
}
