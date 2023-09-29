import { Test, TestingModule } from '@nestjs/testing';
import { ClusterModuleService } from './cluster-module.service';

describe('ClusterModuleService', () => {
  let service: ClusterModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClusterModuleService],
    }).compile();

    service = module.get<ClusterModuleService>(ClusterModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
