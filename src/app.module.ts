import {Global, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkerThreadsModule } from './multi-thread/worker-threads/worker-threads.module';
import { GraphQlCodeFirstModule } from './graphql_nest/graph-ql-code-first/graph-ql-code-first.module';
import {WithoutMultiThreadsController} from "./multi-thread/without-multi-threads/without-multi-threads.controller";
import {ClusterModuleModule} from "./multi-thread/cluster-module/cluster-module.module";
import {WithoutMultiThreadsModule} from "./multi-thread/without-multi-threads/without-multi-threads.module";
import {ConfigModule} from "@nestjs/config";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {GraphQLModule} from "@nestjs/graphql";
import { join } from 'path';

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
      WithoutMultiThreadsModule, WorkerThreadsModule, ClusterModuleModule ,GraphQlCodeFirstModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
