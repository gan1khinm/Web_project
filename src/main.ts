// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
//
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const port = process.env.PORT || 3000; // Порт по умолчанию 3000, если не указан в переменной окружения
//   await app.listen(port);
// }
//
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.useStaticAssets(join(__dirname, '..', 'public/js'));
  // app.useStaticAssets(join(__dirname, '..', 'public/css'));
  // app.useStaticAssets(join(__dirname, '..', 'public/img'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  const port = process.env.PORT || 3000; // Порт по умолчанию 3000, если не указан в переменной окружения
  await app.listen(port);
}

bootstrap();