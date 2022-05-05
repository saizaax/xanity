import { Product } from "src/products/interfaces/product.interface"
import { Order } from "src/orders/interfaces/order.interface"

export class CreateUserDto {
  username: string
  password: string
  favorite: Product[]
  cart: Product[]
  orders: Order[]
}
