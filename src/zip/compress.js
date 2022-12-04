import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePathTXT = path.join(__dirname, '/files', 'fileToCompress.txt');
    const filePathGZ = path.join(__dirname, '/files', 'archive.gz');
   
    const gzip = createGzip();
    const txt = createReadStream(filePathTXT);
    var zip = createWriteStream(filePathGZ);
    txt.pipe(gzip).pipe(zip);
};

await compress();