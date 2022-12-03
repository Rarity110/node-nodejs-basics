import { stdout } from'process';

const parseArgs = () => {
    const args = process.argv.slice(2);
   
    const res = args.reduce((newRes, arg, ind) => {
        if (arg.indexOf('--') !== -1) {
            newRes.push(`${arg} is ${args[ind + 1]}`);
        }
		return newRes;
	}, []).join(', ');

    stdout.write(res);
    
};

parseArgs();