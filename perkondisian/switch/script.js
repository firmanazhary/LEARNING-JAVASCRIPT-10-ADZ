// /**
//  * switch
//  */

// const fruits = "apple" ;

// switch (fruits){
//     case "banana":
//         console.log("Im a banana");
//         break;
//     case "apple":
//         console.log("Im an apple");
//         break;
//     case "orange":
//         console.log("Im an orange");
//         break;
//     default:
//         console.log("Im not a fruit.Im student at abudzar");
//         break;
// }


// const day = new Date().getDay(); //4
// switch (day) {
//     case 0:
//         console.log("Today is Sunday");
//         break;
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday");
//         break;
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6:
//         console.log("Today is Saturday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// let foods = "kopi";

// switch (foods){
//     case "nasi":
//     case "mie":
//         console.log("ini adalah makanan");
//      break;   
//     case "kopi":
//     case "teh":
//         console.log("ini adalah minuman");
//      break;
//     default:
//         console.log("itu bukan makanan / minuman")              
// }

// //case pengelompokan dengan kategori 1 eskul yang disukai 2 eskul yg ga disukai default yang anda input bukan eskul

let foods = prompt("tolong masukan makanan / minuman cth : nasi,roti,susu,burger,cola,mie ");

switch(foods){
    case "nasi":
    case "roti":
    case "susu":
    alert("makanan / minuman ini sehat");
    break;
    case "burger":
    case "cola":
    case "mie":
        alert("makanan / minuman ini kurang sehat");
    break;
     default:
        alert("anda bukan memasukan sesuai daftar")   

}



/*Aplikasi Pemesanan Minuman
Buatlah sistem sederhana untuk kafe. Pengguna akan memilih minuman berdasarkan kode:

Kode Minuman
A	Kopi Hitam
B	Teh Manis
C	Jus Jeruk
D	Air Mineral
**/