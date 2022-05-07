import { Role } from "src/roles/interfaces/role.interface"
import { UserDto } from "src/users/dto/user.dto"

export const hasRole = (user: UserDto, ...requiredRoles: string[]) => {
  return user.roles.some((role: Role) => requiredRoles.includes(role.name))
}