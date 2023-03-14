const fs = require('fs');
const client = require('https');

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        client.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                // Consume response data to free up memory
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));

            }
        });
    });
}

const srcs = [];

const folderPath = '';

function makeImageFilepath(idx) {
  return `${folderPath}-${idx}.jpg`;
}

async function downloadImages() {
  const allPromises = srcs.map((src, idx) => downloadImage(src, makeImageFilepath(idx)));

  Promise.all(allPromises).then(() => console.log('All done!'));
}

downloadImages();