package com.nttdata.productcustomer.repository;

import com.nttdata.productcustomer.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountRepository extends JpaRepository<Account, Long> {

    List<Account> findByIdcustomer(Long idcustomer);

}
