import helloWorld, {fullName as namaLengkap, angka, Jerrico} 
from "./utils.js";

import sayGreetings from "./sayGrettings.js";

console.log(namaLengkap)
console.log(angka)
console.log(Jerrico)
helloWorld();
sayGreetings()

//ASYNCHRONOUS JS
//synchronous -> single thread -> blocking
console.log("Proses 1")
console.log("Proses 2")
console.log("Proses 3")
console.log("Proses 4")

//asynchronous -> multi thread -> non blocking

//2 Ways of aSync
//1. parallel
// setTimeout (() => {
// console.log ("proses 1")
// }, 3000)
// console.log("proses 2")
// setTimeout(() => {
//     console.log("Proses 3")
// }, 4000)
// console.log("Proses 4")

//2. ConCurrent
//2.a Callback
// setTimeout (()=>{
//     console.log("Proses 1")
//     setTimeout(()=>{
//         console.log("Proses 2")
//         setTimeout(()=>{
//             console.log("Proses 3")
//             setTimeout(()=>{
//                 console.log("Proses 4")
//             }, 3000)
//         }, 3000)
//     }, 3000)
// }, 3000)

//2.b promise
let condition = false
const newPromise = new Promise((resolve, reject) => {
    if (condition){
        resolve("Berhasil")
    } else{
        reject("Gagal")
    }
})

//Promise
//1. then - catch (ES6)
// newPromise
//     .then((result) =>{
//         console.log(result);
//     })
//     .catch((error)=>console.log(error))

//2. async - await (ES7)
//asyc - await digunakan pada fungsi
const consumePromise = async () =>{
    try{
        let result = await newPromise
        console.log(result)
    } catch(error){
        console.log(error)
    }
}
consumePromise()