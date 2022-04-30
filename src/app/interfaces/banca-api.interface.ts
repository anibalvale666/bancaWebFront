export interface Customer {
    id:        string;
    first_name: string;
    last_name:  string;
    type_doc:   string;
    number_doc: string;
    address:   string;
    phone:     string;
    type_customer:      string;
    type_user: string;
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
