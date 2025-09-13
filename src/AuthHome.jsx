import React from "react";
import { Link } from "react-router-dom";

export default function AuthHome() {
  return (
    <div className="container">
      {/* No div wrapper for heading/logo */}
      <h1 className="logo-text">PrepMate</h1>
      <p className="subtitle">
        Let’s start your journey to growth and career success!
      </p>

      {/* ✅ div only for buttons (needed for flex layout) */}
      <div className="auth-actions">
        <Link to="/login" className="outline-btn">Login</Link>
        <Link to="/signup" className="get-started-btn">Sign Up</Link>
      </div>
    </div>
  );
}

