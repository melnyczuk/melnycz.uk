const fs = require('fs');
const glob = require('glob');
const sharp = require('sharp');

const { root, sizes } = require('./info.json');

glob.sync(`${root}/**/image`).forEach((dir) => {
  fs.readdirSync(dir)
    .filter((f) => f.match(/[A-z]*.(jpe?g|png)/gi))
    .forEach((img) => {
      sizes.forEach((size) => {
        const sizeDir = `${dir}/${size}`;
        if (!fs.existsSync(sizeDir)) {
          fs.mkdirSync(sizeDir);
        }
        const outFile = `${sizeDir}/${img.split('-')[1]}`;
        sharp(`${dir}/${img}`).resize(size).toFile(outFile);
      });
    });
});
