import React from 'react';
import rbcSignin from './rbc-signin.jpg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="loginArea container" style={{ 
      backgroundImage: `url(${rbcSignin})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      padding: '10px' 
    }}>
      <div className='loginBody col-md-4' style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px' }}>
        <h2>Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <Link className="nav-link" to="/dashboard">
            <button 
              type="submit" 
              className="loginbutton btn btn-primary"
              style={{
                backgroundColor: '#007bff', 
                borderColor: '#007bff', 
                color: '#fff', 
                padding: '10px 20px', 
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
