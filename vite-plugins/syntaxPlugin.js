/* eslint-disable consistent-return */
import path from 'path';
import fs from 'fs';

const fileRegex = /\.(syntax)$/;

export default function syntaxPlugin() {
  return {
    name: 'syntax-plugin', // required, will show up in warnings and errors
    resolveId(id) {
      if (fileRegex.test(id)) {
        return id;
      }
    },
    load(id) {
      if (fileRegex.test(id)) {
        const folderPath = id.replace('.syntax', '');
        const files = fs.readdirSync(path.join(__dirname, folderPath));

        const syntaxCodes = files.map((fileNameWithExt) => {
          const syntaxCode = fs.readFileSync(path.join(__dirname, folderPath, fileNameWithExt), { encoding: 'utf-8' });
          const [fileNameOnly] = fileNameWithExt.split('.');
          return `export const ${fileNameOnly} = \`${syntaxCode}\`;`;
        });
        return syntaxCodes.join('\n').toString();
      }
    },
  };
}
