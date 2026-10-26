
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "menu_items" })
export class MenuItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 150 })
  name!: string;

  @Column({ type: "varchar", length: 100 })
  category!: string;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  price!: number;

 @Column({
  name: "isAvailable",
  type: "boolean",
  default: true,
})
isAvailable!: boolean;
}

@Entity({ name: "catering_events" })
export class CateringEvent {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "eventName", type: "varchar", length: 150 })
eventName!: string;

@Column({ name: "eventDate", type: "timestamp" })
eventDate!: Date;

@Column({ type: "varchar", length: 200 })
location!: string;

@Column({ name: "expectedAttendees", type: "integer" })
expectedAttendees!: number;
}


@Entity({ name: "catering_orders" })
export class CateringOrder {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "requesterName", type: "varchar", length: 150 })
  requesterName!: string;

  @Column({ name: "eventId", type: "integer" })
  eventId!: number;

  @Column({ name: "numberOfMeals", type: "integer" })
  numberOfMeals!: number;

  @Column({ type: "varchar", length: 50, default: "pending" })
  status!: string;
}
