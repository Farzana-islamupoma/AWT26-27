
import {
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import {
  MenuItem,
  CateringEvent,
  CateringOrder,
} from "./entities/catering.entity";
import {
  CreateMenuItemDto,
  CreateCateringEventDto,
  CreateCateringOrderDto,
} from "./dto/catering.dto";

@Injectable()
export class CateringService {
  constructor(
    @InjectRepository(MenuItem)
    private readonly menuItemRepository: Repository<MenuItem>,

    @InjectRepository(CateringEvent)
    private readonly cateringEventRepository: Repository<CateringEvent>,

    @InjectRepository(CateringOrder)
    private readonly cateringOrderRepository: Repository<CateringOrder>,
  ) {}

  // Menu Items

  async createMenuItem(dto: CreateMenuItemDto): Promise<MenuItem> {
    const menuItem = this.menuItemRepository.create(dto);
    return this.menuItemRepository.save(menuItem);
  }

  async getMenuItems(): Promise<MenuItem[]> {
    return this.menuItemRepository.find();
  }

  async getMenuItem(id: number): Promise<MenuItem> {
    const menuItem = await this.menuItemRepository.findOneBy({ id });

    if (!menuItem) {
      throw new NotFoundException(`Menu item with ID ${id} not found`);
    }

    return menuItem;
  }

  async updateMenuItem(
    id: number,
    dto: Partial<CreateMenuItemDto>,
  ): Promise<MenuItem> {
    const menuItem = await this.getMenuItem(id);
    Object.assign(menuItem, dto);
    return this.menuItemRepository.save(menuItem);
  }

  async deleteMenuItem(id: number): Promise<{ message: string }> {
    const menuItem = await this.getMenuItem(id);
    await this.menuItemRepository.remove(menuItem);

    return { message: `Menu item with ID ${id} deleted successfully` };
  }

  // Catering Events

  async createCateringEvent(
    dto: CreateCateringEventDto,
  ): Promise<CateringEvent> {
    const event = this.cateringEventRepository.create({
      ...dto,
      eventDate: new Date(dto.eventDate),
    });

    return this.cateringEventRepository.save(event);
  }

  async getCateringEvents(): Promise<CateringEvent[]> {
    return this.cateringEventRepository.find();
  }

  async getCateringEvent(id: number): Promise<CateringEvent> {
    const event = await this.cateringEventRepository.findOneBy({ id });

    if (!event) {
      throw new NotFoundException(`Catering event with ID ${id} not found`);
    }

    return event;
  }

  async updateCateringEvent(
    id: number,
    dto: Partial<CreateCateringEventDto>,
  ): Promise<CateringEvent> {
    const event = await this.getCateringEvent(id);

    Object.assign(event, {
      ...dto,
      ...(dto.eventDate !== undefined
        ? { eventDate: new Date(dto.eventDate) }
        : {}),
    });

    return this.cateringEventRepository.save(event);
  }

  async deleteCateringEvent(id: number): Promise<{ message: string }> {
    const event = await this.getCateringEvent(id);
    await this.cateringEventRepository.remove(event);

    return { message: `Catering event with ID ${id} deleted successfully` };
  }

  // Catering Orders

  async createCateringOrder(
    dto: CreateCateringOrderDto,
  ): Promise<CateringOrder> {
    const order = this.cateringOrderRepository.create(dto);
    return this.cateringOrderRepository.save(order);
  }

  async getCateringOrders(): Promise<CateringOrder[]> {
    return this.cateringOrderRepository.find();
  }

  async getCateringOrder(id: number): Promise<CateringOrder> {
    const order = await this.cateringOrderRepository.findOneBy({ id });

    if (!order) {
      throw new NotFoundException(`Catering order with ID ${id} not found`);
    }

    return order;
  }

  async updateCateringOrder(
    id: number,
    dto: Partial<CreateCateringOrderDto>,
  ): Promise<CateringOrder> {
    const order = await this.getCateringOrder(id);
    Object.assign(order, dto);
    return this.cateringOrderRepository.save(order);
  }

  async deleteCateringOrder(id: number): Promise<{ message: string }> {
    const order = await this.getCateringOrder(id);
    await this.cateringOrderRepository.remove(order);

    return { message: `Catering order with ID ${id} deleted successfully` };
  }
}
