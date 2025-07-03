class User{
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password

    }
     get password(){
            return this._password.toUpperCase()
        }

        set password(value){
            this._password = value.toUpperCase()
        }

        get email(){
            return this._email
        }

        set email(value){
            this._email = value
        }

        get username(){
            return this._username
        }

        set username(value){
            this._username = value
        }
}
const saloni = new User("saloni", "ab@g.com", "abc")
console.log(saloni.password);    // ABC
console.log(saloni.email);       // ab@g.com
console.log(saloni.username)     // saloni