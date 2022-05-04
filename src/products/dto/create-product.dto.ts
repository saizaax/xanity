import { Characteristic } from "../interfaces/characteristic.interface"

export class CreateProductDto {
  name: string
  description: string
  price: number
  images: [string]
  category: string
  subcategory: string
  rating: number
  inStock: boolean
  hidden: boolean
  characteristics: Characteristic[]
}
