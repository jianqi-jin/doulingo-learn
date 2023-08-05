const fetch = require('node-fetch');
const fs = require('fs');

function download(src) {
  // http://p0.meituan.net/360.0.80/shangouproductapi/af9e2fd3fd5ceef003807a7c52de2b1c18908.jpg.webp@228w_228h
  src = src.replace(/(meituan\.net\/)(.*?\/)/, (all, $1) => $1);
  src = src.replace(/(\.jpg).*/, (all, $1) => $1);
  src = src.replace(/(\.png).*/, (all, $1) => $1);
  console.log('download start.', src);
  fetch(src).then(res => res.arrayBuffer()).then(file => {
    fs.writeFile(`/Users/bytedance/Desktop/商品/图片/img.jpg`, Buffer.from(file), err => {
      console.log('download end.', err);
    });
  })
};



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
    download(line);
});

rl.once('close', () => {
     // end of input
 });
