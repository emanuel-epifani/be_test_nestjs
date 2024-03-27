import { Test, TestingModule } from '@nestjs/testing';
import { WorkerThreadsService } from './worker-threads.service';

describe('WorkerThreadsService', () => {
  let service: WorkerThreadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkerThreadsService],
    }).compile();

    service = module.get<WorkerThreadsService>(WorkerThreadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
