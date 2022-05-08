import { ApiProperty } from "@nestjs/swagger"

export class fileResponseDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  path: string
}
