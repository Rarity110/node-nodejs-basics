import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePathTXT = path.join(__dirname, '/files', 'fileToCompress.txt');
    const filePathGZ = path.join(__dirname, '/files', 'archive.gz');

    const gunzip = createGunzip();
    const zip = createReadStream(filePathGZ);
    var txt = createWriteStream(filePathTXT);
    zip.pipe(gunzip).pipe(txt);
};

await decompress();
