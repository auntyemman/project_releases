import { readFileSync, writeFileSync, createReadStream } from 'fs';
import { resolve } from 'path';


export default function version () {
    const cwd = process.cwd();
    const pkgPath = resolve(cwd, 'package.json');
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
    return pkg.version;
};

// create version.txt and write the version into it
writeFileSync('version.txt', version());
// read the version from version.txt
createReadStream('version.txt').pipe(process.stdout)