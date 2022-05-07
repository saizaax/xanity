import { IsBoolean, IsInt, IsNotEmpty, IsNumber } from "class-validator"
import { Characteristic } from "../interfaces/characteristic.interface"

export class CreateProductDto {
  @IsNotEmpty()
  name: string

  description: string

  @IsInt()
  price: number
  
  images: [string]
  category: string
  subcategory: string

  @IsNumber()
  rating: number

  @IsBoolean()
  inStock: boolean

  @IsBoolean()
  hidden: boolean

  characteristics: Characteristic[]
}
