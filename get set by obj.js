const user = {
    _email: "ab@g.com",
    _password: "123",

    get email(){
        return this._email
    },

    set email(value){
        this._email = value
    }
}

const saloni = Object.create(user)
console.log(saloni.email)