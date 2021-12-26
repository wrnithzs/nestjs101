import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    author: string;

    @Column()
    price: number;

    @Column({ default: true })
    isRecommended: boolean
}