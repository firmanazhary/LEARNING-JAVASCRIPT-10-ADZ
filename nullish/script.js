/**
 * nullish 
 * ?? => null or undefined
 * || => falsy
 */

let username = null;
let defaultUsername = username ?? 'pengunjung';
console.log(defaultUsername); // Output: 'pengunjung'  

let age = undefined;
let defaultAge = age ?? 16;
console.log(defaultAge); // Output: 16


let username2 = "";
let defaultUsername2 = username2 ?? 'pengunjung';
let defaultUsername3 = username2 || 'pengunjung';
console.log(defaultUsername2); // Output: '' (empty string, not null or undefined)
console.log(defaultUsername3); // Output: (pengunjung, because empty string is falsy)


// contoh ?? || let uang = 0; default = habis  =>log(uang saya habis)

console.log(true || false);
console.log(true || true);
console.log(true && false);

let admin = null ;

// || kalau dua dua nilai true, maka yang pertama yang diambil
// && kalau dua dua nilai true, maka yang kedua yang diambil
let isAdmin =  (0 || "user") || admin;
console.log(isAdmin); 