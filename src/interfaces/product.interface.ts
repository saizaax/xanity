export interface ICharacteristic {
  key: string
  value: string
}

export interface IProduct {
  _id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  subcategory: string
  rating: number
  inStock: boolean
  hidden: boolean
  characteristics: ICharacteristic[]
  __v: number
}

export interface IOrder {
  products: string[]
  time: number
  customer: string
  phone: string
  city: string
  address: string
  payment: string
  interval: string
  status: string
}

export interface IOrderResponse {
  userId: string
  products: IProduct[]
  time: number
  customer: string
  phone: string
  city: string
  address: string
  payment: string
  interval: string
  status: string
  _id: string
  __v: number
}
