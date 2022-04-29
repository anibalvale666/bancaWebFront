package com.nttdata.product.service;

import com.nttdata.product.entity.Product;

import java.util.List;

public interface ProductService {
    public List<Product> getAllProduct();
    public Product productbyId(Long id);

}
