import { Test, TestingModule } from '@nestjs/testing';
import { WorkerThreadsController } from './worker-threads.controller';
import { WorkerThreadsService } from './worker-threads.service';

describe('WorkerThreadsController', () => {
  let controller: WorkerThreadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkerThreadsController],
      providers: [WorkerThreadsService],
    }).compile();

    controller = module.get<WorkerThreadsController>(WorkerThreadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
