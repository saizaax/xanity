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
} from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto"
import { UsersService } from "./users.service"

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body)
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const result = await this.usersService.findOne(id)
    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return result
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() body: CreateUserDto) {
    const result = await this.usersService.update(id, body)
    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return result
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const result = await this.usersService.delete(id)
    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return result
  }
}
