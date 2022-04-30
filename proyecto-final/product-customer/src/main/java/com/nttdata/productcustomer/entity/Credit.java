package com.nttdata.productcustomer.entity;

import com.nttdata.productcustomer.model.ProductClient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="credit")
@Builder
public class Credit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long idcustomer;
    private Long idproduct;
    private String currency;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    private Double amountborrowed;
    private Integer quotas;
    private Integer interest;
    private Double monthlyamount;
    private Double amountpaid;
    private Integer quotaspaid;
    private String numbercredit;

    @Transient
    private ProductClient product;
}
