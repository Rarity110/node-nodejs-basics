import { createHash } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, '/files', 'fileToCalculateHashFor.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw new Error('FS operation failed')
        const hash = createHash('sha256').update(data).digest('hex');
        console.log(hash);
      });
};

await calculateHash();