import { IProduct } from "./product.interface"

export interface IToken {
  token: string
}

export interface IUser {
  _id: string
  username: string
  roles: IRole[]
}

export interface IRole {
  name: string
  description: string
  _id: string
}

export interface IUserResponse {
  username: string
  password: string
  favorite: IProduct[]
  cart: IProduct[]
  orders: IProduct[]
  roles: IRole[]
  _id: string
  __v: number
}
