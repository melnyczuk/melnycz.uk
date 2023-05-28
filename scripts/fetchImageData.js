const path = require('path');
const fm = require('front-matter');
const fs = require('fs');
const magick = require('imagemagick');
const https = require('follow-redirects').https;

fetch = (url) =>
  new Promise((resolve, reject) => {
    const request = https.request(url, { method: 'GET' }, (response) => {
      let data = [];
      response.on('error', (error) => reject(error));
      response.on('data', (chunk) => {
        data.push(chunk);
      });
      response.on('end', () => {
        try {
          const result = Buffer.concat(data);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
    });
    request.on('error', (e) => reject(e));
    request.end();
  });

const root = path.join(__dirname, '../src/content/projects');

const projectData = ['./suntopia.md'];

const fetchImageData = async (src) => {
  const name = new URL(src).pathname.split('/').reverse()[0];
  const resp = await fetch(src);
  const { width = 0, height = 0, format = 'image/jpeg' } = await new Promise(
    (resolve, reject) =>
      magick.identify({ data: resp }, (err, res) => {
        if (err) reject(err);
        if (res) resolve(res);
      })
  );
  const thumbnail = await new Promise((resolve, reject) =>
    magick.resize(
      {
        srcData: resp,
        width: Math.floor(width * 0.01),
        height: Math.floor(height * 0.01),
        format,
      },
      (err, res) => {
        if (err) reject(err);
        if (res) {
          const b64 = Buffer.from(res, 'binary').toString('base64');
          resolve(`data:image/jpeg;base64,${b64}`);
        }
      }
    )
  );
  return { width, height, src, name, thumbnail };
};

const cacheImageData = async (slug, imgs = []) => {
  const images = await Promise.all(
    imgs.map(async (src) => await fetchImageData(src))
  );

  const output = images.reduce((acc, img) => ({ ...acc, [img.src]: img }), {});
  fs.writeFileSync(
    path.join(root, '/images/', `${slug}.json`),
    JSON.stringify(output)
  );
};

Object.values(projectData).forEach((src) => {
  const abs = path.join(root, '/markdown/', src);
  const project = fs.readFileSync(abs);
  const { attributes } = fm(project.toString());
  const { slug, imgs } = attributes;
  console.log('slug', slug);
  cacheImageData(slug, imgs).then(() => console.log('Done!', slug));
});
