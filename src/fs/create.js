import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'node:fs/promises';


const create = async () => {
    
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, '/files', 'fresh.txt');
    const text = 'I am fresh and young'

    fs.access(filePath, fs.F_OK, (err) => {

        if (err) {

            fs.open(filePath, 'w', (err) => {
                writeFile(filePath, text);
            });

        } else {

            throw new Error('FS operation failed');

        }
      })
};

await create();