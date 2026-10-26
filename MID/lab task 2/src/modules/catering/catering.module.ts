
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  MenuItem,
  CateringEvent,
  CateringOrder,
} from "./entities/catering.entity";
import { CateringService } from "./catering.service";
import { CateringController } from "./catering.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MenuItem,
      CateringEvent,
      CateringOrder,
    ]),
  ],
  controllers: [CateringController],
  providers: [CateringService],
})
export class CateringModule {}
