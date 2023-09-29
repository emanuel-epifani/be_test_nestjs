import { Test, TestingModule } from '@nestjs/testing';
import { GraphQlSchemaFirstService } from './graph-ql-schema-first.service';

describe('GraphQlSchemaFirstService', () => {
  let service: GraphQlSchemaFirstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphQlSchemaFirstService],
    }).compile();

    service = module.get<GraphQlSchemaFirstService>(GraphQlSchemaFirstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
