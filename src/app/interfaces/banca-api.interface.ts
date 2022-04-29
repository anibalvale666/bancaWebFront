export interface CustomerApi {
    id:        number;
    firstname: string;
    lastname:  string;
    typedoc:   number;
    numberdoc: string;
    address:   string;
    phone:     string;
    type:      number;
}
export interface AccountApi {
    id:            number;
    idcustomer:    number;
    idproduct:     number;
    currency:      string;
    date:          Date;
    numberaccount: string;
    cci:           string;
    balance:       number;
    product:       ProductApi;
}
export interface CreditApi {
    id:             number;
    idcustomer:     number;
    idproduct:      number;
    currency:       string;
    date:           Date;
    amountborrowed: number;
    quotas:         number;
    interest:       number;
    monthlyamount:  number;
    amountpaid:     number;
    quotaspaid:     number;
    numbercredit:   string;
    product:        ProductApi;
}
export interface CardCreditApi {
    id:            number;
    idcustomer:    number;
    idproduct:     number;
    currency:      string;
    date:          Date;
    numbercard:    string;
    cvv:           string;
    creditline:    number;
    availableline: number;
    expirationday: string;
    product:       ProductApi;
}

export interface ProductApi {
    id:                    number;
    name:                  string;
    descriptionshort:      string;
    descriptionlong:       string;
    category:              number;
    logoawesome:           string;
    maintenancecommission: number;
    withdrawalpermonth:    number;
    withdrawalday:         number;
}


/*export interface CustomerDetailAPI {
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
}*/

