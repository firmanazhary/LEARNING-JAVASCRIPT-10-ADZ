//.5 array dan object

/**
 * tipe data kompleks yang bisa menyimpan nilai lebih dari satu,
 * dan memiliki properti tambahan
 */

//array : tipe data kompleks yang menyimpan data dalam bentuk list

// let namaSiswa = ["naufal","rakky","raffif",5,null,true]; // array memiliki index dimulai dari 0

// console.log(namaSiswa[2]); 
// console.log(namaSiswa[1]); 
// console.log(namaSiswa[3]); 


// let namaBangunan =['madinah',"ya'qub",'hafsh','ashim',1,2,3,true,null];

// let namaSantri = Array("naufal","rakky","raffif",5,null,true);
// console.log(namaSantri[0]);
// console.log(namaSantri[1]);
// console.log(namaSantri[2]); 

//object : tipe data kompleks yang menyimpan data dalam bentuk key-value pair

// rumus nya : namaObject = {key1: value1, key2: value2, key3: value3}

let bioData ={nama:"barra adivian",umur:16,alamat:"pamulang"}
console.log(bioData);
console.log(typeof bioData);
console.log(bioData.nama);
console.log(bioData.alamat);


//output = nama saya ... umur saya ... tahun, alamat saya ...|

const dataBrandFamous = { sepatu : "Nike", baju: "Adidas", celana: "Samase" };
console.log(dataBrandFamous["celana"]); // Nike

//sepatu saya adalah nike baju saya dari brand adidas celana  kadang dari levis kadang dari samase
/**
 * cara mengakses data pada object
 * 1. menggunakan dot notation .
 * 2. menggunakan bracket notation[""]
 * 3.menggunakan object destructuring
 */
 const asean = {
    negara1: "Indonesia",
    negara2: "Malaysia",
    negara3: "Thailand",
    negara4: "Singapura",
    negara5: "Brunei Darussalam",
    negara6: "Filipina",
    negara7: "Kamboja",
    negara8: "Laos",
    negara9: "Myanmar",
    negara10: "Vietnam",
    negara11: "Timor Leste",
 }

 
 asean.negara12 ="spanyol";
 const {negara1,negara4,negara12} = asean;
 console.log(`saya tnggal di ${negara1} dan ${negara12}`); // saya tinggal di Indonesia
 //

 const dataSiswa ={};
 dataSiswa["nama"] = "naufal";
 dataSiswa.umur = 16;
 console.log(dataSiswa);


 /**
  * Intruksi:
  * Buatlah sebuah objek bernama santri yang berisi data berikut:
  * nama,umur,asal,status(aktif/nonaktif)
  * 1.tambahkan hobi dengan nilai membaca
  * 2.edit status menjadi alumni
  * 3.hapus properti umur
  * 4.buatlah kalimat perkenalan dengan format:
  * "nama saya {nama}, asal saya dari {asal}, hobi saya adalah {hobi}, 
  * status saya adalah {status}"
  * 5.tampilkan data santri di 
  *  1.console = > "nama saya {nama}, asal saya dari {asal}, hobi saya adalah {hobi},
  *  2.console = > santri
  */