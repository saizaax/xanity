import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { MongooseModule } from "@nestjs/mongoose"
import { ProductsModule } from "./products/products.module"
import { OrdersModule } from "./orders/orders.module"
import { UsersModule } from "./users/users.module"
import { AuthModule } from "./auth/auth.module"
import { APP_GUARD } from "@nestjs/core"
import { RolesModule } from "./roles/roles.module"
import { RolesGuard } from "./roles/guards/roles.guard"
import { JwtModule } from "@nestjs/jwt"
import { FilesModule } from "./files/files.module"
import { MulterModule } from "@nestjs/platform-express"
import { ServeStaticModule } from "@nestjs/serve-static"
import { join } from "path"

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb://` +
        `${process.env.MONGODB_USERNAME}:` +
        `${process.env.MONGODB_PASSWORD}@` +
        `${process.env.MONGODB_HOSTNAME}:` +
        `${process.env.MONGODB_PORT}/` +
        `${process.env.MONGODB_DB}` +
        `?authSource=admin`
    ),
    MulterModule.register({
      dest: "./uploads",
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static"),
      serveRoot: "/static",
    }),
    ProductsModule,
    OrdersModule,
    UsersModule,
    AuthModule,
    RolesModule,
    FilesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
