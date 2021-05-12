import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { QuotationEntity } from '../../entities/quotation.entity';
import { QuotationService } from '../../services/quotation/quotation.service';
import { QuotationWrapper } from '../../utils/QuotationWrapper';

@Controller('quotation')
export class QuotationController {

    constructor(private quotationService: QuotationService) { }

    @Get('findAll')
    findAll(): Promise<QuotationEntity[]> {
        return this.quotationService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.quotationService.findById(+id);
    }

    @Delete(':id')
    deleteById(@Param('id') id: number) {
        return this.quotationService.deleteById(+id);
    }

    @Post('create')
    create(@Body() quotationWrapper: QuotationWrapper) {
        return this.quotationService.create(quotationWrapper);
    }
}
