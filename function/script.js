
function sapa(){
    console.log("hallo selamat datang di function");
}

function conversiCelciusKeFahrenheit(celcius){
    const tempFahrenheit =  9/5 * celcius + 32;
    console.log("hasil konversi : " + tempFahrenheit + " derajat Fahrenheit");
}
const z = 90; 
conversiCelciusKeFahrenheit(z);
conversiCelciusKeFahrenheit(90);


function perTambahan(a = 6,b = 10,c =1){
    let hasil = a + b + c; 
    return "hasil penambahan : " + hasil;
}
let angka = 20;
let angka2 = 30;
console.log(perTambahan(10,10,10));


//pengurangan ,perkalianan, pembagian


function salam(num = "novri"){
    return(`hallo ${num}`)
}

console.log(salam("budi"));

