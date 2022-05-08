import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsInt, IsNotEmpty, IsNumber } from "class-validator"
import { Characteristic } from "../interfaces/characteristic.interface"

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  description: string

  @ApiProperty()
  @IsInt()
  price: number

  @ApiProperty()
  images: [string]

  @ApiProperty()
  category: string

  @ApiProperty()
  subcategory: string

  @ApiProperty()
  @IsNumber()
  rating: number

  @ApiProperty()
  @IsBoolean()
  inStock: boolean

  @ApiProperty()
  @IsBoolean()
  hidden: boolean

  @ApiProperty()
  characteristics: Characteristic[]
}
