console.log("Walangitan, Jerrico")

//string literal

// let name = "Jerrico"
// let age = 20
// let address = "Bitung"

// //Hi, nama saya, Jerrico, berumur 20 
// //dan tinggal di bitung

// let kalimat5 = "Hi nama saya, " + name + ", umur saya " + age + ", saya tinggal di " + address;
// console.log(kalimat5)

// let kalimat6 = `hi nama saya ${name}, saya berumur ${age}, tinggal di ${address}`
// console.log(kalimat6)

//arrow function
//---------------

// function grettings(name){ //old function
//     return `HAI ${name}`
// }

// console.log(grettings("Jerrico"));

// const sayGrettings6 = (name) => { //arrow function
//     return `hello ${name}`
// }
// console.log(sayGrettings6("Jerrico"))

// //implicit 
// const sayGrettings6 = (name, age, address) => `hello ${name} i'm ${age} y/o, live at ${address} city`
// console.log(sayGrettings6("Jerrico", 20, "Bitung"))

// //Pada IIFE
// let output1 = (() => `Hello`)();
// console.log(output1)

// //callback
// let num = [1,2,3,4,5]
// let output2 = num.map((item) => item);
// console.log(output2)

//default parameter
const sayGretting = (name, age) => {
    if (name === undefined){
        name = "Walangitan"
    }
    else if (age === undefined){
        age = 20
    }
    console.log(`hello ${name}, i'm ${age} y/o`)
};
sayGretting()

const sayGrettings6 = (name = "Jerik", age = 20) =>{
    console.log(`hello i'm ${name}, i'm ${age} y/o`)
}
sayGrettings6();