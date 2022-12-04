import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stderr, stdout } from 'process';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, '/files', 'fileToRead.txt');

    const readStream = createReadStream(filePath, 'utf-8');

    let data = '';
    readStream.on('data', chunk => data += chunk);
    readStream.on('end', () => stdout.write(data));
    readStream.on('error', error => stderr._write('Error', error.message));
};

await read();