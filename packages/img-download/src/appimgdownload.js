const fetch = require("node-fetch");
const fs = require('fs/promises');
const data = require('./data');
const main = async () => {
  // let pkg = "";
  // url.replace(/id=(.*?)&hl/, (match, $1) => {
  //   pkg = $1;
  // });
  // console.log('start...', url);
  // fetch(url)
  //   .then((res) => {
  //     console.log('got res...');
  //     return res.text();
  //   })
  //   .then((res) => {
  //     const list = res.split("listitem");
  //     let imgs = [];
  //     list.shift();
  //     list.forEach((item) => {
  //       item.replace(/<img src=\"(.*?)(=|\")/, (match, $1) => {
  //         if (imgs.length < 3) {
  //           imgs.push($1 + "=w5120-h2880-rw");
  //         }
  //       });
  //     });
  //     console.log(imgs);
  //     downloadImg(imgs);
  //   })
  //   .catch(e => {
  //     console.log('req error');
  //   });
  const imgs = data.map(item => item.icon);
  const names = data.map(item => item.pkgId);
  downloadImg(imgs, names);
};

const readline = require('readline');

const downloadImg = (imgs, names) => {
  imgs.forEach((img, idx) => {
    fetch(img)
      .then((res) => res.arrayBuffer())
      .then((file) => {
        fs.writeFile(
          `/Users/jianqi/Desktop/素材/${names?.[idx] || 'img'}.png`,
          Buffer.from(file),
          (err) => {
            console.log("download end.", err);
          }
        );
      });
  });
};
main();
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

// rl.on('line', (content) => {
//   main(content);
// });

// rl.once('close', () => {
//    // end of input
// });