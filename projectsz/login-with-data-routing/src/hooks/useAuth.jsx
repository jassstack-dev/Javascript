import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MyStore } from "../context/AuthContext";
import { toast } from "react-toastify";

export const useAuth = () =>{

     const {registerUser,setLoggedInUser, setRegisterUser,} = useContext(MyStore)

 const navigate = useNavigate()
      const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const loginFormSubmit = (data) => {
    console.log(data);

    let isloggedIn = registerUser.find((val)=> val.email === data.email && val.password === data.password)

    if(!isloggedIn){
     
      toast.error('invalid user')
      return
    }

    
    setLoggedInUser(data)
localStorage.setItem('loggedInUser', JSON.stringify(data))
    navigate('/main')
  };

//   register
    const registerFormSubmit = (data) => {
    // console.log(data);

   let isExist = registerUser.some((val)=> val.email === data.email)

   if(isExist){
    alert('email exist')
    return
   }

   const arr = [...registerUser, data]
    setRegisterUser(arr)
    localStorage.setItem('registerUser', JSON.stringify(arr))
  }; 


  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit,
    watch,
  }

}