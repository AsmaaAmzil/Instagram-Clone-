import React ,{useState} from 'react';
import "./Authentification.css";
import Login from './Login';
import Signup from './Signup';


function Authentification() {
  const [active,setActive]=useState("login");
  const handleClick=()=>setActive(active==='login'? 'signup':'login');
  return (
    <div className='authentification'>
      <div className="auth__left">
        <img src="https://i.imgur.com/P3Vm1Kq.png" alt="instgram screen shots" />
      </div>
      <div className="auth__right">
        {active==='login'? <Login/>:<Signup/>}
        <div className="auth__more">
          {
            active==='login'?<span> Don't have an account <button onClick={handleClick}>Sign up</button></span>:<span> Have an account <button onClick={handleClick}>Log in </button></span>
          }
        
      </div>
      </div>
     
      
    </div>
  )
}

export default Authentification
