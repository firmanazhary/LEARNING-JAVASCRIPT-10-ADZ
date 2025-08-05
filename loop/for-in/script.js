/**
 * for in => untuk mengulang properti dari sebuah objek
 */
let bioData ={nama:"barra adivian",umur:16,alamat:"pamulang"}

for (let key in bioData) {
    console.log(`${key} : ${bioData[key]}`);
}

let alatBelajar = {
    buku: "buku tulis",
    pensil: "pensil 2B",
    penghapus: "penghapus karet",
    laptop: "laptop gaming",}

    //log => key