import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from "@nestjs/common"
import { AuthUserDto } from "src/users/dto/auth-user.dto"
import { UsersService } from "src/users/users.service"
import { AuthService } from "./auth.service"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { TokenResponseDto } from "./dto/token-response.dto"

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @ApiOperation({ summary: "Login with Username and Password" })
  @ApiResponse({ status: 200, type: TokenResponseDto })
  @Post("login")
  async login(@Body() body: AuthUserDto) {
    const user = await this.authService.validateUser(
      body.username,
      body.password
    )
    return await this.authService.login(user)
  }

  @ApiOperation({ summary: "Register with Username and Password" })
  @ApiResponse({ status: 201, type: AuthUserDto })
  @Post("register")
  async register(@Body() body: AuthUserDto) {
    const user = await this.usersService.findByUsername(body.username)
    if (user)
      throw new HttpException("User already exists", HttpStatus.BAD_REQUEST)

    return this.usersService.create(body)
  }
}
