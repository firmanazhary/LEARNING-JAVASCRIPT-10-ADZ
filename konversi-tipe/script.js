/**
 * konversi-tipe
 * 1. Konversi String 
 * 2. Konversi Numerik
 * 3. konversi Boolean
 */


// const number = 123;
// const boolean = true;
// const number1 = String(number);
// const boolean1 = String(boolean);
// const testing = boolean1 + "s";
// String () to.String()
// console.log(typeof number);
// console.log(typeof boolean);
// console.log(typeof number1);
// console.log(typeof boolean1);
// console.log(testing);


//numerik
// const angka = "12390";
// const isStudent = false;

//Number()
// const angka1 = Number(angka);
// const isStudent1 = Number(isStudent);

// console.log(typeof angka1);
// console.log(isStudent1 + angka1);
// console.log(angka1 + isStudent1);


//pengurangan dan konversi tipe data

// const tahun  = "2025";
// const umurSaya = "16";


// tahun lahir saya  : 2009



const umurAdikSaya = true ;
//umur adik say+a 1 tahun 

//javascript identik dengan logika 


//boolean
//Boolean() => true ketika nilai bukan 0, bukan string kosong, bukan null, bukan undefined

let angka = 400;
let angkaToBoolean = Boolean(angka);
console.log( angkaToBoolean); // true

//konversi implisit
const age = 16;
const pesan = "umur saya " + age;
console.log(typeof pesan); // "umur saya 16"