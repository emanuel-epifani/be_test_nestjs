import { Test, TestingModule } from '@nestjs/testing';
import { ChildProcessController } from './child-process.controller';
import { ChildProcessService } from './child-process.service';

describe('ChildProcessController', () => {
  let controller: ChildProcessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChildProcessController],
      providers: [ChildProcessService],
    }).compile();

    controller = module.get<ChildProcessController>(ChildProcessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
