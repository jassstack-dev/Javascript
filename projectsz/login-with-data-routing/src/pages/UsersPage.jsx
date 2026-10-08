
import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import { axiosInstance } from '../config/axiosInstance'

const UsersPage = () => {

    const [usersData, setUsersData] = useState([])
   
    const [pageLoading, setPageLoading] = useState(true)

async function usersApi(){
    try{

const res = await axiosInstance.get('/users')
// console.log(res.data.users)
setUsersData(res.data.users)
setPageLoading(false)


    }catch(error){
        console.log(error)
    }
}

useEffect(()=>{
    usersApi()
},[])

if(pageLoading){
    return <h1>Data Loading...</h1>
}




  return (
    <div >
        {
            usersData.map((val)=>{
                return <UserCard  key={val.id} user={val}  />
            })
        }
    </div>
  )
}

export default UsersPage