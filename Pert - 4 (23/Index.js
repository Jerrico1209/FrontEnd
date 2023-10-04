// //JavaScript Function

// const age = 20; // Global

// const greetings = function (name){
//     //parameter
//     console.log(age);
//     const job = "Student"; //local 
//     if (job == "Student"){
//         const address = "Bitung"; //block
//     }
//     console.log(address);
//     return "Hallo";
// };
// console.log(greetings("Jerrico")); //Agrument

//IIFE (Immediatly Invoke Function Expression)
//Anonymous Function

// (function(){
//     console.log ("Hello IIFE");
// })();

//Callback Function
//fungsi yang dipanggil kembali

function greetings(name, callback) {
    const greetings = "Hello "+ name;
    callback(greetings);   
}

greetings("Jerrico", function (greetings){
    console.log(greetings);
});