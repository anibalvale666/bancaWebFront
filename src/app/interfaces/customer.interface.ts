

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
    accountType: string; // savings, current or fixed
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

////PArte de DIEGO
//tabla completa interfaz de customer
export interface CustomerInterface {
    id?:           string;
    dni?:          string;
    firstName?:    string;
    lastName?:     string;
    ruc?:          string;
    businessName?: string;
    address?:      string;
    phone?:        string;
}
//tabla completa interfaz de accountxcustomer
export interface AccountsXCustomerInterface {
    idCustomer:    number;
    idProduct:     number;
    headline:      number;
    numberAccount: string;
    cci:           string;
    balance:       number;
    openingDate:   number;
    currency:      string;
    accountType:   string;
    id?:            string;
}
//vista de cuentas por cliente
export interface AccountsXCustomerInterfaceView {
    idCustomer:    string;
    numberAccount: string;
    nameProduct:   string;
    balance:       string;
    currency:       string;
}
//vista de creditos por cliente
export interface CreditXCustomerInterfaceView {
    idCustomer:       string;
    codCredit:        string;
    borrowedBalance:  string;
    dues:             string;
    numberCardCredit: string;
    creditLine:       string;
    availableLine:    string;
    nameProduct:      string;
}




