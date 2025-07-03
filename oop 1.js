function multiplyBy5 (num){
    return num*5
}
multiplyBy5.power = 2

console.log(multiplyBy5(5));                  // 25
console.log(multiplyBy5.power);              // 2
console.log(multiplyBy5.prototype);          // {}


function createUser(username, price){
    this.username = username;
    this.price = price;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
}

const chai = new createUser('chai', 10)
const coffee = createUser('coffee', 15)

chai.printMe()

