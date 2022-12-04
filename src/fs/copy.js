import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copyFile = async (fileInfoOld, fileInfoNew) => {
    await fs.promises.copyFile(fileInfoOld, fileInfoNew);
};

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filesPath = path.join(__dirname, '/files');
    const filesCopyPath = path.join(__dirname, '/files_copy');
    
    const copyFyles = async () => {
        const files = await fs.promises.readdir(filesPath, {withFileTypes: true});
        await fs.promises.mkdir(filesCopyPath, { recursive: true });
        for (let file of files) {   
            const fileInfoOld = path.join(filesPath, file.name);
            const fileInfoNew = path.join(filesCopyPath, file.name);
            copyFile(fileInfoOld, fileInfoNew);
        };
    }

    fs.access(filesPath, fs.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.access(filesCopyPath, fs.F_OK, (err) => {
                if (err) {
                    copyFyles();
                } else {
                    throw new Error('FS operation failed');
                }
            })
        }
    })
};

copy();