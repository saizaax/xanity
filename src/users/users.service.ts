import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreateUserDto } from "./dto/create-user.dto"
import { User, UserDocument } from "./schemas/user.schema"

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

  async create(body: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(body)
    await createdUser.save()

    await createdUser.populate("favorite")
    await createdUser.populate("cart")
    await createdUser.populate({
      path: "orders",
      populate: { path: "products" },
    })

    return createdUser
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel
      .findById(id)
      .populate("favorite")
      .populate("cart")
      .populate({ path: "orders", populate: { path: "products" } })
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
