import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import axios from "axios";

export const Mystore = createContext();

export function ContextProvider({ children }) {
  // register user
  const [ZidioUser, setZidioUser] = useState(() => {
    return JSON.parse(localStorage.getItem("registerUser")) || [];
  });
//   console.log(ZidioUser);

  // login user
  const [loginUser, setloginUser] = useState(() => {
    return JSON.parse(localStorage.getItem("LoggedInUser"));
  });

  // products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

   const productApi = async () => {
    try {
      const res = await axiosInstance.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    productApi();
  }, []);

  // tasks
  const [tasks, setTasks] = useState([]);

    async function taskApi() {
    try {
      const res = await axios.get("https://dummyjson.com/todos");
      setTasks(res.data.todos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    taskApi();
  }, []);

//   team
const [UserData, setUserData] = useState([])
  const [loadingData, setloadingData] = useState(true)
 const userApi =async ()=>{
const res =await axiosInstance.get('/users')
// console.log(res.data)
setUserData(res.data)
setloadingData(false)

    }

    useEffect(()=>{
        userApi()
    },[])

  return (
    <Mystore.Provider
      value={{
        ZidioUser,
        setZidioUser,
        loginUser,
        setloginUser,
        products,
        setProducts,
        tasks, 
        setTasks,
        UserData,
        setUserData,
        loading,
        loadingData,
        setloadingData 
      }}
    >
      {children}
    </Mystore.Provider>
  );
}
