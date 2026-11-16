import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { Logger } from '@nestjs/common';
import { APP_NAME } from '@naptarterv/shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  new Logger('Bootstrap').log(`${APP_NAME} API is running`);
}
await bootstrap();
