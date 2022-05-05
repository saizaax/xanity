import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreateOrderDto } from "./dto/create-order.dto"
import { Order, OrderDocument } from "./schemas/order.schema"

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name)
    private orderModel: Model<OrderDocument>
  ) {}

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find().populate("products").exec()
  }

  async findOne(id: string): Promise<Order> {
    return await this.orderModel.findById(id).populate("products").exec()
  }

  async create(body: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(body)
    return createdOrder.save()
  }

  async update(id: string, body: CreateOrderDto): Promise<Order> {
    return await this.orderModel.findByIdAndUpdate(id, body, { new: true })
  }

  async delete(id: string): Promise<Order> {
    return await this.orderModel.findByIdAndRemove(id)
  }
}
