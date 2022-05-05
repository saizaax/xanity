import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Document } from "mongoose"
import { Product } from "src/products/schemas/product.schema"

export type OrderDocument = Order & Document

@Schema()
export class Order {
  @Prop()
  userId: string

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }] })
  products: Product[]

  @Prop()
  time: number

  @Prop()
  customer: string

  @Prop()
  phone: string

  @Prop()
  city: string

  @Prop()
  address: string

  @Prop()
  payment: string

  @Prop()
  interval: string

  @Prop()
  status: string
}

export const OrderSchema = SchemaFactory.createForClass(Order)
