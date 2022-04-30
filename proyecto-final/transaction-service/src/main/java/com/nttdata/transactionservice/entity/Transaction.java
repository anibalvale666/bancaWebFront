package com.nttdata.transactionservice.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "transaction")
@Builder
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long idcustomer;
    private Long idheadline;
    private Long idaccount;
    private Long idcredit;
    private Long idcardcredit;
    private Date date;
    private Integer quota;
    private Integer operation;
    private Double amount;

}
