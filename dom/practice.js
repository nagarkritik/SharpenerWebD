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


// class Student{

//     static c = 0
//     static minMarks
//     static minAge
//     constructor(name, age, phone, boardMarks){
//         this.name = name
//         this.age = age
//         this.phone = phone
//         this.boardMarks = boardMarks
//         Student.c += 1
//         this.printIfEligibleForPlacement(Student.minMarks, Student.minAge)
//     }

//     isEligible(){
//         if(this.boardMarks>=40){
//             console.log("Eligible")
//         }else{
//             console.log("Not Eligible")
//         }

//     }
//     eligibleForPlacements(minMarks){
//         return (age)=>{
//             if(this.age>=age && this.boardMarks>=minMarks){
//                 return true
//             }else{
//                 return false
//             }
//         }
//     }
//     printIfEligibleForPlacement(minMarks, minAge){
//         console.log(this.eligibleForPlacements(minMarks)(minAge))
//     }

//     static getNoOfStudents(){
//         console.log(this.c)
//     }
    
// }
// Student.minMarks = 45
// Student.minAge = 20
// let s1 = new Student("Amit", 20, 2136678321, 60,  )
// let s2 = new Student("Vaibhav", 21, 2136678321, 45 )
// let s3 = new Student("Bharat", 22, 2136678321, 50 )
// let s4 = new Student("Rajat", 23, 2136678321, 39 )
// let s5 = new Student("Aman", 24, 2136678321, 12 )

// Student.getNoOfStudents()

// arr = [1,2,3,4]
// arr1 = [1,2,3,4]

// arr2 = [...arr1, ...arr]
// arr2[7] = 5

// console.log(arr1)
// console.log(arr2)



// class Stack{

//     constructor(n){
//         this.n = n
//         this.st = []
//         this.p = 0
//     }

//     pushElement(element){
//         if(this.st.length === this.n){
//             console.log("Stack is full")
//             return 
//         }else{
//             this.st.push(element)
//         }
        
//     }

//     popElement(){
//         if(this.st.length === 0){
//             console.log("Stack is emnpty")
//         }else{
//             return this.st.pop()
//         }
        
//     }

//     peekElement(){
//         return this.st[this.st.length-1]
//     }

//     isFull(){
//         if(this.st.length === this.n){
//             return true
//         }else return false

//     }

//     isEmpty(){
//         if(this.st.length === 0){
//             return true
//         }else return false

//     }

//     printSt(){
//         console.log(this.st)
//     }
// }

// s1 = new Stack(3)
// s1.pushElement(1)
// s1.pushElement(1)
// s1.pushElement(1)
// s1.popElement()
// s1.printSt()

// class Queue{

//     constructor(){
//         this.q = []
//         this.start = 0
//     }

//     pushElement(element){
//         this.q.push(element)
//     }

//     popElement(){

//         if(this.isEmpty()){
//             console.log("Queue is empty")
//             return 
//         }

//         let a = this.q[this.start]
//         this.q[this.start] = undefined
//         this.start += 1
//         return a
//     }

//     isEmpty(){
//         if(this.q.length === 0) return true
//         else return false
//     }

//     printQueue(){
//         console.log(this.q)
//     }
// }

// let q1 = new Queue()

// q1.pushElement(3)
// q1.pushElement(1)
// q1.pushElement(2)

// console.log(q1.popElement())
// console.log(q1.popElement())
// console.log(q1.popElement())

// q1.pushElement(3)
// q1.pushElement(1)
// q1.pushElement(2)

// q1.printQueue()


// Callbacks and promises
// let posts = [
//     {title:"Post1", body: "This is post1", createdAt: new Date()},
//     {title:"Post2", body: "This is post2", createdAt: new Date()}
// ]
// let intervalId = 0
// function getPosts(){
//     clearInterval(intervalId)
//     intervalId =  setInterval(()=>{
//         setTimeout(()=>{
//             let output = ""
//             posts.forEach((post)=>{
                
//                 output+= `<li>${post.title} created ${Math.floor((new Date()-post.createdAt)/1000)} seconds ago</li>`
//             })
//             document.body.innerHTML = output
//         },1000)
//     })
    
// }

// function createPost(post, callback){
//     setTimeout(()=>{
//         posts.push({...post, createdAt: new Date()})
//         callback()
//     },1000)
// }

// function create4thPost(post, getPost, callback){
//     setTimeout(()=>{
//         callback(post, getPost)
//     },1000)
// }
// createPost({title:"Post3", body:"This is post3"}, getPosts)
// create4thPost({title:"Post4", body:"This is post4"},getPosts,createPost)



// let posts = [
//     {title:"Post1", body: "This is post1", createdAt: new Date()},
// {title:"Post2", body: "This is post2", createdAt: new Date()}
// ]

// function createPost(post){

//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push(post)
//             console.log(post.title+" created")

//             const error = false

//             if(!error){
//                 resolve(post)
//             }else{
//                 reject("Error: Something went wrong")
//             }
//         },1000)
//     })

    
// }

// function getPost(){
//     setTimeout(()=>{
//         let output = ""

//         posts.forEach((post)=>{
//             output+= `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output
//     },1000)
// }



// function deletePost(){
//     let p = new Promise((resolve, reject)=>{
//         let error = false
//         console.log("delete calles")

//         if(posts.length===0){
//             error = true
//         }else{
//             posts.pop()
//         }
        
//         if(!error){
//             resolve()
//         }else{
//             reject("Error: Array is empty now")
//         }
//     })
//     // deleting all posts until array is empty
//     //p.then(deletePost).catch(err=>console.log(err))

//     p.then(getPost).catch(err=>console.log(err))
//     //console.log(p)

// }

