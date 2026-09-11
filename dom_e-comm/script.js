console.log("JS LOADED");


const overlay = document.querySelector('.overlay')
const createBtn = document.querySelector('.navbar .create-btn')
const dlt = document.querySelector('.dlt')
const form = document.querySelector('form')
 const order = document.querySelector('.orders')



let productArray = JSON.parse(localStorage.getItem('products')) || []




let productIndex = null;





function ui(){
    order.innerHTML = ""
    productArray.forEach(function(elem, index){
order.innerHTML += `<div class="card">

            <img
                src=${elem.productImage}
                alt="Nike Air Max"
            >

            <div class="card-content">

                <h2>${elem.productName}</h2>

                <p>
                    ${elem.productDescription}
                </p>

                <div class="price">
                    ₹${elem.productPrice}
                </div>

                <div class="buttons">

                    <button onclick="updateProduct('${elem.productName}')" class="update">
                        Update
                    </button>

                    <button onClick = "deleteProduct(${index})" class="delete">
                        Delete
                    </button>

                </div>

            </div>

        </div>`
    })
}

ui()



 



createBtn.addEventListener("click", function(){
    overlay.style.display = "flex"
} )

dlt.addEventListener('click', function(){
    overlay.style.display = "none"
})


form.addEventListener('submit', function(e){
    e.preventDefault()
    
    let productName = e.target[0].value
    let productDescription = e.target[1].value
    let productPrice = e.target[2].value
    let productImage = e.target[3].value

    if(productName.trim() === "" || productDescription.trim() ==="" || productPrice === "" || productImage === ""){
        alert('all field are required')
        return
    }

    let obj ={
        productName: productName,
    productDescription: productDescription,
    productPrice: productPrice,
    productImage: productImage
    }


 if(productIndex != null){
    productArray[productIndex] = obj
    productIndex = null
    localStorage.setItem('products', JSON.stringify(productArray))
 }else{
       productArray.push(obj)
       localStorage.setItem('products', JSON.stringify(productArray))
 }

    ui()

    overlay.style.display = "none"

//   console.log(productArray)

 


    form.reset()
})


function updateProduct(name){
    overlay.style.display = "flex"
    let product = productArray.find(function(elem){
        return elem.productName === name
    })
    productIndex = productArray.findIndex(function(elem){
        return elem.productName === name
    })



    form[0].value = product.productName
    form[1].value = product.productDescription
    form[2].value = product.productPrice
    form[3].value = product.productImage

   
    
}

function deleteProduct(index){
    productArray.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(productArray))
    ui()
}

