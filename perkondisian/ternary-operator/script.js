/**
 * ternary operator
 * rumus : let variabel = kondisi ? nilaiTrue : nilaiFalse;
 */

//1-15 = anak-anak 15-30 = dewasa 30-60 = tua;
let umur = 20;
let status = umur >= 17 ? "Dewasa" : "Anak-anak";
console.log(status); // Output: Dewasa

// ketika uang lebih dari 1jt bisa beli speda

let skor = 85;
let grade = skor >= 90 ? "A" : skor >= 80 ? "B" :"C";
console.log(grade); // Output: B


//
let warna = "merah";
console.log(warna === "biru" ? 5 + 5 : 5 - 5) ;