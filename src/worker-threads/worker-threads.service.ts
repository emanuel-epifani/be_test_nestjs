import { Injectable, OnModuleInit } from "@nestjs/common";
import * as fs from 'fs';
import path from "path";
import Jimp from "jimp";
import { Worker } from "worker_threads";
//https://www.youtube.com/watch?v=UaAz27D0Lj4&list=RDCMUChNA2S9dtoEMAVGPddbDIJg&start_radio=1


@Injectable()
export class WorkerThreadsService implements OnModuleInit {


  async onModuleInit(): Promise<any> {
    //await this.processImagesSingleThread('/Users/emanuelepifani/Desktop/photo_uploaded')
    // await this.processImagesConcurrently('/Users/emanuelepifani/Desktop/photo_uploaded')
    await this.processImagesConcurrently('src/worker-threads/images_to_process')
  }


  async processImagesSingleThread(dirWithFiles) {
    console.log('Start processing images with SINGLE-thread');

    const imagesDir = dirWithFiles;
    const files = fs.readdirSync(imagesDir);
    const startTime = Date.now();

    for (const file of files) {
      const filePath = path.join(imagesDir, file);
      try {
        const image = await Jimp.read(filePath);
        await image.flip(false, true).rotate(90).writeAsync(`./processed/${file}`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }

    const endTime = Date.now();
    console.log(`SINGLE-thread processing took ${(endTime - startTime)} ms.`);
  }



  async processImagesConcurrently(dirWithFiles) {
    console.log('Start processing images with MULTI-thread');

    const start = performance.now();
    const imagesDir = dirWithFiles; // Percorso della cartella delle immagini
    const files = fs.readdirSync(imagesDir);

    const promises = files.map(file => {
      console.log("Processing file:", file);

      return new Promise((resolve, reject) => {

        const worker = new Worker('./worker.js', {
          workerData: {
            filePath: path.join(imagesDir, file),
            outputPath: `processed_${file}`
          }
        });

        worker.on('message', (message) => {
          if (message.success) {
            console.log(`Elaborazione completata con successo: ${message.outputPath}`);
            resolve(message);
          } else {
            console.error(`Errore nell'elaborazione di ${message.filePath}: ${message.error}`);
            reject(new Error(message.error));
          }
        });

        worker.on('error', (err) => {
          console.error('Worker threw an error:', err);
          reject(err);
        });

        worker.on('exit', (code) => {
          if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
        });
      });
    });

    await Promise.all(promises);

    const end = performance.now();
    console.log(`MULTI-thread processing took ${(end - start)} ms.`);

  }


}
