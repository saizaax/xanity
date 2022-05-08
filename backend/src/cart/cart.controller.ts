import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from "@nestjs/common"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { JwtAuthGuard } from "src/auth/guards/jwt.guard"
import { CreateProductDto } from "src/products/dto/create-product.dto"
import { UserDto } from "src/users/dto/user.dto"
import { User } from "src/users/user.decorator"
import { UsersService } from "src/users/users.service"
import { CartDto } from "./dto/cart.dto"

@ApiTags("Cart")
@Controller("cart")
export class CartController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: "Update cart products" })
  @ApiResponse({ status: 200, type: [CreateProductDto] })
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Post()
  async updateCart(@Body() body: CartDto, @User() user: UserDto) {
    return await this.usersService.updateCart(user._id, body)
  }

  @ApiOperation({ summary: "Get cart products" })
  @ApiResponse({ status: 200, type: [CreateProductDto] })
  @UseGuards(JwtAuthGuard)
  @Get()
  async getCart(@User() user: UserDto) {
    return await this.usersService.getCart(user._id)
  }
}
