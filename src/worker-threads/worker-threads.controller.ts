import { Controller, Get } from "@nestjs/common";
import { WorkerThreadsService } from './worker-threads.service';
import { Worker, isMainThread, parentPort } from 'worker_threads';

@Controller('workerThreads')
export class WorkerThreadsController {
  // Worker Threads
  // Livello: Più vicino al multithreading tradizionale come in linguaggi come Java o C++.
  // Utilizzo: Ideale per attività CPU-intensive all'interno della stessa applicazione.
  // API: Fornisce un'API dettagliata per la condivisione della memoria (come SharedArrayBuffer).
  // Comunicazione: Comunicazione diretta tra thread padre e figlio.
  //   Isolamento: Condivisione della memoria, ma con restrizioni per garantire la sicurezza dei dati.
  //   Sotto il cofano: Utilizza gli stessi thread del thread pool di libuv, ma li espone direttamente al programmatore.
  constructor(private readonly workerThreadsService: WorkerThreadsService) {}

  @Get()
  async getHello(): Promise<string> {

    return await this.runWorker();
  }

  async runWorker(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (isMainThread) {
        const worker = new Worker(__filename);
        console.time('workerThreads');

        worker.on('message', (sum) => {
          console.timeEnd('workerThreads');
          console.log(sum)
          resolve(`Somma: ${sum}`);
        });

        worker.on('error', (error) => {
          console.timeEnd('workerThreads');
          console.log(error);
          reject(error);
        });

        worker.on('exit', (code) => {
          console.timeEnd('workerThreads');
          console.log(code)
          if (code !== 0) reject(new Error(`Worker fermato con codice ${code}`));
        });

      } else {
        let sum = 0;
        for (let i = 0; i < 1000000000; i++) {
          sum += i;
        }
        parentPort.postMessage(sum);
      }
    });
  }


  // async runWorker(): Promise<string> {
  //   if (isMainThread) {
  //     return new Promise((resolve, reject) => {
  //       const worker = new Worker(__filename);
  //
  //       worker.on('message', (sum) => {
  //         console.timeEnd('workerThreads')
  //         resolve(`Somma: ${sum}`);
  //       });
  //
  //       worker.on('error', reject);
  //       worker.on('exit', (code) => {
  //         if (code !== 0) reject(new Error(`Worker fermato con codice ${code}`));
  //       });
  //     });
  //   } else {
  //     let sum = 0;
  //     for (let i = 0; i < 1e9; i++) {
  //       sum += i;
  //     }
  //     parentPort.postMessage(sum);
  //   }
  // }

}

//
// // path/to/worker.ts
// import { parentPort } from 'worker_threads';
// let sum = 0;
// for (let i = 0; i < 1e9; i++) {
//   sum += i;
// }
// parentPort.postMessage(sum);