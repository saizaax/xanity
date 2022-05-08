import { ApiProperty } from "@nestjs/swagger"

export class FileRequestDto {
  @ApiProperty({
    description: "Multipart/form-data File",
    type: "file",
  })
  files: Express.Multer.File[]
}
