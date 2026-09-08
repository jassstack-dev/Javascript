const timer = document.querySelector('.tiktik')

const btn = document.querySelector('.button')
const card = document.querySelector('.card')
const overlay = document.querySelector('.overlay')
const scoree = document.querySelector('.score')
const h3 = document.querySelector('.overlay h3')


const  div = document.createElement('div')
div.classList.add('small-card')


function randomColor(){
    let r = Math.floor(Math.random() *256)
    let g = Math.floor(Math.random() *256)
    let b = Math.floor(Math.random() *256)

return `rgb(${r}, ${g}, ${b})`
}


function randomCard(){

        div.style.backgroundColor = randomColor()
            card.append(div)

   

            let cardHeight = card.clientHeight - div.offsetHeight
            let cardWidth = card.clientWidth - div.offsetWidth

        let ry = Math.random()*cardHeight;
    let rx = Math.random() *cardWidth;
    div.style.top = `${ry}px`
    div.style.left = `${rx}px`
}




   let time = 0;
    let interval;
    let score = 0
  
btn.addEventListener('click', ()=>{



clearInterval(interval)
  time = 0;
    timer.textContent = time;

    interval = setInterval(() => {
  
       time += 1
       timer.textContent = time
randomCard()
        
    }, 1000);

    setTimeout(() => {
        clearInterval(interval)
        overlay.style.display = "flex"
        setTimeout(function(){
            overlay.style.display = "none"
            scoree.textContent = 0
            timer.textContent = 0
        },3000)

        
    }, 10000);

    
    
})

div.addEventListener('click', function(){
   
   score += 1;
   scoree.textContent = score
   h3.textContent = `your score is ${score}`
})







