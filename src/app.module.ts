import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { MongooseModule } from "@nestjs/mongoose"
import { ProductsModule } from "./products/products.module"
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
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
    ProductsModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
