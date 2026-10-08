import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com"
})



axiosInstance.interceptors.response.use(
    (response)=>{
console.log("interceptor response --->", response)  
// jab tak ham ise return nhi karenge jab data data product file mai nhi jayega ya koi or bhi ho is domian se related
return response
    },
    (error)=>{
console.log(error)
    }
)


// ye response ke lie kiya hai and ek or hoti hai request  ke lie same bs .response ki jagha .request karna hai  baaki same rhega


// ab baari custom hooks ki 
