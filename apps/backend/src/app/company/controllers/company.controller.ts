import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CompanyEntity } from '../entities/company.entity';
import { CompanyService } from '../services/company.service';

@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanyService) { }

    @Get('findAll')
    findAll(): Promise<CompanyEntity[]> {
        return this.companyService.findAll();
    }

    @Get('findByName')
    findByName(@Query('companyName') companyName: string): Promise<CompanyEntity> {
        return this.companyService.findByName(companyName);
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.companyService.findById(+id);
    }

    @Delete(':id')
    deleteById(@Param('id') id: number) {
        return this.companyService.deleteById(+id);
    }

    @Post('create')
    create(@Body() company: CompanyEntity) {
        return this.companyService.create(company);
    }

}
