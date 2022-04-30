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
    private String first_name;
    private String last_name;
    private String type_doc;
    private String doc;
    private String address;
    private String phone;

    private String type_user;
    private String type;
    private String password;
}
