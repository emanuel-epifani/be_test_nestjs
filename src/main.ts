import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cpus } from 'os';
// import cluster from "cluster"

// import * as _cluster from 'cluster';
// const cluster = _cluster as unknown as _cluster.Cluster;

import * as cluster from 'cluster';
const thisCluster = cluster as any as cluster.Cluster;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

//CLUSTER_MODULE: x non avviare tutti sulla stessa porta (https://nodejs.org/api/cluster.html)
if (thisCluster.isMaster) {
  const cpuCount = cpus().length;

  for (let i = 0; i < cpuCount; i++) {
    console.log('aperto un nuovo fork');
    thisCluster.fork();
  }

  thisCluster.on('exit', (worker) => {
    console.log(`Worker ${worker.id} è morto`);
    thisCluster.fork();
  });
} else {
  bootstrap();
}
