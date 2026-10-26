
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCateringTables1793023797638
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "menu_items",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            length: "150",
            isNullable: false,
          },
          {
            name: "category",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "price",
            type: "numeric",
            precision: 10,
            scale: 2,
            isNullable: false,
          },
          {
            name: "isAvailable",
            type: "boolean",
            default: true,
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: "catering_events",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "eventName",
            type: "varchar",
            length: "150",
            isNullable: false,
          },
          {
            name: "eventDate",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "location",
            type: "varchar",
            length: "200",
            isNullable: false,
          },
          {
            name: "expectedAttendees",
            type: "integer",
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: "catering_orders",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "requesterName",
            type: "varchar",
            length: "150",
            isNullable: false,
          },
          {
            name: "eventId",
            type: "integer",
            isNullable: false,
          },
          {
            name: "numberOfMeals",
            type: "integer",
            isNullable: false,
          },
          {
            name: "status",
            type: "varchar",
            length: "50",
            default: "'pending'",
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("catering_orders");
    await queryRunner.dropTable("catering_events");
    await queryRunner.dropTable("menu_items");
  }
}



