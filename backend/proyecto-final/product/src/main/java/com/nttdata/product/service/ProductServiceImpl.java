package com.nttdata.product.service;

import com.nttdata.product.entity.Product;
import com.nttdata.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public Product productbyId(Long id) {
        return  productRepository.findById(id).orElse(null);
    }
}
