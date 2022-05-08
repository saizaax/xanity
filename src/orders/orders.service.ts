import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { Role } from "src/roles/role.enum"
import { UserDto } from "src/users/dto/user.dto"
import { UsersService } from "src/users/users.service"
import { hasRole } from "src/utils/hasRole"
import { CreateOrderDto } from "./dto/create-order.dto"
import { Order, OrderDocument } from "./schemas/order.schema"

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name)
    private orderModel: Model<OrderDocument>,
    private usersService: UsersService
  ) {}

  async validateRoles(user: UserDto, result: CreateOrderDto): Promise<void> {
    if (!hasRole(user, Role.ADMIN) && user._id !== result.userId)
      throw new HttpException("Not found", HttpStatus.NOT_FOUND)
  }

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find().populate("products").exec()
  }

  async findOne(id: string): Promise<Order> {
    const result = await this.orderModel
      .findById(id)
      .populate("products")
      .exec()

    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return result
  }

  async create(body: CreateOrderDto, user: UserDto): Promise<Order> {
    const createdOrder = new this.orderModel({ ...body, userId: user._id })
    await createdOrder.save()
    await createdOrder.populate("products")
    await this.usersService.addOrder(user._id, createdOrder._id)

    return createdOrder
  }

  async update(id: string, body: CreateOrderDto): Promise<Order> {
    const result = await this.orderModel
      .findByIdAndUpdate(id, body, { new: true })
      .populate("products")
      .exec()

    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return result
  }

  async delete(id: string): Promise<Order> {
    const result = await this.orderModel
      .findByIdAndRemove(id)
      .populate("products")
      .exec()

    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return result
  }
}
