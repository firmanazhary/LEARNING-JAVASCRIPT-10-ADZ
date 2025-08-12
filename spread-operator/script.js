/**
 * spread-operator : ...
 */

const obj1 = {
    name: "rakky"
}

const obj2 ={
    lastname : "ahmad",
    address :"jambi"
}
const gabunganObj = {...obj1,...obj2, age : 90};
gabunganObj.name = "barra";
console.log(gabunganObj);


const array1 = ['pensil','pulpen','buku'];
const array2 = ['tas','dompet'];

const penggabunganArray = [...array1,...array2,"meja","peci"];
penggabunganArray.push("remote")
console.log(penggabunganArray);