
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsAndEmployees1775500022201
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
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
            length: "255",
            isNullable: false,
          },
          {
            name: "category",
            type: "varchar",
            length: "255",
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
            name: "quantity",
            type: "integer",
            isNullable: false,
          },
        ],
      }),
        true,
    );

    await queryRunner.createTable(
      new Table({
        name: "employees",
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
            length: "255",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            length: "255",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "phone",
            type: "varchar",
            length: "30",
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "age",
            type: "integer",
            isNullable: false,
          },
          {
            name: "years_of_working",
            type: "integer",
            isNullable: false,
          },
        ],
      }),
        true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("employees");
    await queryRunner.dropTable("products");
  }
}
