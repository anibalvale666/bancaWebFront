package com.nttdata.transactionservice.model;

import lombok.Data;


import java.util.Date;

@Data
public class AccountModel {
    private Long id;
    private Long idcustomer;
    private Long idproduct;
    private String currency;
    private Date date;
    private String numberaccount;
    private String cci;
    private Double balance;
    private ProductModel product;
}
