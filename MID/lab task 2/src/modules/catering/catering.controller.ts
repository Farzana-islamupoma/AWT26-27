
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { CateringService } from "./catering.service";
import {
  CreateMenuItemDto,
  CreateCateringEventDto,
  CreateCateringOrderDto,
} from "./dto/catering.dto";

@Controller("catering")
export class CateringController {
  constructor(private readonly cateringService: CateringService) {}

  // Menu Items
  @Post("menu-items")
  createMenuItem(@Body() dto: CreateMenuItemDto) {
    return this.cateringService.createMenuItem(dto);
  }

  @Get("menu-items")
  getMenuItems() {
    return this.cateringService.getMenuItems();
  }

  @Get("menu-items/:id")
  getMenuItem(@Param("id", ParseIntPipe) id: number) {
    return this.cateringService.getMenuItem(id);
  }

  @Patch("menu-items/:id")
  updateMenuItem(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: Partial<CreateMenuItemDto>,
  ) {
    return this.cateringService.updateMenuItem(id, dto);
  }

  @Delete("menu-items/:id")
  deleteMenuItem(@Param("id", ParseIntPipe) id: number) {
    return this.cateringService.deleteMenuItem(id);
  }

  // Catering Events
  @Post("events")
  createCateringEvent(@Body() dto: CreateCateringEventDto) {
    return this.cateringService.createCateringEvent(dto);
  }

  @Get("events")
  getCateringEvents() {
    return this.cateringService.getCateringEvents();
  }

  @Get("events/:id")
  getCateringEvent(@Param("id", ParseIntPipe) id: number) {
    return this.cateringService.getCateringEvent(id);
  }

  @Patch("events/:id")
  updateCateringEvent(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: Partial<CreateCateringEventDto>,
  ) {
    return this.cateringService.updateCateringEvent(id, dto);
  }

  @Delete("events/:id")
  deleteCateringEvent(@Param("id", ParseIntPipe) id: number) {
    return this.cateringService.deleteCateringEvent(id);
  }

  // Catering Orders
  @Post("orders")
  createCateringOrder(@Body() dto: CreateCateringOrderDto) {
    return this.cateringService.createCateringOrder(dto);
  }

  @Get("orders")
  getCateringOrders() {
    return this.cateringService.getCateringOrders();
  }

  @Get("orders/:id")
  getCateringOrder(@Param("id", ParseIntPipe) id: number) {
    return this.cateringService.getCateringOrder(id);
  }

  @Patch("orders/:id")
  updateCateringOrder(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: Partial<CreateCateringOrderDto>,
  ) {
    return this.cateringService.updateCateringOrder(id, dto);
  }

  @Delete("orders/:id")
  deleteCateringOrder(@Param("id", ParseIntPipe) id: number) {
    return this.cateringService.deleteCateringOrder(id);
  }
}
