import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"
import { ValidationPipe } from "./pipes/validation.pipe"

async function start() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule)

  // Swagger settings
  const config = new DocumentBuilder()
    .setTitle("API for advanced backend")
    .setDescription("Documenting REST API")
    .setVersion("1.0.0")
    .addTag("API")
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("/api/docs", app, document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log("Server started on port", PORT))
}

start()
