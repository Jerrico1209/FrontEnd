console.log("Jerrico Walangitan")
// //Array
// //Variabel yang dapat menyimpan banyak data

// const Students = ["Jerrico", "Kheyla", "Dion", "Coco"];
// const Num = [1, 2, 3, 4, 5];
// const Jerrico = ["Walangitan", "Umur", 20, true];

// console.log(Students);
// console.log(Num);
// console.log(Jerrico);
// console.log(Students[2]);

// //Merubah Array
// Students[2] = "Vinny";
// console.log(Students);

// //length
// console.log(Students.length);
// console.log(Students[Students.length - 1]);

// for (let i = 0; i < Students.length, i++;){
//     console.log(Students[i]);
// }

// //join()
// console.log(Jerrico.toString());
// console.log(Jerrico.join(" "));
// console.log(Jerrico.join("..."));
// console.log(Jerrico.join("#"));

// //pop
// Jerrico.pop();
// console.log(Jerrico);

// //push
// Jerrico.push("Good Morning");
// console.log(Jerrico);

// //shift
// Jerrico.shift();
// console.log(Jerrico);

// //UnShift
// Jerrico.unshift("Jerrico");
// console.log(Jerrico);

// //Splice
// Num.splice(2, 0, 3.5, 3.75);
// console.log(Num);

// Jerrico.splice(3, 0, true);
// console.log(Jerrico);

// //Slice
// let HalfNum = Num.slice(0, 3);
// let lastNum = Num.slice(4,6);
// console.log(HalfNum);
// console.log(lastNum);
// console.log(Num);

// //concat
// let concat = Jerrico.concat(Num);
// console.log(concat);

//OBJECT

// let Jer = {
//     firstName : "Jerrico",
//     lastName : "Walangitan",
//     age : 20,
//     isMarrige : false,
//     grade : [80, 90, 100],
//     address : {
//         city : "Bitung",
//         provice: "Sulut"
//     },
//     sayGreetings: function(){
//         console.log("Hello My Name is "+ this.firstName);
//     },
// };

// //DOT notation
// // console.log(Jer.firstName);
// // console.log(Jer.grade);
// // console.log(Jer.grade[2]);
// // console.log(Jer.address.city);
// // console.log(Jer.sayGreetings());

// // //Bracket Notation
// // console.log(Jer["firstName"]);
// // console.log(Jer["address"]["provice"]);
// // console.log(Jer["grade"][2]);
// // console.log(Jer["sayGreetings"]());

// Jer.job = "Student";
// console.log(Jer);

//Array Object

let Jeri = [
    {
        id: 1,
        name: "Jerrico",
    },
    {
        id: 2,
        name: "Cleo",
    },
    {
        id: 3,
        name: "Jer",
    }, 
];

// //forEach() => Output 1 per 1
// Jeri.forEach(function(item) {
//     console.log(item);
// });

//map() == Merubah menjadi Array
// let output = Jeri.map(function(item) {
//      return item.name
//  });
// console.log(output);

//Filter() => Mencari banyak Data
// let output = Jeri.filter(function(item) {
//     return item.name === "Cleo";
// });
// console.log(output);

//Find = Mencari 1 Data / Data pertama
// let output = Jeri.find(function(item) {
//     return item.name === "Cleo";
// });
// console.log(output);
