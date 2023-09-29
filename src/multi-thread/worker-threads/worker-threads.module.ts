import { Module } from '@nestjs/common';
import { WorkerThreadsService } from './worker-threads.service';
import { WorkerThreadsController } from './worker-threads.controller';

@Module({
  controllers: [WorkerThreadsController],
  providers: [WorkerThreadsService],
})
export class WorkerThreadsModule {}
