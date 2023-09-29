import { Controller, Get } from "@nestjs/common";
import { ChildProcessService } from './child-process.service';
import { exec } from 'child_process';
import { promisify } from 'util';
const execAsync = promisify(exec);

@Controller('child-process')
export class ChildProcessController {
  constructor(private readonly childProcessService: ChildProcessService) {}


  @Get()
  async sortNumbers(): Promise<number[]> {
    console.time('childProcess');
    const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
    return await this.sortLargeArray(largeArray);
  }

  async sortLargeArray(numbers: number[]): Promise<number[]> {
    const { stdout } = await execAsync(`python src/Utils/sort.py '${JSON.stringify(numbers)}'`);
    console.timeEnd('childProcess')
    return JSON.parse(stdout);
  }
}
