import { stdout } from'process';

const parseEnv = () => {
    const keys = Object.keys(process.env);

	const res = keys.reduce((newRes, key) => {
		if (key.indexOf('RSS_') !== -1) {
			newRes.push(`${key}=${process.env[key]}`);
		}
		return newRes;
	}, []).join('; ');

    stdout.write(res);
};

parseEnv();