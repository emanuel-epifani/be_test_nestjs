import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ConfigService } from "@nestjs/config";
const cors = require('cors');
import * as process from 'process';
import { INestApplication } from "@nestjs/common";

async function bootstrap() {
  const app : INestApplication<any> = await NestFactory.create(AppModule);

  // set dynamic variables
  const configService = app.get(ConfigService);
  const env = process.env.NODE_ENV
  const host = configService.get<string>(`${env}_HOST`);
  const port = configService.get<number>(`${env}_PORT`);


  const swaggerPath = 'swagger';
  const config = new DocumentBuilder()
      .setTitle('test_nodejs_brandsdistribution')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerPath, app, document);

  app.use(cors());
  const server = await app.listen(port, host);
  const address = server.address();

  console.log(`Adapter in uso: ${app.getHttpAdapter().constructor.name}`);
  console.log(`BACKEND => http://${address["address"]}:${address["port"]}`);
  console.log(`SWAGGER => http://${address["address"]}:${address["port"]}/${swaggerPath}`);
  console.log(`GRAPHQL => http://${address["address"]}:${address["port"]}/graphql`);

}
bootstrap();
