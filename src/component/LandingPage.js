// components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LandingPage.css';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to our Website!</h1>
      <div>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    </div>
  );
}

export default LandingPage;
