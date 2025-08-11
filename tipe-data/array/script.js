/**
 * array : tipe data kompleks yang menyimpan 
 *         data dalam bentuk list(terurut) 
 *         dengan index dimulai dari 0
 */

// const array = [1 ,2 ,3 ,"budi"];

// console.log(array[2]);

// const array2 = new Array(1,2,3,"budi");

// const array3 = Array.from("budi");//[b,u,d,i] //=> untuk mengubah string menjadi array
// console.log(array3[1]); // budi

// const array4 =Array.from("Hawai");
// console.log(array4[3])

// const dataSiswa = ["budi","holloway","joko","anhar"];
// const dataKomplek =Array.from(dataSiswa); 
// dataSiswa[2]= "baraka";
// dataSiswa.push("fauzan");
// console.log(dataSiswa);
// console.log(dataKomplek); 


/**
 *  * Intruksi:
  * Buatlah sebuah array bernama timFutsal yang berisi data berikut:
  * nama,umur,asal,posisi
  * 1.tambahkan tahun join  ke dalam array
  * 2.edit posisi menjadi kiper
  * 3.hapus element umur
  * 4.tampilkan data santri di 
  *  1.console = > "nama saya [nama], asal saya dari [asal], posisi 
  *  saya sebagai [posisi],  saya join ke tim [tahun] 
  *  2.console = > timFutsal
  * 
 */
const prov = ["Aceh","Medan","Jawa-barat"]; //=> buat contoh yang asean


const[mantanIbuKota,sumatra,kotaKembang] = prov
console.log(mantanIbuKota);
console.log(sumatra);
console.log(kotaKembang);
console.log(`saya tinggal di ${mantanIbuKota} terkadang pergi ke ${sumatra} 
kota favorite ${kotaKembang}`)



//fungsi / method untuk mengurutkan data reverse & sort
const barangKelas = ["papan-tulis","buku","meja","atelevisi"];
/**
 * 1.reverse -> mengatur urutan elemen pertama menjadi terakhir.
 * 2.sort -> mengurutkan berdasrkan abjad
 */
barangKelas.sort();
console.log(barangKelas);