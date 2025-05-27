import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const users = [
  { email: "admin@example.com", password: "admin123", role: "admin" },
  { email: "broker@example.com", password: "broker123", role: "broker" },
  { email: "user@example.com", password: "user123", role: "user" },
];

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {localStorage.getItem('loggedIn') === 'true' && navigate('/dashboard')},[]);
   localStorage.removeItem('users');
  // { username: 'admin1@gamil.com', password: 'admin123', roles: ['admin', 'broker'] },
  // { username: 'user1@gamil.com', password: 'user123', roles: ['user'] }
  // ])); 

  const handleSubmit = (e) => {
    e.preventDefault();
    //const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

      if (user) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('loggedInUser', JSON.stringify(user)); // Store logged-in user
      setError('');
      navigate(localStorage.getItem('loggedIn')?'/dashboard':'/login');
    } else {
      setError('Email and password must match.');
      console.log(error);
    }
    // Fake login: set localStorage and redirect
    // if(email === password) {
    //  localStorage.setItem('loggedIn', 'true');
    //  setError('');
     
    // } else {
      
    // }
    
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">Email</label>
          <input
            type="email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="login-label">Password</label>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
