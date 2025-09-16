import React, { useState } from "react";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { getAuthErrorMessage } from "./authErrors";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (!userCredential.user.emailVerified) {
        setMessage("Please verify your email before logging in.");
        setSuccess(false);
        return;
      }
      setSuccess(true);
      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      setSuccess(false);
      setMessage(getAuthErrorMessage(error.code));
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setSuccess(true);
      setMessage("Google login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      setSuccess(false);
      setMessage(getAuthErrorMessage(error.code));
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

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

      <button
        type="button"
        className="get-started-btn"
        onClick={handleGoogleLogin}
        style={{ marginTop: "10px", backgroundColor: "#fff", color: "#000" }}
      >
        Login with Google
      </button>

      {message && (
        <p className="subtitle" style={{ color: success ? "green" : "red" }}>
          {message}
        </p>
      )}

      <p className="subtitle small">
        New user? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
}
