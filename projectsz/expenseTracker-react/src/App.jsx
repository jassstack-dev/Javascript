import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Dashbaord from './components/Dashbaord'
import Login from './components/Login'

const App = () => {

    const [Users, setUsers] = useState(()=>{
     return JSON.parse(localStorage.getItem('data')) || []
    })
    // console.log(Users)

  const [toggle, setToggle] = useState(false)
  const [login, setLogin] = useState(()=>{
    return sessionStorage.getItem('isLoggedIn') !== "true";
  })
  return (
    <div>
      {
      login ? <Login setLogin={setLogin}/> :(
        <>
          <Navbar setToggle={setToggle} />

          {
            toggle
              ? <Form
                  user={Users}
                  setUsers={setUsers}
                  setToggle={setToggle}
                />
              : <Dashbaord user={Users} />
          }
        </>
      )}

    </div>
  );

  
}

export default App