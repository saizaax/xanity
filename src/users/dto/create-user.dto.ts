import { Product } from "src/products/interfaces/product.interface"
import { Order } from "src/orders/interfaces/order.interface"
import { IsNotEmpty } from "class-validator"
import { Role } from "src/roles/schemas/role.schema"

export class CreateUserDto {
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  password: string

  favorite: Product[]
  cart: Product[]
  orders: Order[]
  role: Role
}
