package com.nttdata.productcustomer.model;

import lombok.Data;

@Data
public class ProductClient {
    private Long id;
    private String name;
    private String descriptionshort;
    private String descriptionlong;
    private Integer category;
    private String logoawesome;
    private Integer maintenancecommission;
    private Integer withdrawalpermonth;
    private Integer withdrawalday;
}
