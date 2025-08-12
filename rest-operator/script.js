function jumlahkan(...angka) {
  return angka.reduce((total, num) => total + num, 0);
}

console.log(jumlahkan(1,2,3,3))

function jumlahkan(...angka) {
  let total = 0;
  for (let num of angka) {
    total += num;
  }
  return total;
}

// Contoh pemanggilan
console.log(jumlahkan(2, 4, 6)); // Output: 12
console.log(jumlahkan(10, 20, 30, 40)); // Output:


function myFunct(param,...param1){
   console.log(`parameter1: ${param} parameter2: ${param1}`) 
}

myFunct(1,2,3,6,7)

function namaSiswa(...nama){
    return nama
}
console.log(namaSiswa("raky",'izzam','fawwaz')) //=> parameter hanya menampung 1 nilai 
// kalau lebih dari satu jadikan rest operator
