// var obj = {
//     num: 2
// }

// var addToThis = function(a,b){
//     return this.num + a+b
// }

// var call = addToThis.call(obj,5,10)
// var apply = addToThis.apply(obj, [5,6])

// var bind = addToThis.bind(obj)
// console.log(bind(10,20))
// console.log(call)
// console.log(apply)


// var Student = {
//     age: 20
// }

// var printAge = function(){
//     console.log(this.age)
// }

// printAge.bind(Student)()


// // let multiply = function(x,y){
// //     console.log(x*y)
// // }

// // let multiplyByTwo = multiply.bind(this, 2) 
// // multiplyByTwo(3) // this passed parameter will refer to y 

// // let multiplyByThree = multiply.bind(this, 3)
// // multiplyByThree(5) // this passed parameter will refer to y 

// let multiply = function(x){
//     return function(y){
//         console.log(x*y)
//     }
// }

// let multiplyByTwo = multiply(2)
// multiplyByTwo(3)

// let multiplyByThree = multiply(3)
// multiplyByThree(3)



// const name = (arr)=>{
//     let c = 0
//     return function(){
//         console.log("Hello"+arr[c])
//         c+=1
//     }
    
// }

// let fun = name(["Ram","Shyam"]);

// fun()// Print Hello Ram

// fun()//print Hello Shyam


class Student{

    static c = 0
    static minMarks
    static minAge
    constructor(name, age, phone, boardMarks){
        this.name = name
        this.age = age
        this.phone = phone
        this.boardMarks = boardMarks
        Student.c += 1
        this.printIfEligibleForPlacement(Student.minMarks, Student.minAge)
    }

    isEligible(){
        if(this.boardMarks>=40){
            console.log("Eligible")
        }else{
            console.log("Not Eligible")
        }

    }
    eligibleForPlacements(minMarks){
        return (age)=>{
            if(this.age>=age && this.boardMarks>=minMarks){
                return true
            }else{
                return false
            }
        }
    }
    printIfEligibleForPlacement(minMarks, minAge){
        console.log(this.eligibleForPlacements(minMarks)(minAge))
    }

    static getNoOfStudents(){
        console.log(this.c)
    }
    
}
Student.minMarks = 45
Student.minAge = 20
let s1 = new Student("Amit", 20, 2136678321, 60,  )
let s2 = new Student("Vaibhav", 21, 2136678321, 45 )
let s3 = new Student("Bharat", 22, 2136678321, 50 )
let s4 = new Student("Rajat", 23, 2136678321, 39 )
let s5 = new Student("Aman", 24, 2136678321, 12 )

Student.getNoOfStudents()


