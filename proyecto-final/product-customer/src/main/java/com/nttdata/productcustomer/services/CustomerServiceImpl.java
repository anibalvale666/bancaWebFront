package com.nttdata.productcustomer.services;


import com.nttdata.productcustomer.entity.Customer;
import com.nttdata.productcustomer.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;
    /*@Autowired
    private AccountClient accountClient;*/

    @Override
    public List<Customer> listAllCustomer() {
       return customerRepository.findAll();
    }

    @Override
    public Customer customerbyId(Long id) {

        return customerRepository.findById(id).orElse(null);

    }

    @Override
    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> listCustomerbyType(Integer type) {
        return customerRepository.findByType(type);
    }

}
