'use strict'
const start = performance.now();
let str = ''
for(let i = 0; i<65534;i++){
  str += String.fromCharCode(i);
  
}
p.textContent = str;
window.onload = function(){
  console.log((Math.floor(performance.now() - start*100))/100 + ' ms');
}



console.log('￼'.charCodeAt(0));
console.log('􏿽'.charCodeAt(0));