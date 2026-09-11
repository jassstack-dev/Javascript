const li = document.querySelectorAll('li')
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const body = document.body
const loginWrapper = document.querySelector('.login-wrapper')
const  login = document.querySelector('.get-started')
// console.log(li)

function navList(){
    li.forEach((val, index) =>{


   
    val.addEventListener('click', function(e){
          e.stopPropagation()
          loginWrapper.style.display= 'none'
        if(index === 0){
            
            card1.style.display = 'block'
            card2.style.display = 'none'
            card3.style.display = 'none'
        } else if(index === 1){
            card2.style.display = 'block'
            card1.style.display  = 'none'
            card3.style.display  = 'none'
        } else if(index === 2){
            card3.style.display = 'block'
            card2.style.display  = 'none'
            card1.style.display  = 'none'
        }else{
            return
        }
    })
}) 

body.addEventListener('click', function() {

    card1.style.display = 'none'
    card2.style.display = 'none'
    card3.style.display = 'none'

})
}

navList()


login.addEventListener('click', function(r){
    r.stopPropagation()
     card3.style.display = 'none'
            card2.style.display  = 'none'
            card1.style.display  = 'none'
    loginWrapper.style.display = "flex"
})

loginWrapper.addEventListener('click', function(e){
    e.stopPropagation()
})

body.addEventListener('click', function(){
    loginWrapper.style.display = 'none'
})