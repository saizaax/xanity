import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { UsersService } from "src/users/users.service"
import { compare } from "bcryptjs"

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username)

    if (!user) {
      throw new HttpException("No user found with this username", HttpStatus.BAD_REQUEST)
    }

    const isPasswordMatching = await compare(password, user.password)
    
    if (!isPasswordMatching) {
      throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED)
    }

    return user
  }

  async login(user: any) {
    const payload = { _id: user._id, username: user.username, roles: user.roles }

    return {
      token: this.jwtService.sign(payload),
    }
  }
}
