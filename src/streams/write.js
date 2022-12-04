import { writeFile, createWriteStream, appendFile } from 'fs';
import stream from 'stream';
import { stdin, stdout } from 'process';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, '/files', 'fileToWrite.txt');

    writeFile(filePath, '', err => {
        if (err) {
            throw new Error('FS operation failed')
        }
    });
    
    stdout.write('Hello, Friend! Write something \n');
    let writeableStream = createWriteStream('fileToWrite.txt');
    
    stdin.on('data', data => {
        appendFile(filePath, data, err => {
            if (err) {
                throw err
            }
        });
    });
    
    process.on('SIGINT', () => {
        exit();
    });
};

await write();