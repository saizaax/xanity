import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreateUserDto } from "./dto/create-user.dto"
import { User, UserDocument } from "./schemas/user.schema"
import { genSalt, hash } from "bcryptjs"
import { ROLE_USER } from "src/roles/role.constants"
import { AuthUserDto } from "./dto/auth-user.dto"
import { CreateOrderDto } from "src/orders/dto/create-order.dto"
import { CartDto } from "src/cart/dto/cart.dto"
import { Product } from "src/products/schemas/product.schema"
import { FavoriteDto } from "src/favorite/dto/favorite.dto"

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel
      .find()
      .populate("favorite")
      .populate("cart")
      .populate({ path: "orders", populate: { path: "products" } })
      .exec()
  }

  async create(body: AuthUserDto): Promise<User> {
    const salt = await genSalt(10)

    const createdUser = new this.userModel({
      username: body.username,
      password: await hash(body.password, salt),
      roles: [ROLE_USER],
    })

    return await createdUser.save()
  }

  async addOrder(id: string, order: CreateOrderDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(
      id,
      {
        $push: { orders: order },
      },
      { new: true }
    )
  }

  async updateCart(id: string, productIds: CartDto): Promise<Product[]> {
    return (
      await this.userModel
        .findByIdAndUpdate(
          id,
          {
            cart: productIds.products,
          },
          { new: true }
        )
        .populate("cart")
        .exec()
    ).cart
  }

  async getCart(id: string): Promise<Product[]> {
    return (await this.userModel.findById(id).populate("cart").exec()).cart
  }

  async updateFavorite(
    id: string,
    productIds: FavoriteDto
  ): Promise<Product[]> {
    return (
      await this.userModel
        .findByIdAndUpdate(
          id,
          {
            favorite: productIds.products,
          },
          { new: true }
        )
        .populate("favorite")
        .exec()
    ).favorite
  }

  async getFavorite(id: string): Promise<Product[]> {
    return (await this.userModel.findById(id).populate("favorite").exec())
      .favorite
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel
      .findById(id)
      .populate("favorite")
      .populate("cart")
      .populate({ path: "orders", populate: { path: "products" } })
      .exec()
  }

  async findByUsername(username: string): Promise<User> {
    return await this.userModel
      .findOne({ username: username })
      .populate("favorite")
      .populate("cart")
      .populate({ path: "orders", populate: { path: "products" } })
      .lean()
      .exec()
  }

  async update(id: string, body: CreateUserDto) {
    return await this.userModel
      .findByIdAndUpdate(id, body, { new: true })
      .populate("favorite")
      .populate("cart")
      .populate({ path: "orders", populate: { path: "products" } })
      .exec()
  }

  async delete(id: string) {
    return await this.userModel
      .findByIdAndRemove(id)
      .populate("favorite")
      .populate("cart")
      .populate({ path: "orders", populate: { path: "products" } })
      .exec()
  }
}
