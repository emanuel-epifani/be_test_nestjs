import { Test, TestingModule } from '@nestjs/testing';
import { WithoutMultiThreadsService } from './without-multi-threads.service';

describe('WithoutMultiThreadsService', () => {
  let service: WithoutMultiThreadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WithoutMultiThreadsService],
    }).compile();

    service = module.get<WithoutMultiThreadsService>(WithoutMultiThreadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
