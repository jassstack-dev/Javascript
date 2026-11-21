const users = [
    { id: 1, name: "Rahul", age: 22, role: "admin", active: true },
    { id: 2, name: "Aman", age: 17, role: "user", active: false },
    { id: 3, name: "Priya", age: 25, role: "user", active: true },
    { id: 4, name: "Rohit", age: 30, role: "manager", active: true },
    { id: 5, name: "Neha", age: 19, role: "admin", active: false },
    { id: 6, name: "Karan", age: 28, role: "user", active: true }
];

// Q1. Active Users

const activeUser = users.filter((val)=>{
    return val.active === true
})

console.log(activeUser)

// Q2. Admin Users

const adminUser = users.filter((admin)=>{
    return admin.role === 'admin'
})

console.log(adminUser)

// Q3. Age Validation

// Sirf 18 ya usse zyada age wale users find karo.

const ageValidation = users.filter((val)=>{
    return val.age >=18
})
console.log(ageValidation)

// Q4. Sort Users

// Users ko age ke according descending order mein sort karo.

const ageSort = users.sort((a,b)=>{
    return a.age - b.age
})

console.log('age sort -',ageSort)

// Find User By ID

const findUserById = (userId)=>{

const user = users.find((val)=>{
    return val.id === userId
})

if(!user){
    return 'user not found'
}

return user


}

console.log(findUserById(2))


// Q6. Search + Filter Users

const getUser = (role, minAge)=>{
   const result = users.filter((user)=>{
    return  user.role === role && user.age >= minAge
   })

   return result.length > 0 ? result : "user not fdound"



    
}


// filter by search and filter

console.log('filter by search and filter')
console.log(getUser('admin', 90))