// what is events 
// ===> jp bhi harkate ham window pr karte hai wo events hi hota hai 

// type of events
// mouse events 
// pointer events
//keyboard events
// input events
//submit events

// const btn = document.querySelector('button')
// const main = document.querySelector('main')
// const body = document.body

// btn.addEventListener('click', ()=>{
//     console.log('clicked')    
// })

// evenets jo bante hai wo add eventlistener ki bajaha se bandte hai and events dkehne ke lie ham funciton mai e pass karte hau ya kuch or bhi pass kar skte  hai

// like



// btn.addEventListener('click', (e)=>{

//     console.log('btn clicked')
// })
// main.addEventListener('click', (e)=>{
//     console.log('main clicked')
// })
// body.addEventListener('click', (e)=>{
//     console.log('body clicked')
// })

// event bubbling hai ye 






// and ye ho rha ha event bubbling ---> mtlb neeche se upar jaa rh ahia and just iska ulta dekhna hai to wo hota hai event propogation andf iske lie hame na ek or cheej pass akrni  hai 
// capture true is function ke baad 

// btn.addEventListener('click', (e)=>{
   
//     console.log('btn clicked')
// }, {capture:true})
// main.addEventListener('click', (e)=>{
//     console.log('main clicked')
// },{capture:true})
// body.addEventListener('click', (e)=>{
//     console.log('body clicked')
// },{capture:true}) //ye hua event propogation/event capturing huanhai / event traversal


// event propogation ----> event traversal => mtlb hamare events kese travel kar rhe hai 

// means samajh jab ham  button pr click kar rhe hai to iska mtlb ye nhi ki ye sirf button pr hi click ho rha hai button to ek targeted event hai --> button pr bhi click --> button ke parent pr click --> and buttton ke parent ke parent pr click

                //     WINDOW
                //       │
                //       ↓
                //     DOCUMENT
                //       │
                //       ↓
                //     <HTML>
                //       │
                //       ↓
                //     <BODY>
                //       │
                //       ↓
                //    <DIV>
                //       │
                //       ↓
                //   <BUTTON>  ← Event yahan hua 

// event bubbling 

    //     🎯 CLICK
    //        │
    //        ↓
    //    BUTTON
    //        ↑
    //        │
    //     DIV
    //        ↑
    //        │
    //     BODY
    //        ↑
    //       HTML
    //        ↑
    //    DOCUMENT

// event propogation ka ulta hota hai event bubbling ===> jaise hi event progatiom hua uske just baad event bubbling hota hai 


// ___________________________submit events_________________________

const inp1 = document.querySelector('#name')
const inp2 = document.querySelector('#email')
const form = document.querySelector('form')
const user = document.querySelector('.user')
const inp3 = document.querySelector('#url')

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    url: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    url: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "jane@example.com",
    url: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 4,
    name: "Jane Smith",
    email: "jane@example.com",
    url: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 5,
    name: "Jane Smith",
    email: "jane@example.com",
    url: "https://i.pravatar.cc/150?img=2"
  }
];

const data = ()=>{

    user.innerHTML = ""
    users.forEach((e, index)=>{
        user.innerHTML += `<div class="user-card">

  <div>
    <img src="${e.url}" alt="image here">
  </div>

  <div class="text">
    <div>${e.name}</div>
    <div>${e.email}</div>
  </div>

  <div class="actions">
    <button class="edit-btn"  >Edit</button>
    <button class="delete-btn" onClick ="deleteCard(${index}) " >Delete</button>
  </div>

</div> 
`
    })
}

data()


form.addEventListener('submit', (e)=>{
    e.preventDefault()
   let name = inp1.value
   let email = inp2.value
   let url = inp3.value

   console.log(url)

   if(name.trim() === "" && email.trim() === "" && url.trim() === "") return;

users.push({
    name,email,url
})

data()

console.log(users)

    form.reset()
  
})


let deleteCard  = (index)=>{
    users.splice(index, 1)
    data()
}












