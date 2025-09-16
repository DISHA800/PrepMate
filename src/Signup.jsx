import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ send verification email
      await sendEmailVerification(user);
      setMessage("Verification email sent! Please check your inbox.");

      // Optionally: don't navigate immediately — wait for verification
      // navigate("/");
    } catch (error) {
      console.error(error.message);
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <h1 className="logo-text">PrepMate</h1>
      <p className="subtitle">Create your account and get started</p>

      <form onSubmit={handleSignup} className="form-box">
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
          Sign Up
        </button>
      </form>

      {message && <p className="subtitle small">{message}</p>}

      <p className="subtitle small">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}
