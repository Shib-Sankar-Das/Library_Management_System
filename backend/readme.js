import fs from 'fs';
console.log(fs.readdirSync('./../screenshots/').map(item=>(`![${item.split(".")[0]}](./screenshots/${item})`)).join('\n'));