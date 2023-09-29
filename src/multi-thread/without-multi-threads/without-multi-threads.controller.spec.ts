import { Test, TestingModule } from '@nestjs/testing';
import { WithoutMultiThreadsController } from './without-multi-threads.controller';
import { WithoutMultiThreadsService } from './without-multi-threads.service';

describe('WithoutMultiThreadsController', () => {
  let controller: WithoutMultiThreadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WithoutMultiThreadsController],
      providers: [WithoutMultiThreadsService],
    }).compile();

    controller = module.get<WithoutMultiThreadsController>(WithoutMultiThreadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
