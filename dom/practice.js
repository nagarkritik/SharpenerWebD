var obj = {
    num: 2
}

var addToThis = function(a,b){
    return this.num + a+b
}

var call = addToThis.call(obj,5,10)
var apply = addToThis.apply(obj, [5,6])

var bind = addToThis.bind(obj)
console.log(bind(10,20))
console.log(call)
console.log(apply)


var Student = {
    age: 20
}

var printAge = function(){
    console.log(this.age)
}

printAge.bind(Student)()


// let multiply = function(x,y){
//     console.log(x*y)
// }

// let multiplyByTwo = multiply.bind(this, 2) 
// multiplyByTwo(3) // this passed parameter will refer to y 

// let multiplyByThree = multiply.bind(this, 3)
// multiplyByThree(5) // this passed parameter will refer to y 

let multiply = function(x){
    return function(y){
        console.log(x*y)
    }
}

let multiplyByTwo = multiply(2)
multiplyByTwo(3)

let multiplyByThree = multiply(3)
multiplyByThree(3)