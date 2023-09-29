import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkerThreadsModule } from './multi-thread/worker-threads/worker-threads.module';
import { GraphQlCodeFirstModule } from './graphql/graph-ql-code-first/graph-ql-code-first.module';
import { GraphQlSchemaFirstModule } from './graphql/graph-ql-schema-first/graph-ql-schema-first.module';
import {WithoutMultiThreadsController} from "./multi-thread/without-multi-threads/without-multi-threads.controller";
import {ClusterModuleModule} from "./multi-thread/cluster-module/cluster-module.module";
import {WithoutMultiThreadsModule} from "./multi-thread/without-multi-threads/without-multi-threads.module";

@Module({
  imports: [WithoutMultiThreadsModule, WorkerThreadsModule, ClusterModuleModule ,GraphQlCodeFirstModule, GraphQlSchemaFirstModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
