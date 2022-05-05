import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from "@nestjs/common"
import { CreateOrderDto } from "./dto/create-order.dto"
import { OrdersService } from "./orders.service"

@Controller("orders")
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  async findAll() {
    return await this.ordersService.findAll()
  }

  @Post()
  async create(@Body() body: CreateOrderDto) {
    return await this.ordersService.create(body)
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const result = await this.ordersService.findOne(id)
    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)
    
    return result
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() body: CreateOrderDto) {
    const result = await this.ordersService.update(id, body)
    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return result
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const result = await this.ordersService.delete(id)
    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return result
  }
}
