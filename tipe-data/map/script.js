/**
 * map : tipe data yang mirip dengan object bedanya di map key tidak
 *       harus string
 */

//=>brandFamous = baju = adidas sepatu = nike celana = uniqlo

 const brandFamous = {
    baju: "adidas",
    sepatu : "nike",
    celana : "uniqlo"
 }

 const mapBrandFamous = new Map([
    ['baju','adidas'],
    ['sepatu','nike'],
    ['celana','uniqlo']
 ]);
 
 mapBrandFamous.set("tas","LV");
 mapBrandFamous.set("topi","lucas");
 mapBrandFamous.delete('sepatu');
 console.log(brandFamous);
 console.log(mapBrandFamous);
 console.log(mapBrandFamous.get("baju"));
 console.log(mapBrandFamous.get("celana"));