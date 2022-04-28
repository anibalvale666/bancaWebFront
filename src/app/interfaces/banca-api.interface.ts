export interface CustomerApi {
    id:        string;
    firstName: string;
    lastName:  string;
    typeDoc:   string;
    numberDoc: string;
    address:   string;
    phone:     string;
    type:      string;
}

export interface  CustomerDetailAPI {
    id:        number;
    firstName: string;
    lastName:  string;
    typeDoc:   number;
    numberDoc: string;
    address:   string;
    phone:     string;
    type:      number;
    products:  Products;
}

export interface Products {
    total:       number;
    accounts:    Account[];
    credits:     Credit[];
    cardsCredit: CardsCredit[];
}

export interface Account {
    id:                 string;
    idProductXcustomer: string;
    numberAccount:      string;
    balance:            string;
    currency:           string;
    name:               string;
}

export interface CardsCredit {
    id:                 string;
    idProductXCustomer: string;
    numberCard:         string;
    creditLine:         string;
    availableLine:      string;
    currency:           string;
    name:               string;
}

export interface Credit {
    id:                 string;
    idProductXCustomer: string;
    amountBorrowed:     string;
    quotas:             string;
    interest:           string;
    monthlyAmount:      string;
    numberCredit:       string;
    currency:           string;
    name:               string;
}

