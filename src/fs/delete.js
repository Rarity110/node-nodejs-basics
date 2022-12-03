import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, '/files', 'fileToRemove.txt');


    fs.unlink(filePath, (err) => {
        if(err) {
            throw new Error('FS operation failed');
        } 
    })
};

await remove();