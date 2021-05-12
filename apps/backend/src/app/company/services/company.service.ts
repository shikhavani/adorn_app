import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { Repository } from 'typeorm';
import { CompanyEntity } from '../entities/company.entity';

@Injectable()
export class CompanyService {


    constructor(@InjectRepository(CompanyEntity) private companyRepo: Repository<CompanyEntity>) { }

    async findByName(companyName: string): Promise<CompanyEntity> {
        return await this.companyRepo.findOne({
            where: {
                companyName: companyName
            }
        });
    }

    async create(company: CompanyEntity): Promise<CompanyEntity> {
        return await this.companyRepo.save(company);
    }

    async findById(id: number) {
        return await this.companyRepo.findOne(id);
    }

    async findAll(): Promise<CompanyEntity[]> {
        return await this.companyRepo.find();
    }

    async deleteById(id: number): Promise<void> {
        await this.companyRepo.delete(id);
    }
}
