package com.nttdata.productcustomer.repository;

import com.nttdata.productcustomer.entity.Account;
import com.nttdata.productcustomer.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface CustomerRepository extends JpaRepository<Customer, Long> {
    List<Customer> findByType(Integer type);

}
