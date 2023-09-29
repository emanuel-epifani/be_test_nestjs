import { Test, TestingModule } from '@nestjs/testing';
import { ClusterModuleController } from './cluster-module.controller';
import { ClusterModuleService } from './cluster-module.service';

describe('ClusterModuleController', () => {
  let controller: ClusterModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClusterModuleController],
      providers: [ClusterModuleService],
    }).compile();

    controller = module.get<ClusterModuleController>(ClusterModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
