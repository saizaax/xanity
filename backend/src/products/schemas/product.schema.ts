import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger"
import { Document } from "mongoose"
import { Characteristic } from "./characteristic.schema"

export type ProductDocument = Product & Document

@Schema()
export class Product {
  @ApiProperty()
  @Prop()
  name: string

  @ApiProperty()
  @Prop()
  description: string

  @ApiProperty()
  @Prop()
  price: number

  @ApiProperty()
  @Prop([String])
  images: string[]

  @ApiProperty()
  @Prop()
  category: string

  @ApiProperty()
  @Prop()
  subcategory: string

  @ApiProperty()
  @Prop()
  rating: number

  @ApiProperty()
  @Prop()
  inStock: boolean

  @ApiProperty()
  @Prop()
  hidden: boolean

  @ApiProperty()
  @Prop([Characteristic])
  characteristics: Characteristic[]
}

export const ProductSchema = SchemaFactory.createForClass(Product)
