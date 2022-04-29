
// INTERFACES PARA LOS FORMULARIOS

export interface accountTransaction {
    id_customer: string;
    accountNumber:  string;
    operationType:  string;
    amount: number;
    date: Date;
    type: string; // account
}

export interface createProduct{
    
    dniRuc: string,
    product: string, // creditCard, Loan, account
    currency: string, // USD, PEN
    OpeningDate: Date,
    
    // Si es cuenta
    accountType: string,  // savings, current and fixed
    dniRucOwner: string,
    owner: string, // owner or signatory
    
    // si es prestamo
    CapitalAmount: string, 
    dues: number, // numero de cuotas
}

export interface creditCardConsumption{
    creditCardNumber: string,
    dniRuc: string,
    cvc: number,
    expirationDate: Date,
    amount: number,
    operationType: string,
    date: Date,
    type: string, // creditCard
}


export interface loanTransaction {
    creditNumber: string,
    dniRuc: string,
    amount: number,
    date: Date,
    operationType: string,
    type: string, // loan
}