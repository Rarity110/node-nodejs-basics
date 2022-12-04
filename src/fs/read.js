import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stderr, stdout } from'process';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, '/files', 'fileToRead.txt');
    fs.access(filePath, fs.F_OK, (err) => {
        if(err) {
            throw new Error('FS operation failed')
        } else {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) throw new Error('FS operation failed')
                console.log(data);
              });
        }
    })
};

await read();