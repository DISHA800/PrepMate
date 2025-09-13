import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import "./App.css";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <main className="main-card">
        <div className="brand">
          <Logo size={72} />
          <h1 className="logo-text">PrepMate</h1>
        </div>

        <p className="subtitle">Your personal AI guide for interviews</p>

        <div className="cta-row">
          <button className="get-started-btn" onClick={() => navigate("/auth")}>
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
