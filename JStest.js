// let out =   document.getElementById('out');
// let tmp = '';

// let a = [];
// let b = [3, 'hi', true];
// console.log( b.length);
// b[2] = 555;
// console.log(b);

// b[5] = 999;

// console.log(b);

// let out = document.getElementById('out');

// let str = '';

// for ( let i = 0; i < b.length; i++) {
    
//     if ( b [i] !== undefined) str += i + '-' + b[i] + '<br>'; 
// }

// out.innerHTML = str;

let p = document.getElementsByTagName('p');
console.log(p);

p[2].style.color = 'red';

let p1 = document.getElementsByClassName('test');
let p2 = document.querySelectorAll('.test');

console.log(p1);
console.log(p2);