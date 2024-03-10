import { Test, TestingModule } from '@nestjs/testing';
import { GraphQlCodeFirstResolver } from './graph-ql-code-first.resolver';
import { GraphQlCodeFirstService } from './graph-ql-code-first.service';

describe('GraphQlCodeFirstResolver', () => {
  let resolver: GraphQlCodeFirstResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphQlCodeFirstResolver, GraphQlCodeFirstService],
    }).compile();

    resolver = module.get<GraphQlCodeFirstResolver>(GraphQlCodeFirstResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
