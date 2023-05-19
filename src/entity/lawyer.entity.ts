import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('lawyers')
export class LawyersModel {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column('varchar')
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;
}
