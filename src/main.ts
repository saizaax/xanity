import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const swagger = new DocumentBuilder()
    .setTitle("XANITY API")
    .setDescription("REST API Documentation")
    .setVersion("1.0")
    .addTag("API")
    .build()

  const document = SwaggerModule.createDocument(app, swagger)
  SwaggerModule.setup("api/docs", app, document)

  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix("api")

  const port = process.env.PORT || 5050
  await app.listen(port)
}
bootstrap()
