import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Order } from "src/orders/schemas/order.schema"
import { Product } from "src/products/schemas/product.schema"
import { Document } from "mongoose"
import mongoose from "mongoose"

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop()
  username: string

  @Prop()
  password: string

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }] })
  favorite: Product[]

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }] })
  cart: Product[]

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Order.name }] })
  orders: Order[]
}

export const UserSchema = SchemaFactory.createForClass(User)
