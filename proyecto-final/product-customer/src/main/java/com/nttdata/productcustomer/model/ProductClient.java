package com.nttdata.productcustomer.model;

import lombok.Data;


/*
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
*/


@Data
public class ProductClient {
  private Long id;
  private String nameproduct;
  private String description_product;
  private String description_detail;
  private String category;
  private String logo;
  private String img;
}
