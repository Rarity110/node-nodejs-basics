import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'path';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'files', 'script.js');

    const ls = spawn('node', [filePath, ...args]);


    process.stdin.pipe(ls.stdin);

	ls.stdout.on('data', (data)=>{
		console.log(data.toString());
	})

    ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

};

spawnChildProcess(['a', 'b', 'c']);