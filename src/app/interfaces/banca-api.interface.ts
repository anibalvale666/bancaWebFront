
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
}*/



// detail interfaces
export interface account {
    id: string;
    account_type: string;
    account_number: string;
    cci: string;
    balance: number;
    opening_date: string;
    owner: string;
    currency: string;
  }

  export interface loan {
    id: string;
    loan_number: string;
    capital_amount: number;
    interest_rate: number;
    dues: number;
    opening_date: Date;
    monthly_fee: number;
    active: boolean;
    type: string;
    currency: string;
  }

  export interface creditCard {
    id: string;
    opening_date: Date;
    credit_card_number: string;
    cvc: string;         
    expiration_date: Date;     
    credit_line: number; 
    available_line: number;
    currency: string;
    type: string;
  }