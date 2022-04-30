package com.nttdata.productcustomer.services;

import com.nttdata.productcustomer.entity.Credit;

import java.util.List;

public interface CreditService {
    //buscar creditos por clientes
    public List<Credit> findByIdcustomer(Long idcustomer);
    public Credit saveCredit(Credit credit);

    public List<Credit> listAllCredtis();
    public Credit findById(Long id);
    public Credit updateAmountAndQuotapaid(Long id, Double quantity, Integer quota );
}
