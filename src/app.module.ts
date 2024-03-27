import {Global, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkerThreadsModule } from './worker-threads/worker-threads.module';

import {ConfigModule} from "@nestjs/config";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {GraphQLModule} from "@nestjs/graphql";
import { join } from 'path';
import { UserModule } from "./user/user.module";

@Global()
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Specifica dove generare lo schema
      sortSchema: true, // (Opzionale) Ordina alfabeticamente lo schema per una migliore leggibilità
      // Altre configurazioni possono includere:
      // playground: true, // Abilita GraphQL Playground (se necessario)
      // debug: true, // Mostra i log di debug (per ambiente di sviluppo)
    }),
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
      WorkerThreadsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
