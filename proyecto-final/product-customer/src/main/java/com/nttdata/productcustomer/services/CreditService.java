package com.nttdata.productcustomer.services;

import com.nttdata.productcustomer.entity.Credit;

import java.util.List;
import java.util.Map;

public interface CreditService {
    //buscar creditos por clientes
    public List<Credit> findByIdcustomer(Long idcustomer);
    public Map.Entry<Boolean,Credit>  saveCredit(Credit credit);

    public List<Credit> listAllCredtis();
    public Credit findById(Long id);
    public Credit updateAmountAndQuotapaid(Long id, Double quantity, Integer quota );
}
