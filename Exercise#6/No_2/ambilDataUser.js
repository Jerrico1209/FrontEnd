fetch("https://reqres.in/api/users")
    .then (function (response) {
        return response.json()
    })
    .then (function (users){
        console.log(users)
    })

export default fetch()