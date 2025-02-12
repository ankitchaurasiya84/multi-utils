import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let allChars = "";
    if (includeUppercase) allChars += upperChars;
    if (includeLowercase) allChars += lowerChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;
    if (!allChars) {
        alert('Please select at least one option.');
        return;
    }

    let generatedPassword = "";
    for( let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        generatedPassword += allChars[randomIndex];
    }
    setPassword(generatedPassword);
  };

 return (
  <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px", maxWidth: "400px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }} className="file-upload-container">
    <h2 style={{ textAlign: "center", marginBottom: "10px" }}>🔑 Password Generator</h2>

    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <label>Password Length:</label>
      <input
        type="number"
        value={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
        style={{ width: "60px", padding: "5px", textAlign: "center", border: "1px solid #ccc", borderRadius: "4px" }}
      />
    </div>

    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <label>Include Uppercase Letters:</label>
      <input
        type="checkbox"
        checked={includeUppercase}
        onChange={(e) => setIncludeUppercase(e.target.checked)}
      />
    </div>

    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <label>Include Lowercase Letters:</label>
      <input
        type="checkbox"
        checked={includeLowercase}
        onChange={(e) => setIncludeLowercase(e.target.checked)}
      />
    </div>

    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <label>Include Special Characters:</label>
      <input
        type="checkbox"
        checked={includeSymbols}
        onChange={(e) => setIncludeSymbols(e.target.checked)}
      />
    </div>

    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <label>Include Numbers:</label>
      <input
        type="checkbox"
        checked={includeNumbers}
        onChange={(e) => setIncludeNumbers(e.target.checked)}
      />
    </div>

    <button onClick={generatePassword} style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>
      Generate Password
    </button>

    {password && (
      <div style={{ marginTop: "10px", padding: "10px", backgroundColor: "#f8f9fa", borderRadius: "4px", textAlign: "center", fontSize: "16px", fontWeight: "bold" }}>
        {password}
      </div>
    )}
  </div>
);

};

export default PasswordGenerator;
