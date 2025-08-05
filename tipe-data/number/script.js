// tipe data number
// 2. number : tipe data yang bisa dioperasikan aritmatika


let jumlahSiswa = 16.9 / 10;
const result = 50 / 0;
// console.log(jumlahSiswa);
// console.log(typeof(jumlahSiswa))
console.log(result);


//method javascript number
//1.to exponential = mengubah angka menjadi notasi ilmiah
let angka = 1000000;
console.log(angka.toExponential()); // 1e+6
console.log(angka.toExponential(2)); // 1.00e+6
console.log(angka.toExponential(4)); // 1.0000e+6

//2.number.toFixed = mengubah angka menjadi string dengan jumlah desimal tertentu
let angka2 = 3.141592653589793;
let angka3 = angka2.toFixed(2);
console.log(angka2.toFixed()); // 3
console.log(angka2.toFixed(2)); // 3.14
console.log(angka2.toFixed(4)); // 3.1416
console.log(angka2.toFixed(5)); // 
console.log(typeof angka3)

//3.number.toPrecision = mengubah angka menjadi string dengan jumlah digit tertentu
let angka4 = 123456.789;
console.log(angka4.toPrecision()); // 123456.789
console.log(angka4.toPrecision(5)); // 123460
console.log(angka4.toPrecision(7)); // 123456.8
console.log(angka4.toPrecision(10)); // 123456.7890https://docs.google.com/presentation/d/1ag_jxD9h9NRVkt61a1V3eacJ1YmDZFD54fwROfIXCmE/edit?slide=id.g328af344078_0_128#slide=id.g328af344078_0_128
console.log(angka4.toPrecision(3)); // 1.23e+5

//4.number.toString = mengubah angka menjadi string
let angka5 = 123;
console.log(angka5.toString()); // "123"
console.log(angka5.toString(2)); // "1111011" (biner)
console.log(angka5.toString(8)); // "173" (oktal)
console.log(angka5.toString(10)); // "123" (desimal)