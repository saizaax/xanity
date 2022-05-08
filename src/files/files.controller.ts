import {
  Controller,
  HttpCode,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common"
import { FileFieldsInterceptor } from "@nestjs/platform-express"
import {
  ApiBody,
  ApiConsumes,
  ApiHeader,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger"
import { JwtAuthGuard } from "src/auth/guards/jwt.guard"
import { Role } from "src/roles/role.enum"
import { Roles } from "src/roles/roles.decorator"
import { FileRequestDto } from "./dto/file-request.dto"
import { fileResponseDto } from "./dto/file-response.dto"
import { FilesService } from "./files.service"

@ApiTags("Files")
@Controller("files")
export class FilesController {
  constructor(private filesService: FilesService) {}

  @ApiOperation({ summary: "Upload file to server" })
  @ApiBody({ type: FileRequestDto })
  @ApiConsumes("multipart/form-data")
  @ApiResponse({ status: 200, type: fileResponseDto })
  @ApiHeader({ name: "Authorization", required: true })
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @HttpCode(200)
  @Post("upload")
  @UseInterceptors(FileFieldsInterceptor([{ name: "files", maxCount: 10 }]))
  async upload(
    @UploadedFiles() files: FileRequestDto
  ): Promise<fileResponseDto[]> {
    return this.filesService.upload(files)
  }
}
