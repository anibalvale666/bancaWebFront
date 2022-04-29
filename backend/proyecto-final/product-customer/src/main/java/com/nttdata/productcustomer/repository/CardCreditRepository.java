package com.nttdata.productcustomer.repository;


import com.nttdata.productcustomer.entity.CardCredit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardCreditRepository extends JpaRepository<CardCredit, Long> {
    List<CardCredit> findByIdcustomer(Long idcustomer);
}
