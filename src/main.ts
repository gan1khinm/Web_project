import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const hbs = require("hbs")

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
  );
  //const connection = await createConnection();
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views', 'layouts'));
  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'))
  app.setViewEngine('hbs');

  const options = new DocumentBuilder() // добавлено
      .setTitle('Your API') // добавлено
      .setDescription('API description') // добавлено
      .setVersion('1.0') // добавлено
      .build(); // добавлено
  const document = SwaggerModule.createDocument(app, options); // добавлено
  SwaggerModule.setup('api', app, document); // добавлено

  const port = process.env.PORT || 3000; // Порт по умолчанию 3000, если не указан в переменной окружения
  await app.listen(port);
}

bootstrap();