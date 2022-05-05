import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
import { Characteristic } from "./characteristic.schema"

export type ProductDocument = Product & Document

@Schema()
export class Product {
  @Prop()
  name: string

  @Prop()
  description: string

  @Prop()
  price: number

  @Prop([String])
  images: string[]

  @Prop()
  category: string

  @Prop()
  subcategory: string

  @Prop()
  rating: number

  @Prop()
  inStock: boolean

  @Prop()
  hidden: boolean

  @Prop([Characteristic])
  characteristics: Characteristic[]
}

export const ProductSchema = SchemaFactory.createForClass(Product)
