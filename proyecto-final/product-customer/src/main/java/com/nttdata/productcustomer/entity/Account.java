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
@Table(name="accounts")
@Builder
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long idcustomer;
    private Long idproduct;
    private String currency;

    @Temporal(TemporalType.TIMESTAMP)
    private Date openingdate;

    private String numberaccount;
    private String cci;
    private Double balance;
    private String accounttype;
   @Transient

   private ProductClient product;
}
