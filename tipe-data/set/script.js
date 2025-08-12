/**
 * struktur data dengan 
 * set : adalah cara mensturkturkan data mirip array tetapi tidak memiliki index
 */

const array = [1,1,234,6];
console.log(array);

const mySet = new Set([1,1,234,6]);
mySet.delete(6)

mySet.add(10);
mySet.add(10);
//cara menampilknan nilai di set 
// for(const number of mySet){
//     console.log(number)
// }
console.log(mySet); //=> tidak bisa diduplicate

console.log(Array.from(mySet)[0])