// change the h1 text 
const h1 = document.querySelector('h1')
console.log(h1)

h1.textContent = "mai update ho gaya hu via js" 

// and content chnage karne ke lie hamare pass teen tareekey hote ahi 
     //textContent - ye sirf text chnage karta ha 
     //innerText - ye sirf body ke andar ka text deta hai 
     //innerHTML - ye content and tags bhi update kar skgta hai and ye whole body deta  hai with texta nd tags

h1.style.backgroundColor = "red"


// classes

// 1.classList.add() => ise class add hoti hai  
// 2.classList.remove() => ise class remove hoti hai  
// 3.classList.contains() => ye check karta hai class hai  ya nhi 
// 4.classList.toggle() => agar class hai to haatyega or nhi  hai to lagayega 
// 5.classList.replace() => replace do value leat ahi class, and new class iska matlb hai jo purani class hogi use new class se replace kar dega


// is my have some class on h1 ????????????????????????????????

const isClass = h1.classList.contains("heading")
console.log(isClass)   // ye batyega ki class hai ya nhi filhaal class hai ni  