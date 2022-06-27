
// let fun = (a,b) => a+b

// console.log(fun(2,3))

// let student = {
//     name: "Bhavesh",
//     age: 20,
//     rollno : 12,
//     printDetails(){
//         console.log(this.name, this.age)
//     }
// }

// student.printDetails()

// let student1 = {...student}
// console.log(student1 === student)

// const hobbies = ['Sports', 'Cooking']

// for(let hobby of hobbies){
//     console.log(hobby)}

// // It is like a loop its goes through each element of array
// // and we can edit the array. It creates a copy of original array

// let hobbies1 = hobbies.map((hobby)=>{
//     return 'Hobby: ' + hobby
// }) 

// console.log(hobbies1)

// // Here we can see that we can push inside the hobbies which is const
// // So basically the const hobbies is just storing the address where
// // the array is stored, it just stores the reference to the array
// // and we just changed the content inside the array not the array 
// // address that's why this works.
// hobbies.push("Cricket")
// console.log(hobbies)

// // Rest and spread operators
// // copying an array

// //const copiedArray = hobbies.slice() // we can pass arguments in slice to copy a subset of array but if we dont pass it will copy whole array

// //  spread operator: It is used to copy all the content of and array or object
// // to another array or object

// const copiedArray = [...hobbies] 
// console.log(copiedArray)

// // Rest Operator: Used to take multiple arguments in a single parameter
// // of a function 
// const toArray = (...args)=>{
//     return args
// }
// console.log(toArray(1,2,3,4))

// const array = ['apple', 'oranges' , '', 'mango', '' , 'lemon']

// const array1 = array.map((item)=>{
//      return item
// }).filter((val)=>{
//     if(val!="") return val
// })

// console.log(array1)


// async function print(){
//     console.log("a")
//     console.log("b")

//     let c = await new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("c")
//         }, 3000)
//     })
//     console.log(c)

//     let d = await new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("d")
//         }, 0)
//     })
//     console.log(d)

//     console.log("e")

// }

// print()

const name = (arr)=>{
    let c = 0
    return function(){
        console.log(arr[c])
        c+=1
    }
}

let fun = name(['Ram', 'Shyam'])

fun()
fun()