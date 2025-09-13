import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./App.css";

export default function Signup() {
  return (
    <div className="container">
      <main className="main-card">
        <div className="brand">
          <Logo size={56} />
          <h1 className="logo-text">PrepMate</h1>
        </div>

        <p className="subtitle">Create your account</p>

        <form className="form-box" onSubmit={(e) => e.preventDefault()}>
          <input className="input-box" type="text" placeholder="Full name" required />
          <input className="input-box" type="email" placeholder="Email" required />
          <input className="input-box" type="password" placeholder="Password" required />
          <button className="get-started-btn" type="submit">Sign up</button>
        </form>

        <p className="subtitle small">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </main>
    </div>
  );
}
