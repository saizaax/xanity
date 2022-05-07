import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreateUserDto } from "./dto/create-user.dto"
import { User, UserDocument } from "./schemas/user.schema"
import { genSalt, hash } from "bcryptjs"
import { ROLE_USER } from "src/roles/role.constants"
import { AuthUserDto } from "./dto/auth-user.dto"

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
