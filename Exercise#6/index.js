import helloWorld from "./helloWorld.js";

const Messages = async () =>{
    try{
        let msg = await helloWorld()
        console.log(msg)
    } catch(error){
        console.log(error)
    }
}

Messages()