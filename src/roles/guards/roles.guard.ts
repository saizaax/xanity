import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { JwtService } from "@nestjs/jwt"
import { Observable } from "rxjs"
import { Role } from "../interfaces/role.interface"
import { ROLES_KEY } from "../roles.decorator"

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
        context.getClass(),
        context.getHandler(),
      ])

      if (!requiredRoles) return true

      const request = context.switchToHttp().getRequest()
      const authHeader = request.headers.authorization

      const [bearer, token] = authHeader.split(" ")

      if (bearer !== "Bearer")
        throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED)

      const user = this.jwtService.verify(token)
      request.user = user

      return user.roles.some((role: Role) => requiredRoles.includes(role.name))
    } catch (e) {
      throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED)
    }
  }
}
