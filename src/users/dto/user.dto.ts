import { Role } from "src/roles/interfaces/role.interface"

export class UserDto {
  _id: string
  username: string
  password: string
  roles: Role[]
}
