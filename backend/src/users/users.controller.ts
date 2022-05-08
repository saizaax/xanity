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
import { Role } from "src/roles/role.enum"
import { Roles } from "src/roles/roles.decorator"
import { CreateUserDto } from "./dto/create-user.dto"
import { UsersService } from "./users.service"
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, type: [CreateUserDto] })
  @ApiHeader({ name: "Authorization", required: true })
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @ApiOperation({ summary: "Add new user" })
  @ApiResponse({ status: 201, type: CreateUserDto })
  @ApiHeader({ name: "Authorization", required: true })
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body)
  }

  @ApiOperation({ summary: "Get user by ID" })
  @ApiResponse({ status: 200, type: CreateUserDto })
  @ApiHeader({ name: "Authorization", required: true })
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Get(":id")
  async findOne(@Param("id") id: string) {
    const result = await this.usersService.findOne(id)
    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return result
  }

  @ApiOperation({ summary: "Update user by ID" })
  @ApiResponse({ status: 200, type: CreateUserDto })
  @ApiHeader({ name: "Authorization", required: true })
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Patch(":id")
  async update(@Param("id") id: string, @Body() body: CreateUserDto) {
    const result = await this.usersService.update(id, body)
    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return result
  }

  @ApiOperation({ summary: "Delete user by ID" })
  @ApiResponse({ status: 200, type: CreateUserDto })
  @ApiHeader({ name: "Authorization", required: true })
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Delete(":id")
  async delete(@Param("id") id: string) {
    const result = await this.usersService.delete(id)
    if (!result) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

    return result
  }
}
