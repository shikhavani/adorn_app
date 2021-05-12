export interface IQuotation {
}

export interface ICreateQuotationPayload {
    name: string;
    address: string;
    GSTno: string;
    termsCondition: string;
    companyName: string;
    productList: ICreateProductList[]
}

export interface ICreateProductList {
    name: string;
    quantity: number;
    rate: number;
    amount: number
}
