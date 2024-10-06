import { readFileSync } from 'fs';
import { resolve } from 'path';


export default function version () {
    const cwd = process.cwd();
    const pkgPath = resolve(cwd, 'package.json');
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
    return pkg.version;
};
