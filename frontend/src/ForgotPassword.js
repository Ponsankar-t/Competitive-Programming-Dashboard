import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const nav = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/forgot-password', { email });
      setSuccessMessage('An email with password reset instructions has been sent to your inbox.');
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='im'>
      <div className="login">
        <div className="button">
          <form action="" className="form">
            <h1 className="head">Forgot Password</h1>
            <div className="content">
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              {successMessage && <p className="success-message">{successMessage}</p>}
              <div className="box">
                <i className="ri-mail-line login__icon" />
                <div className="box-input">
                  <input
                    type="email"
                    required
                    id="email"
                    className="input"
                    placeholder=" "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="forgot-email" className="login__label">
                    Email
                  </label>
                </div>
              </div>
              <center>
                <button type="submit" className="button" onClick={handleSubmit}>
                  Submit
                </button>
              </center>
              <br />
              <p className="register">
                Back to Login? <Link to='/'>Login Here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
