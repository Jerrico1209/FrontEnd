helloWorld = () => {
    new Promise((resolve) => {
        if (helloWorld){
            setTimeout (() => {
                resolve("Hello World")
            }, 2000)
        }
    })
}

export default helloWorld;