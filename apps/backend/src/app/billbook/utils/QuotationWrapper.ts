import { IsNotEmpty } from 'class-validator';
export class QuotationWrapper {

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly address: string;

    @IsNotEmpty()
    readonly GSTno: string;

    @IsNotEmpty()
    readonly termsCondition: string;

    @IsNotEmpty()
    readonly companyName: string;

    @IsNotEmpty()
    readonly productList: [];
}