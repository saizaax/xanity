import { Characteristic } from "./characteristic.interface"

export interface Product {
  name: string
  description: string
  price: number
  images: string[]
  category: string
  subcategory: string
  rating: number
  inStock: boolean
  hidden: boolean
  characteristics: Characteristic[]
}
