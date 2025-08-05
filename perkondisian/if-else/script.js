

//pengecekan bilangan genap atau ganjil 
let bilangan = prompt("Masukkan bilangan: "); //=> otomoatis string

if(bilangan % 2 === 0){
    alert("bilangan genap " + bilangan);
}else if(isNaN(bilangan)){
    alert("Input bukan bilangan");
}else if(bilangan === ""){
    alert("Input tidak boleh kosong");
}else if(bilangan < 0){
    alert("Input tidak boleh bilangan negatif");
}else if(bilangan === null){
    alert("Input dibatalkan");
}else if(bilangan === "0"){
    
}else{
    alert("bilangan ganjil " + bilangan);
}