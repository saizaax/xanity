import { Module } from "@nestjs/common"
import { UsersModule } from "src/users/users.module"
import { CartController } from "./cart.controller"

@Module({
  imports: [UsersModule],
  controllers: [CartController],
})
export class CartModule {}
