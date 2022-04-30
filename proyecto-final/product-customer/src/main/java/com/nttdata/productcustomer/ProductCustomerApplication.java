package com.nttdata.productcustomer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication

//Habilitamos como eureka cliente
@EnableEurekaClient
//Habilitamos Feign CLiente
@EnableFeignClients

public class ProductCustomerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductCustomerApplication.class, args);
	}

}
