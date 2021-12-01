export function makeId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ123456789'; 
    var charactersLength = characters.length;

    for(var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

import {fileURLToPath} from 'url';
import {dirname} from 'path';

const filename= fileURLToPath(import.meta.url);
export const __dirname = dirname(filename);






// module.exports = makeIdNumber;
