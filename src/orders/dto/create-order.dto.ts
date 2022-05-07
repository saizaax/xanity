import { IsInt } from "class-validator"
import { Product } from "src/products/interfaces/product.interface"

export class CreateOrderDto {
  userId: string
  products: Product[]

  @IsInt()
  time: number
  
  customer: string
  phone: string
  city: string
  address: string
  payment: string
  interval: string
  status: string
}
