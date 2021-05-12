import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { CompanyEntity } from '../../company/entities/company.entity';

@Entity({ name: 'Quotation' })
export class QuotationEntity {
    @PrimaryGeneratedColumn({ name: 'quotationid_pk' })
    id: number;

    @ManyToOne(() => CompanyEntity, (companyEntity) =>
        companyEntity.id, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })

    @JoinColumn({ name: 'companyid_fk' })
    companyid_fk: CompanyEntity

    @Column({ type: 'varchar', name: 'name', length: 150})
    name: string;

    @Column({ type: 'varchar', name: 'contact', length: 12, nullable: true})
    contact: string;

    @Column({ type: 'varchar', name: 'address', length: 300})
    address: string;

    @Column({ type: 'varchar', name: 'GSTno', length: 15, nullable: true})
    GSTno: string;

    @CreateDateColumn({ type: 'timestamp', name: 'creationDate', nullable: true, default: () => "CURRENT_TIMESTAMP(6)"  })
    creationDate: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'modificationDate', nullable: true,default: () => "CURRENT_TIMESTAMP(6)" })
    modificationDate: Date;

    @Column({ type: 'json', name: 'configuration', nullable: true})
    configuration: string;

    @Column({ type: 'boolean',  name: 'deleted',default: false })
    deleted: boolean
}