import {
  IOrder,
  IOrderResponse,
  IProduct,
} from "../interfaces/product.interface"
import { API } from "./api"

export const getProducts = async () => {
  return await API.get<Array<IProduct>>("products")
    .then((response) => {
      return response.data
    })
    .catch((error) => console.error(error))
}

export const getProductById = async (productId: string) => {
  return await API.get<IProduct>(`products/${productId}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => console.error(error))
}

export const postFavorite = async (productIds: string[], token: string) => {
  return await API.post<Array<IProduct>>(
    "favorite",
    {
      products: productIds,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  )
    .then((response) => {
      return response.data
    })
    .catch((error) => console.error(error))
}

export const getFavorite = async (token: string) => {
  return await API.get<Array<IProduct>>("favorite", {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => {
      return response.data
    })
    .catch((error) => console.error(error))
}

export const getCart = async (token: string) => {
  return await API.get<Array<IProduct>>("cart", {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => {
      return response.data
    })
    .catch((error) => console.error(error))
}

export const postCart = async (productIds: string[], token: string) => {
  return await API.post<Array<IProduct>>(
    "cart",
    {
      products: productIds,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  )
    .then((response) => {
      return response.data
    })
    .catch((error) => console.error(error))
}

export const postOrder = async (data: IOrder, token: string) => {
  return await API.post<IOrderResponse>(
    "orders",
    {
      ...data,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
    .then((response) => {
      return response.data
    })
    .catch((error) => console.error(error))
}
