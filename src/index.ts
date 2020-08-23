import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const url = await app.getUrl()

  Logger.log(`Server started on ${url}`, 'Server')
}

bootstrap();
