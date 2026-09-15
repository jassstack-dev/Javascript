const  createBtn = document.querySelector('.createBtn')
const  productBtn = document.querySelector('.seeProducts')
const form = document.querySelector('.form')
const products = document.querySelector('.products')
const productForm = document.querySelector('form')
const successPopup = document.querySelector('.prdCreated')
const cartNumber = document.querySelector('.cart span')
const cart = document.querySelector('.cart')





createBtn.addEventListener('click', function(e){
  
    form.style.display = 'flex'
     products.style.display = 'none'

    
     
    
})

productBtn.addEventListener('click', function(){
    products.style.display = 'flex'
     form.style.display = 'none'
})

let productArr = JSON.parse(localStorage.getItem('products')) || []

console.log(productArr)

function ui(){
    products.innerHTML = ""

    productArr.forEach(function(e, index){
        products.innerHTML += `<div class="product">
            <div class="img">
                <img src="${e.image}" alt="">
            </div>
            <div class="name">
                <h2>${e.name}</h2>
            </div>
            <div class="description">
                <p>${e.description}</p>
            </div>
            <div class="price-section">
                <div class="price">
                    $<span>${e.price}</span>
                </div>
                <div class="buyBtn" data-set = "${index}">
                    Buy Now
                </div>
            </div>
        </div>`
    })


       
}

ui()





form.addEventListener('submit', function(e){
e.preventDefault()

let name = e.target[0].value
let description = e.target[1].value
let price = e.target[2].value
let image = e.target[3].value

let obj = {
    name, description,price,image
}

productArr.push(obj)
localStorage.setItem('products', JSON.stringify(productArr))

// console.log(obj)



        successPopup.style.display = 'flex'

        setTimeout(function(){
            successPopup.style.display = 'none'
        },2000)

ui()
         
})


// see product in cart

let cartProduct = JSON.parse(localStorage.getItem("cartProducts")) || []

console.log(cartProduct.length)

 cartNumber.textContent = cartProduct.length

products.addEventListener('click', function(e){
    if(e.target.classList.contains('buyBtn')){
        let index = e.target.dataset.set

        let selectProduct = productArr[index]

        cartProduct.push(selectProduct)
       localStorage.setItem('cartProducts', JSON.stringify(cartProduct))
    
 cartNumber.textContent = cartProduct.length  
    }
})


// add to cart






const cartProducts = document.querySelector('.cart-products')

function cartUi(){
    cartProducts.innerHTML = ""
    cartProduct.forEach(function(e, index){
 cartProducts.innerHTML += ` <div class="cart-product">

                <div class="cart-img">
                    <img src="${e.image}" alt="">
                </div>

                <div class="cart-info">
                    <h2>${e.name}</h2>
                    <p>${e.description}</p>

                    <div class="cart-price">
                        $${e.price}
                    </div>

                    <div class="quantity">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>

                <button class="remove-cart" data-set = "${index}">
                    Remove
                </button>

            </div>`



    })
}



cart.addEventListener('click', function(){
        products.style.display = 'none'
     form.style.display = 'none'
    cartUi()
})


cartProducts.addEventListener('click', function(e){
    if(e.target.classList.contains('remove-cart')){
        let index = e.target.dataset.set
        cartProduct.splice(index,1)
        localStorage.setItem('cartProducts', JSON.stringify(cartProduct))
        cartUi()
        cartNumber.textContent = cartProduct.length 
        console.log(cartProduct)
    }

})













