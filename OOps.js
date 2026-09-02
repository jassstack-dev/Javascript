// function CreateSongs(){
//     this.bookName = "harry potter"
//     this.author = "JK rowling"
//     this.pages = 360
// }

// let book1 = new CreateSongs()
// console.log(book1.author)

// agar hame kai saare song create karne hai isi construction fuinctioo ki help se to ham direct value pass ni karemge  ham value ko as a parameter lenge and jjo book ham create karenge banaha uska argument pass kar denge 


// function CreateSongs(bookName, author, pages){
//     this.bookName = bookName
//     this.author = author
//     this.pages = pages
//     this.getfrontPage = function (){
//         console.log("book Name :", this.bookName)
//         console.log("author :", this.author)
//         console.log("pages :", this.pages)
//     }
// }
// hamne sabse pahale machine banai 

// let book1 = new CreateSongs("vimal bhaisaab", "vimal ajss", 783)
// let book2 = new CreateSongs("Sahani", "Priyanka Sah", 783)

// uske baad use saman dia 

// output ye aaya 
// book1.getfrontPage()
// book2.getfrontPage()

// isme jo inheritence hota hai wo hota hai prototypical



// class MakeStudents{
// constructor(Name, Marks , Subject){
//     // ye banane ka kaam kaam karega 
//      this.Name = Name
//     this.Marks = Marks
//     this.Subject = Subject
// }

// // and ye jo method hai ye sabke lie common hai  ise ham rakhenge bahar 
// getfrontPage = function (){
//         if(this.Marks >= 50){
//             console.log("- you are eligible for next class")
//         }else{
//             console.log("- you are failed")
//         }
//     }
// }

// let s1 = new MakeStudents("Vimal" , 89, "mathematics")
// let s2 = new MakeStudents("Priyanka" , 49, "mathematics")

// s1.getfrontPage()

// and isme jo inheritance hota hai wo hota hai classical inheritance


// har kisi ke pass prototype hota hai 
//  - array ke pass khud ka prototype  hota hia 
//  - Object ke pass khud ka prototype  hota hia 
//  - Function ke pass khud ka prototype  hota hia 

// agar hame check karna ho protype ka prototye

// const arr = [10,20,30,40]
// console.log(arr.__proto__)  // - agar iske prototype ke prototype ko dekheneg to wo hoga ek object and iske prototype ki value null milegi

// const  obj = {
//     name:"vimla",
//     class:10
// }

// console.log(obj.__proto__)

// same as function 

class MakeStudents {
    constructor(name, age , subject){
        this.name = name
        this.age = 34
        this.subject = subject
    }
   
}

let  getMethod = function () {
                console.log(`${this.name} is the studnet of ${this.subject}`)
    }

    MakeStudents.prototype.getMethod = getMethod


let s1 = new MakeStudents("vimal", 67, "Science")
// s1.getMethod()


// 

let papa = {
    name: "Maharam Singh",
    property : "10 bheegha"
}

let beta = {
    name : "vimal"
}

// mtlb beta ke pass koi cheej nhi ahit o wo apne father mai ke dekhega kyonki father ki property bhi bete ki hi hoti hai 

beta.__proto__ = papa  //or ise prototype chainign kahate hai  
console.log(beta.property)


class User {
    constructor(name, batch){
        this.name = name
        this.batch = batch
    }
    getuser = function(){
        console.log(`${this.name} - congratulation you are added in the ${this.batch}`)
    }
}

class Admin extends User {
    constructor(name, batch){
        super(name, batch)
    }

    addCourse(){
        console.log("course added")
    }

    removeCourse(){
        console.log("remove Course ")
    }

    getUser(){
        console.log(`Welcome Admin ${this.name}`)
    }
}

let u1 = new User("shyamveer", "COhert 3.0")
let u2 = new Admin("Manoj", "COhert 3.0")
u1.getuser()

u2.getUser()
u2.addCourse()
u2.removeCourse()