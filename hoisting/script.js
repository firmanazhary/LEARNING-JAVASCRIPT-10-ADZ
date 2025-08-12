/**
 * Hoisting adalah perilaku default 
 * JavaScript di mana deklarasi variabel dan fungsi “diangkat” ke bagian atas scope-nya
 * (baik itu global scope atau function scope), sebelum kode dijalankan.
 */

console.log(sayHello())
function sayHello(){
    return "hello world"
}

//function deklarasi bisa dijalankan sebelum di inisialisasi

const salam = function(){
    return "hello world"
}
console.log(salam())

const salam1 = ()=> "hello world"

console.log(salam1())

//function arrow dan expressi tidak bisa dijalankan sebelum di inisialisasi