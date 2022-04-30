package com.nttdata.productcustomer.repository;


import com.nttdata.productcustomer.entity.Credit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CreditRepository extends JpaRepository<Credit, Long> {
    List<Credit> findByIdcustomer(Long idcustomer);
}
