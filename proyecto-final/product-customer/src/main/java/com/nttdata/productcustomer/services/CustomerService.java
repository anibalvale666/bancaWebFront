package com.nttdata.productcustomer.services;

import com.nttdata.productcustomer.entity.Customer;

import java.util.List;

public interface CustomerService {
    public List<Customer> listAllCustomer();
    public Customer customerbyId(Long id);

    public Customer createCustomer(Customer customer);

    public List<Customer> listCustomerbyType(Integer type);

}
