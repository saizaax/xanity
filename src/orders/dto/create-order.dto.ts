import { ApiProperty } from "@nestjs/swagger"
import { IsInt } from "class-validator"
import { Product } from "src/products/interfaces/product.interface"

export class CreateOrderDto {
  @ApiProperty()
  userId: string

  @ApiProperty()
  products: Product[]

  @ApiProperty()
  @IsInt()
  time: number

  @ApiProperty()
  customer: string

  @ApiProperty()
  phone: string

  @ApiProperty()
  city: string

  @ApiProperty()
  address: string

  @ApiProperty()
  payment: string

  @ApiProperty()
  interval: string

  @ApiProperty()
  status: string
}
