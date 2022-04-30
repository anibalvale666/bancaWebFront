package com.nttdata.product.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product_detail")
@Builder
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /*private String name;
    private String descriptionshort;
    private String descriptionlong;
    private Integer category;
    private String logoawesome;
    private Integer maintenancecommission;
    private Integer withdrawalpermonth;
    private Integer withdrawalday;
*/

    private String nameproduct;
    private String description_product;
    private String description_detail;
    private String category;
    private String logo;
    private String img;


}
