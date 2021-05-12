import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyService } from '../../../company/services/company.service';
import { QuotationEntity } from '../../entities/quotation.entity';
import { QuotationWrapper } from '../../utils/QuotationWrapper';

@Injectable()
export class QuotationService {
    constructor(@InjectRepository(QuotationEntity) private quotationRepo: Repository<QuotationEntity>, private companyService: CompanyService) { }
    private readonly logger = new Logger(QuotationService.name);
    async create(quotation: QuotationWrapper): Promise<Object> {
        try {
            const quotationEntity = new QuotationEntity();
            this.logger.log(quotation.companyName)
            quotationEntity.companyid_fk = await this.companyService.findByName(quotation.companyName);
            quotationEntity.name = quotation.name;
            quotationEntity.creationDate = new Date();
            quotationEntity.modificationDate = new Date();
            this.logger.log(quotation.termsCondition)
            quotationEntity.configuration = quotation.termsCondition;
            quotationEntity.address = quotation.address;
            quotationEntity.GSTno = quotation.GSTno;
            this.logger.log(quotationEntity)
            await this.quotationRepo.save(quotationEntity);
            return {"successMsg": "Quotation created successfully"}
        } catch {
            return {"errorMsg": "Something went wrong"}
        }
    }

    async findById(id: number) {
        return await this.quotationRepo.findOne(id);
    }

    async findAll(): Promise<QuotationEntity[]> {
        return await this.quotationRepo.find();
    }

    async deleteById(id: number): Promise<void> {
        await this.quotationRepo.delete(id);
    }
}
