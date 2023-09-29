import { Module } from '@nestjs/common';
import { GraphQlCodeFirstService } from './graph-ql-code-first.service';
import { GraphQlCodeFirstResolver } from './graph-ql-code-first.resolver';

@Module({
  providers: [GraphQlCodeFirstResolver, GraphQlCodeFirstService],
})
export class GraphQlCodeFirstModule {}
