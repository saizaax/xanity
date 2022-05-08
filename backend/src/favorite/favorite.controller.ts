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
import { FavoriteDto } from "./dto/favorite.dto"

@ApiTags("Favorite")
@Controller("favorite")
export class FavoriteController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: "Update favorite products" })
  @ApiResponse({ status: 200, type: [CreateProductDto] })
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Post()
  async updateFavorite(@Body() body: FavoriteDto, @User() user: UserDto) {
    return await this.usersService.updateFavorite(user._id, body)
  }

  @ApiOperation({ summary: "Get favorite products" })
  @ApiResponse({ status: 200, type: [CreateProductDto] })
  @UseGuards(JwtAuthGuard)
  @Get()
  async getFavorite(@User() user: UserDto) {
    return await this.usersService.getFavorite(user._id)
  }
}
