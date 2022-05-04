import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreateProductDto } from "./dto/create-product.dto"
import { Product, ProductDocument } from "./schemas/product.schema"

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto)
    return createdProduct.save()
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec()
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findById(id).exec()
  }

  async update(
    id: string,
    createProductDto: CreateProductDto
  ): Promise<Product> {
    return await this.productModel
      .findByIdAndUpdate(id, createProductDto, { new: true })
      .exec()
  }

  async delete(id: string): Promise<Product> {
    return await this.productModel.findByIdAndRemove(id).exec()
  }
}
