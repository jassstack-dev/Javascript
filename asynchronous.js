// ..........................Asynchronous JavaScript................................

// console.log("hello guys 1")
// console.log("hello guys 2")
// console.log("hello guys 3")

// synchronous -> ye sab sync mai chal rhe hai ye hai scynchronous 
   

// asynchronous -> ek time pr kai cheeje chalana 
// settimeout()

// setTimeout(function(){
//     console.log('heloo js')
// },2000) 

// setTimeOut apne andar 2 cheeje leta hai ek hota hai function and ek hoti hai value 

// note 
// -> global execution khali hoga then setTimeout chakega and idhar eventloop na gate keeper ka kaam karta hai jab gec khali ho jayega call stack se then setTimeOut chalega  


// sabse pahale microtask queue(vip line) chalti hai uske baad chalegi callback queue/task queue (normla line) call stack mai 
//ex of microtask ye sab micrtotask queue 
// --> promises
// --> mutation observer(mtlb jab ham dom mai kuch bhi changes karte hai wo mutation observer kahalata hai )

//ex of callback queue 
// --> in dono ke alawa sab kuch callback task mai aayega 


// gec callstack mai  synchronous ke lie chalta hai 
// microtask and callback queue call stacke mai asynchronous ke lie chalte hai 


// callback -> basically ham function ke andar jo pass karte hai callback kahalata hai 


// setTimeOut thoda delay ke sath chalta hai 

// setTimeout(function(){
//     console.log("helllo chacha")
// },4000)

// setInterval -  ek second pr chalayega 

let rakshaBandhan = setInterval(function(){
    console.log("chacha ji chal die sasural chachi ji ko lene ")
},1000)

// interval ko rokne ke lie na ham use karte ahi clear interval inside the setTimeOut and interval ko ham ek varible mai store karte hai and clearinterval ke andar pass kar dete hai

setTimeout(function(){
    clearInterval(rakshaBandhan)
},5000)

// isme kya hoga jo mera variable hai wo 5 second tak chalega and uske baad rukh jayega 


//starvation -> suffering or death because there is no enough food.



