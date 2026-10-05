import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const ProductsPage = () => {

    const [productData, setProductData] = useState([])

    
   
    const [pageLoading, setPageLoading] = useState(true)

async function productApi(){
    try{

const res = await axios.get('https://dummyjson.com/products')
// console.log(res.data.products)
setProductData(res.data.products)
setPageLoading(false)


    }catch(error){
        console.log(error)
    }
}

useEffect(()=>{
    productApi()
},[])

if(pageLoading){
    return <h1>Data Loading...</h1>
}


  return (
    <div className='grid grid-cols-3 gap-6 p-6'>
        {
            productData.map((val)=>{
                return <ProductCard key={val.id} product={val} />
            })
        }
    </div>
  )
}

export default ProductsPage