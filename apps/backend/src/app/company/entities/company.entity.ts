import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Company' })
export class CompanyEntity {
    @PrimaryGeneratedColumn({ name: 'companyid_pk' })
    id: number;

    @Column({ type: 'varchar', name: 'name', length: 150, unique: true })
    companyName: string;

    @Column({ type: 'varchar', name: 'address', length: 300, nullable: true })
    address: string;

    @Column({ type: 'varchar', name: 'GSTno', length: 15})
    GSTno: string;

    @Column({ default: false })
    deleted: boolean
}