import { ApiProperty } from "@nestjs/swagger"

export class CharacteristicDto {
  @ApiProperty()
  key: string

  @ApiProperty()
  value: string
}
