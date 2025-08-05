/**
 * comparisson operator
 * 1. == :membandingkan nilai tanpa tipe data
 * 2. != :membandingkan nilai tanpa tipe data
 * 3. === :membandingkan nilai dengan tipe data
 * 4. !== :membandingkan nilai dengan tipe data
 * 5. > :lebih besar dari
 * 6. < :lebih kecil dari
 * 7. >= :lebih besar dari atau sama dengan
 * 8. <= :lebih kecil dari atau sama dengan
 */
//==
const a = 10;
const b = '10';
console.log(a == b);  // true, karena nilai sama

//!=
const c = 91;
const d = '9';
console.log(c != d);  // false, karena nilai sama

//===
const e = 9;
const f = '9';
console.log(e === f); // false, karena tipe data berbeda

//!==
const g = 9;
const h = '9';
console.log(g !== h); // true, karena tipe data berbeda


// => true / false ==, !=,===,!== 
number1 = 10;
number2 = '10';

// > lebih besar dari
console.log(5 > 7); // false, 5 tidak lebih besar dari 7
console.log(10 > 5); // true, 10 lebih besar dari 5

// < lebih kecil dari
console.log(5 < 7); // true, 5 lebih kecil dari 7
console.log(10 < 5); // false, 10 tidak lebih kecil dari 5    

// >= lebih besar dari atau sama dengan
console.log(5 >= 5); // true, 5 sama dengan 5
console.log(10 >= 5); // true, 10 lebih besar dari 5

// <= lebih kecil dari atau sama dengan
console.log(5 <= 5); // true, 5 sama dengan 5
console.log(3 <= 5); // true, 3 lebih kecil dari 5