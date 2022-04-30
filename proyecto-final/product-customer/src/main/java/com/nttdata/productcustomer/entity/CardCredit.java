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
@Table(name="cardcredit")
@Builder
public class CardCredit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long idcustomer;
    private Long idproduct;
    private String currency;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    private String numbercard;
    private String cvv;
    private Double creditline;
    private Double availableline;
    private String expirationday;

    @Transient
    private ProductClient product;
}
