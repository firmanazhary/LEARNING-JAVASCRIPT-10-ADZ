// Data siswa 1
let nama1 = "Firman";
let umur1 = 20;
let kelas1 = "9C";

function tampilSiswa(nama, umur, kelas) {
  console.log(`Nama: ${nama}, Umur: ${umur}, Kelas: ${kelas}`);
}

tampilSiswa(nama1, umur1, kelas1);

// Kalau mau tambah siswa baru → bikin variabel & panggil lagi
let nama2 = "Alif";
let umur2 = 15;
let kelas2 = "8A";


tampilSiswa(nama2, umur2, kelas2);

class Siswa {
    constructor(nama,umur,kelas){
        this.nama = nama;
        this.umur = umur ;
        this.kelas = kelas;
    }
    tampil(){
        console.log(`Nama : ${this.nama} Umur`)
    }
}
let siswa1 = new Siswa("Budi", 17, "10B");

console.log(siswa1)
siswa1.tampil()


const mkanan = [
    'ikan',
    'ular',
    'musang'
];
const[er,...r]= mkanan;
console.log(r)
