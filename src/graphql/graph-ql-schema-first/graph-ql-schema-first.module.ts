import { Module } from '@nestjs/common';
import { GraphQlSchemaFirstService } from './graph-ql-schema-first.service';
import { GraphQlSchemaFirstResolver } from './graph-ql-schema-first.resolver';

@Module({
  providers: [GraphQlSchemaFirstResolver, GraphQlSchemaFirstService],
})
export class GraphQlSchemaFirstModule {}
