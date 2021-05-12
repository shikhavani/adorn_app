import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyController } from './controllers/company.controller';
import { CompanyEntity } from './entities/company.entity';
import { CompanyService } from './services/company.service';

@Module({
  imports: [TypeOrmModule.forFeature(
    [CompanyEntity],
  )],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService]
})
export class CompanyModule { }
