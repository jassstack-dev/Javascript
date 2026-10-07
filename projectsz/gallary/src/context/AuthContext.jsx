import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  // register users state
  const [registerUser, setRegisterUser] = useState(() => {
    return JSON.parse(localStorage.getItem("registerUser")) || [];
  });
//   console.log("register users --->", registerUser);

  // login user state
  const [loginUser, setLoginUser] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedInUser"));
  });
//   console.log("loggedInuser ---> ", loginUser);

  // gallary state
  const [gallary, setGallary] = useState(() => {
    return JSON.parse(localStorage.getItem("gallary")) || [];
  });

  //delete functionality
  function deleteImage(id) {
    const updateGallery = gallary.filter((val) => val.image !== id);
    setGallary(updateGallery);
    localStorage.setItem("gallary", JSON.stringify(updateGallery));
  }

//edit functionality 

const [toggle, setToggle] = useState(true)
const [selectedPhoto, setSelectedPhoto] = useState(null);
console.log("selected photo for edit  --->", selectedPhoto)

function editGallery(id){
console.log(id)
}




  return (
    <MyStore.Provider
      value={{
        registerUser,
        setRegisterUser,
        loginUser,
        setLoginUser,
        gallary,
        setGallary,
        deleteImage,
        editGallery,
        toggle, 
        setToggle,
        selectedPhoto, 
        setSelectedPhoto
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
