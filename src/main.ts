import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

const hbs = require("hbs")

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views', 'layouts'));
  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'))
  app.setViewEngine('hbs');

  const port = process.env.PORT || 3000; // Порт по умолчанию 3000, если не указан в переменной окружения
  await app.listen(port);
}

bootstrap();