// createPost({title:"Post3", body:"This is post3"})
// .then(getPost).catch(err=>console.log(err))
// .then(deletePost)
// .then(getPost).catch(err=>console.log(err))
// Promise.all

// // const p1 = Promise.resolve("Hello World")
// // const p2 = 10
// // const p3 = new Promise((resolve, reject)=>{
// //     setTimeout(resolve, 2000, "Goodbye")
// // })
// // const p4 = fetch("")
// // Promise.all([p1,p2,p3]).then(values=>console.log(values))

// function updateLastUserActivityTime(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(resolve, 1000, new Date())
//     })
// }
// const p4 = createPost({title:"Post3", body:"This is post3"})
// const p5 = updateLastUserActivityTime()

// Promise.all([p4,p5]).then(values=>console.log(values)).then(deletePost).then(getPost)

// //createPost({title:"Post3", body:"This is post3"}).then(getPost).catch(err=>console.log(err))



// Async Await: 

// console.log("Person1: Shows ticket")
// console.log("Person2: Shows ticket")

// const promiseWifeBringingRicket = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Ticket")
//     }, 3000);
// })

// const getPopcorn =  promiseWifeBringingRicket.then((t)=>{
//     console.log("Wife: I have the tickets")
//     console.log("Husband: we should go in")
//     console.log("Wife: no i am hungry")
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
// })

// const getButter = getPopcorn.then((t)=>{
//     console.log("husband: i got some popcorn")
//     console.log("wife: i need butter on my popcorn")
//     return new Promise((resolve, reject)=> resolve(`${t} butter`))
// })

// const getColdrinks = getButter.then((t)=>{
//     console.log(`Husband: I got the cold drinks`)
//     console.log(`Wife: Let's go!!`)
//     return new Promise((resolve, reject)=> resolve(`${t} cold drinks`))
// })

// getColdrinks.then((t) => console.log(t))

// console.log("Person4: Shows ticket")
// console.log("Person5: Shows ticket")


// console.log("Person1: Shows ticket")
// console.log("Person2: Shows ticket")

// const preMovie = async()=>{

//     const promiseWifeBringingRicket = new Promise((resolve, reject)=>{
//         setTimeout(()=> reject("Ticket"), 3000)
//     })

//     const getPopcorn = new Promise((resolve, reject)=> resolve("popcorn"))
//     const addButter = new Promise((resolve, reject)=> resolve("Butter"))
//     const getColdrinks = new Promise((resolve, reject)=>resolve("cold drinks"))

//     let ticket = await promiseWifeBringingRicket

//     // try{
//     //     ticket = await promiseWifeBringingRicket
//     // }catch(e){
//     //     ticket = "sad face"
//     // }


//     // console.log(`Wife: I have the ${ticket}`)
//     // console.log("Husband: we should go in")
//     // console.log("Wife: no i am hungry")

//     // let popcorn = await getPopcorn

//     // console.log(`husband: i got some ${popcorn}`)
//     // console.log("wife: i need butter on my popcorn")

//     // let butter = await addButter

//     // console.log(`husband: i got some ${butter} on popcorn`)
//     // console.log(`Wife: Can yoy please get some coldrinks also`)
//     // console.log(`Husband: Sure! Why not.`)

//     // let coldDrink = await getColdrinks

//     // console.log(`Husband: I got the ${coldDrink}`)
//     // console.log(`Wife: Let's go!!`)

//     // let[popcorn, coldDrink] = await Promise.all([getPopcorn, getColdrinks])

//     // console.log(`${popcorn} ${coldDrink}`)

    


//     return ticket


// }

// preMovie().then((m)=>console.log(`Person3: shows ${m}`))

// console.log("Person4: Shows ticket")
// console.log("Person5: Shows ticket")




// let posts = [
//     {title:"Post1", body: "This is post1", createdAt: new Date()},
// {title:"Post2", body: "This is post2", createdAt: new Date()}
// ]
// function createPost(post){

//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push(post)
//             console.log(post.title+" created")

//             const error = false

//             if(!error){
//                 resolve(post)
//             }else{
//                 reject("Error: Something went wrong")
//             }
//         },1000)
//     })

    
// }

// function getPost(){
//     setTimeout(()=>{
//         let output = ""

//         posts.forEach((post)=>{
//             output+= `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output
//     },1000)
// }



// function deletePost(){
//     let p = new Promise((resolve, reject)=>{
//         let error = false
//         console.log("delete calles")

//         if(posts.length===0){
//             error = true
//         }else{
//             posts.pop()
//         }
        
//         if(!error){
//             resolve()
//         }else{
//             reject("Error: Array is empty now")
//         }
//     })
//     // deleting all posts until array is empty
//     //p.then(deletePost).catch(err=>console.log(err))

//     p.then(getPost).catch(err=>console.log(err))
//     //console.log(p)

// }

// createPost({title:"Post3", body:"This is post3"})
// .then(getPost).catch(err=>console.log(err))
// .then(deletePost)
// .then(getPost).catch(err=>console.log(err))
// Promise.all

// // const p1 = Promise.resolve("Hello World")
// // const p2 = 10
// // const p3 = new Promise((resolve, reject)=>{
// //     setTimeout(resolve, 2000, "Goodbye")
// // })
// // const p4 = fetch("")
// // Promise.all([p1,p2,p3]).then(values=>console.log(values))

// function updateLastUserActivityTime(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(resolve, 1000, new Date())
//     })
// }
// const p4 = createPost({title:"Post3", body:"This is post3"})
// const p5 = updateLastUserActivityTime()

// Promise.all([p4,p5]).then(values=>console.log(values)).then(deletePost).then(getPost)

// //createPost({title:"Post3", body:"This is post3"}).then(getPost).catch(err=>console.log(err))




// createPost, getPost, deletePost, lastUserActivity

