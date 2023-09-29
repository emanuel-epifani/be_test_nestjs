import { Controller, Get } from "@nestjs/common";
import { ClusterModuleService } from './cluster-module.service';
import { cpus } from 'os';
// import cluster from "cluster"

// import * as _cluster from 'cluster';
// const cluster = _cluster as unknown as _cluster.Cluster;

import * as cluster from "cluster";
const thisCluster = (cluster as any) as cluster.Cluster;



//npm install --save-dev ts-node
@Controller('clusterModule')
export class ClusterModuleController {
  // Cluster Module
  // Livello: Opera al livello del processo, non del thread.
  // Utilizzo: Ideale per attività I/O-intensive e per scalare applicazioni su più core.
  // API: Più semplice e meno flessibile rispetto a Worker Threads.
  // Comunicazione: Utilizza IPC (Inter-Process Communication) per la comunicazione tra il processo master e i worker.
  // Isolamento: Isolamento completo del processo, nessuna condivisione della memoria.
  // Sotto il cofano: Fa fork del processo Node.js corrente, creando nuove istanze completamente isolate.
  constructor(private readonly clusterModuleService: ClusterModuleService) {}

  @Get()
  getHello(): string {
    console.time('clusterModule');


    if (thisCluster.isPrimary) {
      const cpuCount = cpus().length;

      for (let i = 0; i < cpuCount; i++) {
        thisCluster.fork();
      }

      thisCluster.on('exit', () => {
        thisCluster.fork();
      });
    } else {
      let sum = 0;
      for (let i = 0; i < 10000000000; i++) {
        sum += i;
      }
      console.timeEnd('clusterModule')
      return `Somma: ${sum}`;
    }



  }




}
