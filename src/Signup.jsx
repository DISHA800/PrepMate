import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Link } from "react-router-dom";
import { getAuthErrorMessage } from "./authErrors";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await sendEmailVerification(userCredential.user);
      setSuccess(true);
      setMessage("Verification email sent. Please check your inbox.");

      setTimeout(() => {
        navigate("/login");
      }, 3000);

    } catch (error) {
      setSuccess(false);
      setMessage(getAuthErrorMessage(error.code));
    }
  };

  // ✅ Check if the user is verified
  const checkVerification = async () => {
    await auth.currentUser.reload(); // refresh user state
    if (auth.currentUser.emailVerified) {
      setMessage("Email verified! Now you can login.");
    } else {
      setMessage("Email not verified yet. Please check your inbox.");
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>

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

      {message && <p className="subtitle">{message}</p>}

      {/* ✅ Button to check verification status */}
      <button onClick={checkVerification} className="outline-btn" style={{ marginTop: "10px" }}>
        Check Verification
      </button>

      {/* ✅ Link to login page if verified */}
      <p className="subtitle small">
        Already verified? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}
