import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from '../company/company.module';
import { InvoiceController } from './controllers/invoice/invoice.controller';
import { QuotationController } from './controllers/quotation/quotation.controller';
import { QuotationEntity } from './entities/quotation.entity';
import { InvoiceService } from './services/invoice/invoice.service';
import { QuotationService } from './services/quotation/quotation.service';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [QuotationEntity],
        ), CompanyModule],
    controllers: [QuotationController, InvoiceController],
    providers: [QuotationService, InvoiceService]
})
export class BillbookModule { }
