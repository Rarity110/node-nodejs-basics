import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePathTxt = path.join(__dirname, '/files', 'wrongFilename.txt');
    const filePathMd = path.join(__dirname, '/files', 'properFilename.md');

    fs.access(filePathTxt, fs.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed')
        } else {
            fs.access(filePathMd, fs.F_OK, (err) => {
                if (err) {
                    fs.rename(filePathTxt, filePathMd, (err) => {if (err) throw new Error('FS operation failed');} );
                } 
            })
        }        
    })
};

await rename();