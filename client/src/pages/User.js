import React, { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const User = (props) => {
  const [currentForm, setCurrentForm] = useState(
    "Login"
  );

  const form = currentForm == "Login" ?
    <Login setCurrentPage={props.setCurrentPage} /> : 
    <SignUp setCurrentPage={props.setCurrentPage} />
    
  const buttonText = currentForm == "Login" ? "New User" : "Return"

  const handleClick = () => {
    currentForm == "Login" ? setCurrentForm("SignUp") : setCurrentForm("Login")
  }

  return (
    <div className=''>
      {form}
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default User;