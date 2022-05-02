export interface Customer {
    id: number;
    first_name?: string;
    last_name?: string;
    doc: string;
    type_doc: string; // dni, ruc
    address?: string;
    phone?: string;
    password: string;
    type_user: string; // admin, customer
    type: string; // personal, business
}

// detail interfaces
export interface Account {
    id:            number;
    idcustomer:    number;
    idproduct:     number;
    currency:      string;
    openingdate:   Date;
    numberaccount: string;
    cci:           string;
    balance:       number;
    accounttype:   string;
    product:       Product;
}

export interface Product {
    id:                  number;
    nameproduct:        string;
    descriptionproduct: string;
    descriptiondetail:  string;
    category:            string;
    logo:                string;
    img:                 string;
}


export interface Credit {
    id:             number;
    idcustomer:     number;
    idproduct:      number;
    currency:       string;
    openingdate:    Date;
    amountborrowed: number;
    quotas:         number;
    interest:       number;
    monthlyamount:  number;
    amountpaid:     number;
    quotaspaid:     number;
    numbercredit:   string;
    product:        Product;
}


export interface CreditCard {
    id:            number;
    idcustomer:    number;
    idproduct:     number;
    currency:      string;
    openingdate:   Date;
    numbercard:    string;
    cvc:           string;
    creditline:    number;
    availableline: number;
    expirationday: Date;
    product:       Product;
}

export interface Transaction {
    id:           number;
    idcustomer:   number;
    idheadline:   number;
    idaccount:    number;
    idcredit:     number;
    idcardcredit: number;
    date:         Date;
    quota:        number;
    operation:    string;
    amount:       number;
}
