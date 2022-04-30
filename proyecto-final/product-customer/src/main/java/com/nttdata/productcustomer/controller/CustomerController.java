package com.nttdata.productcustomer.controller;

import com.nttdata.productcustomer.entity.Customer;
import com.nttdata.productcustomer.repository.CustomerRepository;
import com.nttdata.productcustomer.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.PathParam;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/customers")
public class CustomerController {

        @Autowired
        private CustomerService customerService;

        //Para listar todos los cientes
        @GetMapping
        public ResponseEntity<List<Customer>> listCustomers(@RequestParam(name = "type", required = false) Integer type){
                List<Customer> customers = new ArrayList<>();
                if (null==type){
                        customers= customerService.listAllCustomer();
                        if (customers.isEmpty()){
                                return ResponseEntity.noContent().build();
                        }
                }else{
                        customers=customerService.listCustomerbyType(type);
                        if (customers.isEmpty()){
                                return ResponseEntity.noContent().build();
                        }
                }
                return ResponseEntity.ok(customers);

        }
        //Para listar un cliente
        @GetMapping(value="/{id}")
        public ResponseEntity<Customer> getCustomer(@PathVariable("id") Long id){
                Customer customer = customerService.customerbyId(id);
                if (null==customer){
                        return ResponseEntity.notFound().build();
                }
                return ResponseEntity.ok(customer);
        }

        //Para crear un cliente
        @PostMapping
        public  ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer){
                Customer newCustomer = customerService.createCustomer(customer);
                return ResponseEntity.status(HttpStatus.CREATED).body(newCustomer);
        }




}
