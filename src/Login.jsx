import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./App.css";

export default function Login() {
  return (
    <div className="container">
      <main className="main-card">
        <div className="brand">
          <Logo size={56} />
          <h1 className="logo-text">PrepMate</h1>
        </div>

        <p className="subtitle">Please sign in to your account</p>

        <form className="form-box" onSubmit={(e) => e.preventDefault()}>
          <input className="input-box" type="email" placeholder="Email" required />
          <input className="input-box" type="password" placeholder="Password" required />
          <button className="get-started-btn" type="submit">Login</button>
        </form>

        <p className="subtitle small">
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </main>
    </div>
  );
}
