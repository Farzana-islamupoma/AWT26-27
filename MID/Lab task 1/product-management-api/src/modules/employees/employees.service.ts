
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entities/employee.entity";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";

type PublicEmployee = Omit<Employee, "password">;

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  private toPublicEmployee(employee: Employee): PublicEmployee {
    const { password, ...publicEmployee } = employee;
    return publicEmployee;
  }

  async create(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<PublicEmployee> {
    const employee = this.employeeRepository.create({
      ...createEmployeeDto,
      password: "dummy-password",
    });

    const savedEmployee = await this.employeeRepository.save(employee);
    return this.toPublicEmployee(savedEmployee);
  }

  async findAll(): Promise<PublicEmployee[]> {
    const employees = await this.employeeRepository.find();
    return employees.map((employee) => this.toPublicEmployee(employee));
  }

  async findOne(id: number): Promise<PublicEmployee> {
    const employee = await this.employeeRepository.findOneBy({ id });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    return this.toPublicEmployee(employee);
  }

  async update(
    id: number,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<PublicEmployee> {
    const employee = await this.employeeRepository.findOneBy({ id });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    Object.assign(employee, updateEmployeeDto);
    const updatedEmployee = await this.employeeRepository.save(employee);

    return this.toPublicEmployee(updatedEmployee);
  }

  async remove(id: number): Promise<{ message: string }> {
    const employee = await this.employeeRepository.findOneBy({ id });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    await this.employeeRepository.remove(employee);

    return { message: `Employee with ID ${id} deleted successfully` };
  }
}
