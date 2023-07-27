// dev
// const entry = new Function('console.log(123);');
// entry();

// fetch('https://localhost:4001/content.js').then(res => res.text()).then(code => {
//   eval(code);
// });

const script = document.createElement('script');
script.src = 'https://localhost:4001/content.js';
document.head.appendChild(script);