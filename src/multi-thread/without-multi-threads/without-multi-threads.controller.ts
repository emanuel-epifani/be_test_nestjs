import { Controller, Get } from "@nestjs/common";
import { WithoutMultiThreadsService } from './without-multi-threads.service';

@Controller('withoutMultiThreads')
export class WithoutMultiThreadsController {
  constructor(private readonly withoutMultiThreadsService: WithoutMultiThreadsService) {}

  @Get('')
  getHello(): string {
    console.time('noThread');

    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
      sum += i;
    }
    console.timeEnd('noThread')
    return `Somma: ${sum}`;

  }


}

