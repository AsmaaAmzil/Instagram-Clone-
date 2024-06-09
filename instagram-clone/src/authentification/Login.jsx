import React ,{ useState}  from 'react';
import "./Login.css";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'




function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  function handleLogin(){
    signInWithEmailAndPassword(auth,email,password);
  }
 
  return (
    <div className='login'>
      <img className="navigation__logo" src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="ist" />
      <input onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder='Email'/>
      <input  onChange={(e)=>setPassword(e.target.value)} type="password"  placeholder='Password'/>
      <button onClick={handleLogin}>Log in</button> 
    </div>
  )
}

export default Login
