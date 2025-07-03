function setUsername(username){
    // Complex DB calls
    this.username = username
    console.log(this.username);
}

function createUser(username, email, password){
    // setUsername.call(this.username)
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const tea = new createUser("tea", "tea@google.com", "123")
    console.log(tea);
