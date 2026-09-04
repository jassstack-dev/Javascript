// Attribute vs Property — The Fundamental Difference
// -setAttribute, getAttribute, removeAttribute, hasAttribute
// with data -* name
//input.value(property, current state) vs input.getAttribute("value")

// ____________________________Attribute vs Property_________________________________
const h3 = document.querySelector('#id1')

// getAttribute - ye get karta hai attributes ko

let Attribute = h3.getAttribute("class")
console.log(Attribute)

// setAttribute - ye set karta hai attribute

h3.setAttribute("width", "200")  //first value attribute haia nd second uski value ya property hai


// koi attribute remove  karna ho to 

h3.removeAttribute('class')


// hasAttribute batata hai ki ye available hai ya nhi in the form of boolean(true,false)
console.log(h3.hasAttribute('class'))


// _________________with data -* name_______________

// agar hame koi attribute create karna ho to ham karega data- se start in the html

const h2 = document.querySelector('h2')

console.log(h2.getAttribute("data-user-name"))

// agar js  ke through custom attribute ki value chnage karni hai top ham use karnege dataset 

// ____________input.value vs input.getAttribute("value")_____________ 


// __________creating inserting and removing element from dom_______________

// appendchild , append , insertBefore , removechild


// old APIs
// appendchild sirf ek hi create karta hai 
// append => ye ek sath kai create kar skta hai 
// insertBefore => ye ksi child se pahale ksii child ko lekar aana ho toi use karte ahi and insertBefore 2 value leetga  hai phali wo value jiske pahale tumeh jo child karna hai wo 


// new APIs
// append ()
// prepened => sabse pahale add karo 
// before => jisse pahale use karna chhate ho bs add kardo use var ya cklass ke sath mai
// after -> mai bs uske baad ata hai 

