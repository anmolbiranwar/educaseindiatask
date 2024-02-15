import React, { useState } from 'react';
import "../CSS/LandingPage.css"
import { Link } from 'react-router-dom';

const LoginPage = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSubmit = (event) => {
    event.preventDefault(); 
   
    const formData = {
      email: email,
      password: password
    };
    console.log(formData); 
  };

  return (
    <>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className='container m-2'>
            <div className='content border'>
              <h3>Sign in to your <br/> PopX account</h3>
              <p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit.</p>
              <form onSubmit={handleSubmit}> 
                <fieldset>
                  <legend>Email Address</legend>
                 
                  <input type="email" id="email" name="email" placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                </fieldset>
                <fieldset>
                  <legend>Password</legend>
                
                  <input type="password" id='password' name='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </fieldset>
                <Link to="/profile" type="submit" className="btn btn-secondary d-block mt-3">Login</Link> 
              </form>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}

export default LoginPage;
