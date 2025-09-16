import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        setMessage("Login successful!");
        navigate("/"); // redirect to homepage
      } else {
        setMessage("Please verify your email before logging in.");
      }
    } catch (error) {
      console.error(error.message);
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <h1 className="logo-text">PrepMate</h1>
      <p className="subtitle">Login to continue</p>

      <form onSubmit={handleLogin} className="form-box">
        <input
          className="input-box"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input-box"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="get-started-btn" type="submit">
          Login
        </button>
      </form>

      {message && <p className="subtitle small">{message}</p>}

      <p className="subtitle small">
        New user? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
}
