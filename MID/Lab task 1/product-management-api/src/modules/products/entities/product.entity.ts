
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "varchar", length: 255 })
  category!: string;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  price!: number;

  @Column({ type: "integer" })
  quantity!: number;
}
