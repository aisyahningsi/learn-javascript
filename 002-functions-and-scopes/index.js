let str = 'Hello, playground';

func sayHello() {
    console.log('Hello! ${str}');
}
sayHello()


func sayHelloTo(name, age) {
    
    console.log('Hello ${name}, you are ${age} years old');
    
}
sayHelloTo('Tom', 20)


func addFourTo(x) {
    
    let sum = x + 4
    
    return sum
}
let a = 10;
let result = addFourTo(a)
console.log(result);