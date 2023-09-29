import { Test, TestingModule } from '@nestjs/testing';
import { GraphQlSchemaFirstResolver } from './graph-ql-schema-first.resolver';
import { GraphQlSchemaFirstService } from './graph-ql-schema-first.service';

describe('GraphQlSchemaFirstResolver', () => {
  let resolver: GraphQlSchemaFirstResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphQlSchemaFirstResolver, GraphQlSchemaFirstService],
    }).compile();

    resolver = module.get<GraphQlSchemaFirstResolver>(GraphQlSchemaFirstResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
