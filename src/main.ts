import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nested API')
    .setDescription(
      'Create an API (Nested) with just one table having categories (id, name, parentId)' +
        ' and the api response should be having nested children upto n levels.',
    )
    .setVersion('1.0')
    .addTag('nested')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
