/**
 * arrow-function
 * sifatnya praktis
 */

function salam(){
    return 'assalamualaikum';
}

const salam2 = function (){
    return "assalamualaikum";//function expression
}

const salam3 = (nama,kelas) =>{return "assalamualaikum " + nama + kelas;}  //=>arrow function

// console.log(salam3("avrijal",10));

const perkalian = (a,b) => {
    return a * b;   
}
// console.log(perkalian(4,4))

const diskon = (harga,diskonYgdikasih)=> {
   let hasil =  harga - (harga * diskonYgdikasih / 100) ;
 
}
// console.log(diskon(100000,20));

// rumus luas persegi panjang => 1 . satu pernyataan 2. dua pernyataan 

// const loop = (jumlah) => {
//     for (let i = 0; i < jumlah; i++) {
//      console.log(i + 1);
//     }
// }
//  loop(10);


const pengurangan = a =>"hello " + a; //satu pernyataan
pengurangan("naufal");