// Buatlah fungsi yang menerima 1 parameter angka
// dan mengembalikan string apakah angka yang dimasukan
// adalah bilangan ganjil atau genap dengan menggunakan bentuk IIFE dan callback function

var input = prompt ("Masukan Nilai : ");
var num = parseInt (input);
(function Number(num){
    let isEligible = num %  2 == 0 ? "Genap" : "Ganjil";
    let output = isEligible;
    console.log("Angka = " + output)
})();
