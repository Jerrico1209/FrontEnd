console.log("Exercise #3")
console.log("Walangitan, Jerrico Caldion jhenkins");

let people = ["Greg", "Mary", "Devon", "James"];

//iterate array and console.log all using for-loop
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//iterate array and console.log all using forEach()
people.forEach (person => {
    console.log(person);
});

//Remove Greg
people.shift()
console.log(people);

//Remove James 
people.pop()
console.log(people)

//Add Matt
people.unshift("Matt")
console.log(people)

//Add my name
people.push("Jerrico")
console.log(people)

//Using for-loop until Mary
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary"){
        break
    }   
}

//Array Without "Mary", "Matt"
let copy = people.slice(1,4)
console.log(copy)

//Redefine People and use splice
people = ["Matt", "Mary", "Devon", "Jerrico"]
people.splice(2, 1, "Elizabeth", "Artie")
console.log(people)

let withBob = people.concat("Bob")
console.log(withBob)

//OBJECT

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//Add "Go"
programming.languages.push("Go")

//Change Difficulty to 7
programming["difficulty"] = 7

//Deleting jokes
delete programming.jokes

//Add isFun and value True
programming.isFun = true

//update all the element array
programming.languages = programming.languages.map((languages, index) => `${index} - ${languages}`)

console.log(programming)