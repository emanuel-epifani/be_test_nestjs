import { Module } from '@nestjs/common';
import { WithoutMultiThreadsService } from './without-multi-threads.service';
import { WithoutMultiThreadsController } from './without-multi-threads.controller';

@Module({
  controllers: [WithoutMultiThreadsController],
  providers: [WithoutMultiThreadsService],
})
export class WithoutMultiThreadsModule {}
