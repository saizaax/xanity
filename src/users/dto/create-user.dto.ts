import { Product } from "src/products/interfaces/product.interface"
import { Order } from "src/orders/interfaces/order.interface"
import { IsNotEmpty } from "class-validator"
import { Role } from "src/roles/schemas/role.schema"
import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  username: string

  @ApiProperty()
  @IsNotEmpty()
  password: string

  @ApiProperty()
  favorite: Product[]

  @ApiProperty()
  cart: Product[]

  @ApiProperty()
  orders: Order[]

  @ApiProperty()
  role: Role
}
