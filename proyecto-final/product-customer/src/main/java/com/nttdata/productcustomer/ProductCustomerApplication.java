package com.nttdata.productcustomer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication

//Habilitamos como eureka cliente
@EnableEurekaClient
//Habilitamos Feign CLiente
@EnableFeignClients

public class ProductCustomerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductCustomerApplication.class, args);
	}

  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("http://localhost:4200")
                                            .allowedMethods("*")
                                            .allowedHeaders("*")
                                            .allowCredentials(false)
          .maxAge(-1);

      }
    };
  }

}
