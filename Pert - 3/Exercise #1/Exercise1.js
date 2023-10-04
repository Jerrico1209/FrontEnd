//function yang menerima 1 input Angka
//Mengembalikan String apakah angka yang dimaksud
//Ganjil or Genap

function Number(Angka){
    let isEligible = Angka % 2 == 0 ? "Genap" : "Ganjil"
    return isEligible;
}

let output = Number(6)
console.log("Angka = " + output)