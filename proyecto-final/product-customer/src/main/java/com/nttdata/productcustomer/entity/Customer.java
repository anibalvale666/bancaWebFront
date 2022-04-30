package com.nttdata.productcustomer.entity;

//import com.nttdata.productcustomer.model.AccountModel;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="customer")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstname;
    private String lastname;
    private Integer typedoc;
    private String numberdoc;
    private String address;
    private String phone;
    private Integer type;

}
