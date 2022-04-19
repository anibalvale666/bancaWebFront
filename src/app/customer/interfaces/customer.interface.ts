

export interface Customer {
    id: string;
    dni?: number;
    firstName?: string;
    lastName?: string;
    address?: string;
    phone?: number;
    email: string;
    ruc?: string;
    businessName?: string;
}

export interface Account {
    id: string;
    typeAccount: string; // savings, current or fixed
    numberAccount: string;
    openingDate: Date;
    cci: string;
    balance: number;
    currency: string;
}

export interface Loan {
    id: string;
    capitalAmount: number;
    interestRate: number;
    openingDate: Date;
    paymentsNumber: number;
    paymentAmount: number;
    currency: string;
}

export interface CreditCard {
    id: string;
    numberCreditCard: number;
    openingDate: Date;
    cvc: number;
    limitAmount: number;
    currency: string;
}

export interface Transaction {
    id: string;
    idCustomer: string;
    idAccount?: string;
    idLoan?: string;
    idCreditCard?: string;
    amount: number;
    transactionDate: Date;
    description?: string;
}