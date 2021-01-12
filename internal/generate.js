const path = require('path');
const fs = require('fs');

const generateSyntaxTemplate = (name) => {
  const folderPath = path.join(__dirname, `../src/${name}/components`);
  const files = fs.readdirSync(folderPath);

  const code = files.reduce((prev, fileNameWithExt) => {
    const syntaxCode = fs.readFileSync(path.join(folderPath, fileNameWithExt), { encoding: 'utf-8' });
    const [fileNameOnly] = fileNameWithExt.split('.');
    prev[fileNameOnly] = syntaxCode;
    return prev;
  }, {});

  const targetFile = path.join(__dirname, `../src/${name}/template.json`);
  fs.writeFileSync(targetFile, JSON.stringify(code));
};

Promise.resolve()
  .then(() => Promise.all([
    generateSyntaxTemplate('react'),
    generateSyntaxTemplate('vue'),
  ]))
  .then(() => {
    process.exit(0);
  });
