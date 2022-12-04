import { Transform } from 'node:stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.reverse() + '\n');
        },
    })
	process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();