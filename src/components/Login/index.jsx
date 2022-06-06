import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./style.css";

Login.propTypes = {};

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const check = useRef([])
  const emailRef = useRef()
  const passwordRef = useRef()
  const anhluan = useRef()
  // const luan = ['hoangvanluan@gmail.com','Anhluan123']

  const handleEmail = (e) => {
    const testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!testEmail.test(email)) {
      emailRef.current.style.border = 'red 1px solid'
      const textValid = document.querySelector('.email-valid')
      textValid.style.display = 'block'
    } else {
      emailRef.current.style.border = 'rgb(210, 208, 208) 1px solid'
      const textValid = document.querySelector('.email-valid')
      textValid.style.display = 'none'  
    }
  }
  const handlePassword = (e) => {
    const testPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    if(!testPassword.test(password)) {
      passwordRef.current.style.border = 'red 1px solid'
      const textValid = document.querySelector('.password-valid')
      textValid.style.display = 'block'
    }
    else {
      passwordRef.current.style.border = 'rgb(210, 208, 208) 1px solid'
      const textValid = document.querySelector('.password-valid')
      textValid.style.display = 'none'
    }
  }
  const handleSubmit = () => {
    console.log(anhluan.current.checked)
    if(anhluan.current.checked) {
      check.current=[]
      check.current.push(email,password)
    }
    console.log(check.current)
  }
 
  return (
    <div className="login">
      <div className="login-content">
        <i class="bx bx-fork"></i>
        <br />
        <div className="login-text">YOUR ACCOUNT FOR EVERYTHING NIKE</div>
        <br />
        <input 
        type="text" 
        placeholder="Email address" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        onBlur = {handleEmail}
        ref = {emailRef}
        />
        <p className = "email-valid">Please enter a valid email address</p>
        <br /><br />
        <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)} 
        onBlur = {handlePassword}
        ref = {passwordRef}
        />
        <p  className = "password-valid">Please enter a password</p>
        <br />
        <div className= "login-checkboxAll">
          <div className= "login-checkbox">
            <input 
            type="checkbox" 
            ref = {anhluan}
            />
            <div>Keep me signed in</div>
          </div>
          <div>Forgotten your password?</div>
        </div>
        <div style = {{fontSize: "12px", height: '60px'}}>
          By logging in, you agree to Nike's Privacy Policy and Terms of Use.
        </div>
        <div className = "login-click" onClick={handleSubmit}>SIGN IN</div>
        <div>Not a Member? Join Us.</div>
      </div>
    </div>
  );
}

export default Login;
