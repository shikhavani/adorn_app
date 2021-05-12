import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { BillbookModule } from './billbook/billbook.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'adorn_DB',
      username: 'root',
      password: 'root',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
      logging: ["query", "error"]
    }),
    CompanyModule,
    BillbookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
