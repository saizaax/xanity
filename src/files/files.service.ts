import { Injectable } from "@nestjs/common"
import { path } from "app-root-path"
import { ensureDir } from "fs-extra"
import { writeFile } from "fs/promises"
import { FileRequestDto } from "./dto/file-request.dto"
import { fileResponseDto } from "./dto/file-response.dto"

@Injectable()
export class FilesService {
  constructor() {}

  async upload(data: FileRequestDto): Promise<fileResponseDto[]> {
    const STATIC_PATH = "static"

    const { files } = data
    const uploadFolder = `${path}/${STATIC_PATH}`
    await ensureDir(uploadFolder)

    const res: fileResponseDto[] = []

    for (const file of files) {
      await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer)
      res.push({
        name: file.originalname,
        path: `uploads/${file.originalname}`,
      })
    }

    return res
  }
}
