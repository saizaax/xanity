import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Order } from "src/orders/schemas/order.schema"
import { Product } from "src/products/schemas/product.schema"
import { Document } from "mongoose"
import mongoose from "mongoose"
import { Role } from "src/roles/schemas/role.schema"
import { ApiProperty } from "@nestjs/swagger"

export type UserDocument = User & Document

@Schema()
export class User {
  @ApiProperty()
  @Prop({ unique: true })
  username: string

  @ApiProperty()
  @Prop()
  password: string

  @ApiProperty()
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }] })
  favorite: Product[]

  @ApiProperty()
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }] })
  cart: Product[]

  @ApiProperty()
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Order.name }] })
  orders: Order[]

  @ApiProperty()
  @Prop([Role])
  roles: Role[]
}

export const UserSchema = SchemaFactory.createForClass(User)
