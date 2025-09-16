import React, { useState } from "react";

export default function Dashboard() {
  const [skills, setSkills] = useState([]);
  const [inputSkill, setInputSkill] = useState("");
  const [interviewType, setInterviewType] = useState("technical");

  const handleAddSkill = () => {
    if (inputSkill && !skills.includes(inputSkill)) {
      setSkills([...skills, inputSkill]);
      setInputSkill("");
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleGenerate = () => {
    alert(
      `Generating questions for: ${skills.join(", ")} | Interview type: ${interviewType}`
    );
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1 className="logo-text">PrepMate</h1>
        <div className="header-actions">
          <button className="outline-btn">Profile</button>
          <button className="outline-btn">Logout</button>
        </div>
      </header>

      {/* Main */}
      <main className="dashboard-main">
        <p className="subtitle">
          Select your skills and interview type to get personalized AI-generated questions.
        </p>

        {/* Skills Input */}
        <div className="skills-section">
          <div className="skills-input">
            <input
              type="text"
              value={inputSkill}
              onChange={(e) => setInputSkill(e.target.value)}
              placeholder="Enter a skill (e.g., React, SQL)"
              className="input-box"
            />
            <button onClick={handleAddSkill} className="get-started-btn">
              Add
            </button>
          </div>

          {/* Display added skills */}
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-chip">
                {skill}
                <button
                  onClick={() => handleRemoveSkill(skill)}
                  className="remove-skill"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Interview Type */}
        <div className="dropdown-section">
          <label className="subtitle small">Select Interview Type:</label>
          <select
            className="input-box"
            value={interviewType}
            onChange={(e) => setInterviewType(e.target.value)}
          >
            <option value="technical">Technical</option>
            <option value="hr">HR</option>
            <option value="behavioral">Behavioral</option>
          </select>
        </div>

        {/* Generate */}
        <div className="dashboard-actions">
          <button className="get-started-btn" onClick={handleGenerate}>
            Generate Questions
          </button>
        </div>
      </main>
    </div>
  );
}
