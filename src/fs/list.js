import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdout } from'process';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filesPath = path.join(__dirname, '/files');
   
    const info = (file) => {
      const fileInfo = path.join(filesPath, file.name);
      fs.stat(fileInfo, (err, stats) => {
        if (err) throw new Error('FS operation failed');
        if (stats.isFile()) {stdout.write(`${path.parse(fileInfo).name}\n`)}
    })
    }
    fs.readdir(filesPath, {withFileTypes: true}, (err, files) => {
        if (err) throw new Error('FS operation failed');
        files.forEach(file => {
            info(file);
        });
    });

};

await list();