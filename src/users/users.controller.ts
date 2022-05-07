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
import { JwtAuthGuard } from "src/auth/guards/jwt.guard"
import { User } from "src/users/user.decorator"
import { Role } from "src/roles/role.enum"
import { Roles } from "src/roles/roles.decorator"
import { CreateUserDto } from "./dto/create-user.dto"
import { UsersService } from "./users.service"

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body)
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Get(":id")
  async findOne(@Param("id") id: string) {
    const result = await this.usersService.findOne(id)
    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return result
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Patch(":id")
  async update(@Param("id") id: string, @Body() body: CreateUserDto) {
    const result = await this.usersService.update(id, body)
    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return result
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Delete(":id")
  async delete(@Param("id") id: string) {
    const result = await this.usersService.delete(id)
    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return result
  }
}
