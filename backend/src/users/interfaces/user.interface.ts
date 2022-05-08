import { Product } from "src/products/interfaces/product.interface"
import { Order } from "src/orders/interfaces/order.interface"
import { Role } from "src/roles/interfaces/role.interface"

export interface User {
  username: string
  password: string
  favorite: Product[]
  cart: Product[]
  orders: Order[]
  role: Role
}
