import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', { email, password });
      if (response.data.success) {
        // Redirect based on user role
        if (response.data.role === 'admin') {
          navigate('/admin/dashboard'); // Change to admin dashboard route
        } else {
          navigate('/user/dashboard'); // Change to user dashboard route
        }
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed, please check your credentials.');
    }
  };

  return (
    <div className="container bg-grey">
      <h2>Login</h2>

      <div className="row ">
        {/* Admin Login Section */}
        <div className="col-md-6 ">
          <h3>Admin Login</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Admin Login</button>
          </form>
        </div>

        {/* User Login Section */}
        <div className="col-md-6 ">
          <h3>User Login</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">User Login</button>
          </form>
        </div>
      </div>
      
      <p className='text-dark mt-5'>
        Don't have an account? <a href="/register">Create Account</a>
      </p>
    </div>
  );
};

export default Login;
