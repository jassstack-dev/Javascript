class Users {
    name;
    email;
    age;
}

const user1 = new Users()
const user2 = new Users()

user1.name = 'vimal'
user2.name = 'anjali'

console.log(user1.name)
console.log(user2.name)

// here i created a class that is Users and inside i created three object
// Class ka benefit:
// - Reusable structure.
// - Multiple independent objects.
// - Data ko organized rakhna.
// - Same structure ko baar-baar use karna.

//  Practice 1: Car Class
// JavaScript mein ek Car class bana:
// 1. Class ka naam Car hona chahiye.
// 2. Ismein brand aur color properties hon.
// 3. Class se car1 aur car2 naam ke do objects create kar.
// 4. Dono objects ki properties ko alag-alag values assign kar.
// 5. Dono cars ka brand aur color console mein print kar.

class Car  {
    brand;
    color;
}

const car1 = new Car()
const car2 = new Car()

car1.brand = 'mercedes'
car1.color = 'yellow'
car2.brand = 'bmw'
car2.color = 'white'

console.log(`first car is ${car1.brand} and color is ${car1.color}`)
console.log(`second car is ${car2.brand} and color is ${car2.color}`)


// Practice 2: Independent Objects
// Ab ek Mobile class bana:
// 1. brand, model aur price properties declare kar.
// 2. mobile1 aur mobile2 objects create kar.
// 3. mobile1 ko Samsung Galaxy S25 aur mobile2 ko Apple iPhone 17 assign kar.
// 4. Dono mobiles ki details print kar.
// 5. Check kar ki dono objects same hain ya different, using ===.

class Mobile {
    brand;
    model;
    price
}

const mobile1 = new Mobile()
const mobile2 = new Mobile()

mobile1.model = 'Samsung Galaxy S25'
mobile2.model = 'Apple iPhone 17'

console.log(mobile1.model)
console.log(mobile2.model)
console.log(mobile1 === mobile2)
console.log(mobile1.model === mobile2.model)  //false

// Ek Student class bana aur usse 3 independent objects create kar. Abhi constructor nahi use karna. 😎

class Student{
    
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}

const student1 = new Student('jass', 101)
const student2 = new Student('vimal', 'vimal@gmail.com')
const student3 = new Student('jassubhai', 'vimlajass@gmail.con')

console.log(student1)
console.log(student2)
console.log(student3)

