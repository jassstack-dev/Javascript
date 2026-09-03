// Promise -> matlab maine kisi ko proimiss dia ki mai tumhe data laake dunga pakka

// definition - promise ek object hai jo ki api ko call karte samaya ya async task ke samaya ye help karta hai

// promises ki 3 stage hoti hai 
// --> pending(abhi kaam chal rha  hai, na success, na fail(initial state))
// --> fulfilled (kaam success ho gaya (resolve ho gaya ))
// --> rejected (kaam fail ho gaya (error aa gaya))


// function abcd(){
//     console.log("data aa agya ")
// }

// data jab tak ni aayega jab tak mai  ise call ni karunag to ye  yanha hota hai async 

// abcd() //mene call kar dia ab data aa jayega 


// fetch - data fetch  karne mai smaaya lagta hai islie ha, ise turant ni chala skte console ke sath mai 

// ---> like 

// async function dataLao(){
//     let response = await fetch('https://picsum.photos/v2/list')
//     let data = await response;
//     console.log(data.json())  //ab yanha hame response mil rha hai
// }

// dataLao()
// ab idhar kya ho rha hai idhar data pending form mai aa rha hai api response de rhi hai but pending form mai kyonki ham fetch ko direct call ni kar skte (kyonki response aane mai time lagta hai)

// and idhar daate aane mai samaya lag rha hai to fetch ke aage await lagao agar await laga dia to function ke aage async lagao and uske baad console karoge to tumhe response milega 


// promise ka kaam hai future mai result dena (ya error dena) ka vaada karna 

// new promise banana ni  hota handle karna hota hai 

// let p1 = new Promise(function(resolve,reject){

//     console.log("promise pending hai....")
//  let value = true;

//  setTimeout(function(){
//     if(value){
//         console.log("value true")
//         resolve()
//     }else{
//         console.log("value false")
//         reject()
//     }
//  },3000)

// })

// p1.then(function(){
//     console.log("promise resolve")
// })
// .catch(function(){
//     console.log("promise rejected")
// })
// .finally(function(){
//     console.log("promise end")
// })

// new Promise ek callback function leta hai and wo function do value leta hai first is resolve and second is reject


// --> order food -> order in process --> order is coming/order failed 
//    ---> order resolve ---> make a payment  ---> you eat
//    ---> order failed ----> complaint karo 
// ----> food order completed

function orderFood(){
    let myOrder = new Promise(function(resolve, rejected){ 
        console.log("order is in process....")

        let orderStatus = true;

        setTimeout(function(){
            if(orderStatus){
                console.log("order confirmed")
                resolve()
            }else{
                console.log("order Failed")
                rejected()
            }
        },3000)

    })

    myOrder.then(function(){
        console.log('please make payment')
        let paymentStatus = true;

        return new Promise(function(res){
            setTimeout(() => {
                if(paymentStatus){
                    res()
                }else{
                    console.log("payment not done")
                }
            }, 3000);
        })
    })
    .then(function(){
        console.log("payemnt completed order khao ")

      return new Promise(function(res){
        setTimeout(() => {
            res()
        }, 3000);
      })
        
    })
    .catch(function(){
        console.log('complaint karo')
    })
    .finally(function(){
        console.log("order completed")
    })
    
}

// orderFood()


// bane hue fetch ke sath promise ko kaise handle3 karte hai 


// async function Products(){
//     const response = await fetch('https://fakestoreapi.com/products')

//     let data = await response.json()

//    data.forEach(function(elem){
//     console.log(elem.title)

//    })
   
// }

// best approach to handle the errro try and catch 


async function Products(){
    try{
        const response = await fetch('https://fakestoreapi.com/products')

    let data = await response.json()

   data.forEach(function(elem){
    console.log(elem.title)

   })
    }catch(error){
        console.log(error)
    }
   
}

Products()


