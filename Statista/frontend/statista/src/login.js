import React , {useState} from 'react';
import { Link , useHistory} from 'react-router-dom';
import axios from 'axios';
import './login.css';
import './ForgotPassword'

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const nav = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post('http://localhost:5000/login', { name, password })
      .then(response => {
        console.log(response);
        if (response.data) { 
          sessionStorage.setItem('uid',response.data);
          sessionStorage.setItem('name', name)
          alert('Welcome ' + name);
          nav.push('./dashboard');
        } else {
          
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch(error => {
        console.error(error);
        
        alert('An error occurred during login. Please try again later.');
      });

        
        
      }
    return (
      <div className='im'>
      <div>
       
        <link href="https://cdn.jsdelivr.net/npm
/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="website icon" type="png" href="./assets/img/Untold Coding.png" />
        <link rel="stylesheet" href="assets/css/styles.css" />
        <title>login form - untoldcoding</title>
        <div className="login">
          <div className="button">
          <form action className="form">
            <h1 className="head">Login</h1>
            <div className="content">
              <div className="box">
                <i className="ri-user-3-line 
login__icon" />
                <div className="box-input">
                  <input type="name" required id ='name' className="input"  placeholder=" " 
                  onChange={(e)=>setName(e.target.value)}
                  />
                  <label htmlFor="login-email" className="login__label">Name</label>
                </div>
              </div>
              <div className="box">
                <i className="ri-lock-2-line 
login__icon" />
                <div className="box-input">
                  <input type="password" id ='password' required className="input" placeholder=" " 
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                  <label htmlFor="login-pass" className="login__label">Password</label>
                  <i className="ri-eye-off-line 
login__eye" id="login-eye" />
                </div>
              </div>
            </div>
            <div className="tick">
              <div className="tick-group">
                <input type="checkbox" className="tick-input" id="login-check" />
                <label htmlFor="login-check" className="tick-label">Remember me</label>
              </div>
              <div className='forgot'>
              <p className='forgot'><Link to='/ForgotPassword'>Forgot Password?</Link></p>
              </div>
                
            </div>
            
            <center><button type="submit" className="button" onClick={handleSubmit}>  Login
                            </button> </center>              
           <h1> </h1>
           <h1> </h1>
           <h1>  </h1>
           <h1 > </h1>
                            <br></br> 
                            <p className="register">Don't have an account? 
                            <Link to='/signup'>Register</Link></p>
          </form>
          </div>
        </div>
      </div>
      </div>
      
    );
  }
;
export default  Login;