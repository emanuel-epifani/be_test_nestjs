import { Module } from '@nestjs/common';
import { ChildProcessService } from './child-process.service';
import { ChildProcessController } from './child-process.controller';

@Module({
  controllers: [ChildProcessController],
  providers: [ChildProcessService],
})
export class ChildProcessModule {}
