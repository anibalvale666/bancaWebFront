package com.nttdata.productcustomer.services;

import com.nttdata.productcustomer.entity.Account;
import com.nttdata.productcustomer.entity.CardCredit;


import java.util.List;

public interface CardCreditService {
    //buscar card credit por clientes
    public List<CardCredit> findByIdcustomer(Long idcustomer);
    public CardCredit saveCardCredit(CardCredit cardCredit);

    public CardCredit findById(Long id);
    public List<CardCredit> listAllCardCredits();
    public CardCredit updateAvailibleLine(Long id, Double quantity, String ope );
}
