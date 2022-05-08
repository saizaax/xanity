import { ApiProperty } from "@nestjs/swagger"
import { Role } from "src/roles/interfaces/role.interface"

export class UserDto {
  @ApiProperty()
  _id: string

  @ApiProperty()
  username: string

  @ApiProperty()
  password: string

  @ApiProperty()
  roles: Role[]
}
