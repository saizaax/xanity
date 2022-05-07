import {
  Controller,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common"
import {
  FileInterceptor,
  AnyFilesInterceptor,
  FileFieldsInterceptor,
} from "@nestjs/platform-express"
import { JwtAuthGuard } from "src/auth/guards/jwt.guard"
import { Role } from "src/roles/role.enum"
import { Roles } from "src/roles/roles.decorator"
import { FileRequestDto } from "./dto/file-request.dto"
import { fileResponseDto } from "./dto/file-response.dto"
import { FilesService } from "./files.service"

@Controller("files")
export class FilesController {
  constructor(private filesService: FilesService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Post("upload")
  @UseInterceptors(FileFieldsInterceptor([{ name: "files", maxCount: 10 }]))
  async upload(
    @UploadedFiles() files: FileRequestDto
  ): Promise<fileResponseDto[]> {
    return this.filesService.upload(files)
  }
}
