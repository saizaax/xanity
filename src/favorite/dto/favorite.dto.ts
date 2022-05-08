import { ApiProperty } from "@nestjs/swagger"

export class FavoriteDto {
  @ApiProperty()
  products: String[]
}
