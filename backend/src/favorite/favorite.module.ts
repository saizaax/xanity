import { Module } from "@nestjs/common"
import { UsersModule } from "src/users/users.module"
import { FavoriteController } from "./favorite.controller"

@Module({
  imports: [UsersModule],
  controllers: [FavoriteController],
})
export class FavoriteModule {}
