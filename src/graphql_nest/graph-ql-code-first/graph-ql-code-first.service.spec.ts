import { Test, TestingModule } from '@nestjs/testing';
import { GraphQlCodeFirstService } from './graph-ql-code-first.service';

describe('GraphQlCodeFirstService', () => {
  let service: GraphQlCodeFirstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphQlCodeFirstService],
    }).compile();

    service = module.get<GraphQlCodeFirstService>(GraphQlCodeFirstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
