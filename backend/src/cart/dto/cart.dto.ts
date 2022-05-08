import { ApiProperty } from "@nestjs/swagger"

export class CartDto {
  @ApiProperty()
  products: string[]
}
