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
console.log(`nama saya ${bioData.nama} umur saya ${bioData.umur} tahun, alamat saya ${bioData.alamat}`);