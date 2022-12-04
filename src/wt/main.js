import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { fileURLToPath } from 'node:url';
import path from 'path';

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const workerFile = path.join(__dirname, 'worker.js');


    const runServise = async (workerData) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerFile, { workerData });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0)
                  reject(new Error(`Worker stopped with exit code ${code}`));
              })
        })
        
    }

    const run = async () => {
            const resArray = [];

            for (let i = 0; i < cpus().length; i++) {

                const resWorker = await runServise(10 + i)
                      .then(data => ({status: 'resolved', data}))
                      .catch(err => ({status: 'error', data: null}));

                resArray.push(resWorker);
            }

            return resArray;
    }

    await run().then(res => console.log(res));
};

await performCalculations();