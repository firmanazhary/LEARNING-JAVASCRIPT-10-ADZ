/**
 * Logical operators in JavaScript
 * 1.AND && : mengembalikan nilai true jika kedua operand bernilai true
 * 2.OR ||  : mengembalikan nilai true jika salah satu operand bernilai true
 * 3.NOT !  : mengembalikan nilai true jika operand bernilai false
 */

// AND (&&) 
console.log(true && true);   // true, kedua operand true
console.log(true && false);   // false, harus keduanya operand true
console.log("5"== 5 && 4 === 4);
console.log( 5 != 7 && 4 !== "4"); //true, karena 5 tidak sama dengan 7 dan 4 tidak sama dengan "4"

// OR (||)
console.log(true || false);   // true, salah satu operand true
console.log(true || true);   // true, kedua operand true
console.log(false || false);  // false, keduanya operand false
console.log("5"== 5 || 4 === "4"); // true, karena

//not ! 

console.log(!true);  // false, karena operand true
console.log(!false); // true, karena operand false
console.log(!("5" == 5)); // false, karena "5" == 5 adalah true
console.log(!(4 === "4")); // true, karena 4 ===

