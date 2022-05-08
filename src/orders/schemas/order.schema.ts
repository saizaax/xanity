import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger"
import mongoose, { Document } from "mongoose"
import { Product } from "src/products/schemas/product.schema"

export type OrderDocument = Order & Document

@Schema()
export class Order {
  @ApiProperty()
  @Prop()
  userId: string

  @ApiProperty()
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }] })
  products: Product[]

  @ApiProperty()
  @Prop()
  time: number

  @ApiProperty()
  @Prop()
  customer: string

  @ApiProperty()
  @Prop()
  phone: string

  @ApiProperty()
  @Prop()
  city: string

  @ApiProperty()
  @Prop()
  address: string

  @ApiProperty()
  @Prop()
  payment: string

  @ApiProperty()
  @Prop()
  interval: string

  @ApiProperty()
  @Prop()
  status: string
}

export const OrderSchema = SchemaFactory.createForClass(Order)
