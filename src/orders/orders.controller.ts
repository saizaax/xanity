import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common"
import { JwtAuthGuard } from "src/auth/guards/jwt.guard"
import { User } from "src/users/user.decorator"
import { Role } from "src/roles/role.enum"
import { Roles } from "src/roles/roles.decorator"
import { CreateUserDto } from "src/users/dto/create-user.dto"
import { UserDto } from "src/users/dto/user.dto"
import { hasRole } from "src/utils/hasRole"
import { CreateOrderDto } from "./dto/create-order.dto"
import { OrdersService } from "./orders.service"

@Controller("orders")
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Get()
  async findAll() {
    return await this.ordersService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() body: CreateOrderDto, @User() user: UserDto) {
    await this.ordersService.validateRoles(user, body)
    return await this.ordersService.create(body)
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findOne(@Param("id") id: string, @User() user: UserDto) {
    const result = await this.ordersService.findOne(id)
    await this.ordersService.validateRoles(user, result)
  
    return result
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Patch(":id")
  async update(@Param("id") id: string, @Body() body: CreateOrderDto) {
    return await this.ordersService.update(id, body)
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Delete(":id")
  async delete(@Param("id") id: string) {
    return await this.ordersService.delete(id)
  }
}
