import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common"
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { JwtAuthGuard } from "src/auth/guards/jwt.guard"
import { Role } from "src/roles/role.enum"
import { Roles } from "src/roles/roles.decorator"
import { CreateProductDto } from "./dto/create-product.dto"
import { ProductsService } from "./products.service"

@ApiTags("Products")
@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: "Get all products" })
  @ApiResponse({ status: 200, type: [CreateProductDto] })
  @Get()
  findAll() {
    return this.productsService.findAll()
  }

  @ApiOperation({ summary: "Add new product" })
  @ApiResponse({ status: 201, type: CreateProductDto })
  @ApiHeader({ name: "Authorization", required: true })
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Post()
  async create(@Body() body: CreateProductDto) {
    return this.productsService.create(body)
  }

  @ApiOperation({ summary: "Get product by ID" })
  @ApiResponse({ status: 200, type: CreateProductDto })
  @Get(":id")
  async findOne(@Param("id") id: string) {
    const results = await this.productsService.findOne(id)
    if (!results) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return results
  }

  @ApiOperation({ summary: "Update product by ID" })
  @ApiResponse({ status: 200, type: CreateProductDto })
  @ApiHeader({ name: "Authorization", required: true })
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Patch(":id")
  async update(@Param("id") id: string, @Body() body: CreateProductDto) {
    const results = await this.productsService.update(id, body)
    if (!results) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return results
  }

  @ApiOperation({ summary: "Delete product by ID" })
  @ApiResponse({ status: 200, type: CreateProductDto })
  @ApiHeader({ name: "Authorization", required: true })
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Delete(":id")
  async delete(@Param("id") id: string) {
    const results = await this.productsService.delete(id)
    if (!results) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return results
  }
}
