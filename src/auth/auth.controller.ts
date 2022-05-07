import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common"
import { CreateUserDto } from "src/users/dto/create-user.dto"
import { AuthUserDto } from "src/users/dto/auth-user.dto"
import { UsersService } from "src/users/users.service"
import { AuthService } from "./auth.service"

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Post("login")
  async login(@Body() body: AuthUserDto) {
    const user = await this.authService.validateUser(body.username, body.password)
    return await this.authService.login(user)
  }

  @Post("register")
  async register(@Body() body: CreateUserDto) {
    const user = await this.usersService.findByUsername(body.username)
    if (user) throw new HttpException("User already exists", HttpStatus.BAD_REQUEST)

    return this.usersService.create(body)
  }
}
