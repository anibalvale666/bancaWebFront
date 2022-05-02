
// INTERFACES PARA LOS FORMULARIOS

// export interface accountTransaction {
//     id_customer: string;
//     accountNumber:  string;
//     operationType:  string;
//     amount: number;
//     date: Date;
//     type: string; // account
// }

// export interface creditCardConsumption{
//     creditCardNumber: string,
//     dniRuc: string,
//     cvc: number,
//     expirationDate: Date,
//     amount: number,
//     operationType: string,
//     date: Date,
//     type: string, // creditCard
// }


// export interface loanTransaction {
//     creditNumber: string,
//     dniRuc: string,
//     amount: number,
//     date: Date,
//     operationType: string,
//     type: string, // loan
// }



// export interface createProduct{
    
//     dniRuc: string,
//     product: string, // creditCard, loan, account
//     currency: string, // USD, PEN
//     OpeningDate: Date,
    
//     // Si es cuenta
//     accountType: string,  // savings, current and fixed
//     dniRucOwner: string,
//     owner: string, // owner or signatory
    
//     // si es prestamo
//     CapitalAmount: string, 
//     dues: number, // numero de cuotas
// }


// interfaces de envio al back
export interface AccountBack {
    idcustomer: number,
    idproduct: number,
    currency: string,
    accounttype: string,
}
export interface LoanBack {
    idcustomer: number,
    idproduct: number,
    currency: string,
    amountborrowed: number,
    quotas: number,
}

export interface CreditCardBack {
    idcustomer: number,
    idproduct: number,
    currency: string,
}


export interface TransactionBack {
    idcustomer: number,
    idheadline?: number,
    idaccount?: number,
    idcredit?: number,
    idcardcredit?: number,
    operation: string,
    amount: number
}


