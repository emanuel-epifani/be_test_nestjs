import { Module } from '@nestjs/common';
import { ClusterModuleService } from './cluster-module.service';
import { ClusterModuleController } from './cluster-module.controller';

@Module({
  controllers: [ClusterModuleController],
  providers: [ClusterModuleService],
})
export class ClusterModuleModule {}
