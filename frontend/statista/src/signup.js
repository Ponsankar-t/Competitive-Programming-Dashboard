import React,{useState} from "react";
import axios from 'axios';
import './signup.css';
const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [IId, setIId] = useState('');
  const [YTd, setYTd] = useState('');
  const [LCd, setLCd] = useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/users', { name, email, password,IId,YTd,LCd})
      .then(result => {
         console.log(result);
         sessionStorage.setItem('username', LCd)
         window.location.href = '/';
         alert('welcome ' + name)
      
        
      })
      .catch(err => console.log(err));
  };
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Signup</title>
          <link rel="stylesheet" href="style.css" />
          <div className="login-light" />
          <div className="login-box">
            <form action="#">
              <input type="checkbox" className="input-check" id="input-check" />
              <label htmlFor="input-check" className="toggle">
                <span className="text off">off</span>
                <span className="text on">on</span>
              </label>
              <div className="light" />
              <h2>Sign Up</h2>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail" />
                </span>
                <input type="name"
                id = "name"
                onChange={(e)=>setName(e.target.value)}
                required />
                <label>Username</label>
                <div className="input-line" />
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed" />
                </span>
                <input type="email" 
                id ="email"
                onChange={(e)=>setEmail(e.target.value)}
                required />
                <label>Email</label>
                <div className="input-line" />
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed" />
                </span>
                <input type="password" 
                id ="password"
                onChange={(e)=>setPassword(e.target.value)}
                required />
                <label>Password</label>
                <div className="input-line" />
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail" />
                </span>
              <input type="Insta_user"
                id = "IId"
                onChange={(e)=>setIId(e.target.value)}
                required />
                <label>codechef-Id</label>
                <div className="input-line" />
              </div>
              {/* <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail" />
                </span>
                <input type="Youtube_id"
                id = "YTd"
                onChange={(e)=>setYTd(e.target.value)}
                required />
                <label>Youtube_id</label>
                <div className="input-line" />
              </div> */}
                <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed" />
                </span>
               
                <input type="leetcode_id"
                id = "LCd"
                onChange={(e)=>setLCd(e.target.value)}
                required />
                <label>Leetcode-Id</label>
                
                <div className="input-line" />
              </div>
                <div className="input-line" />
                <div className="input-line" />
                <div className="input-line" />
             <center> <button type="submit" onClick={handleSubmit}>Signin</button></center>
              <div className="register-link">
                
              </div>
            </form>
          </div>
        </div>
      );
    }
  ;
  export default SignupForm;