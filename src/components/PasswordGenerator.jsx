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
    <div style={{ display: "flex", flexDirection: "column" }}>
      PasswordGenerator
      <input
        type="checkbox"
        checked={includeUppercase}
        onChange={(e) => setIncludeUppercase(e.target.checked)}
      />
      <label>Upper case</label>
      <input
        type="checkbox"
        checked={includeLowercase}
        onChange={(e) => setIncludeLowercase(e.target.checked)}
      />
      <label>Lower case</label>
      <input
        type="checkbox"
        checked={includeSymbols}
        onChange={(e) => setIncludeSymbols(e.target.checked)}
      />
      <label>Special Char</label>
      <input
        type="checkbox"
        checked={includeNumbers}
        onChange={(e) => setIncludeNumbers(e.target.checked)}
      />
      <label>Included number</label>
      <input type="number" style={{ width: "90px" }} />
      <lable>Length</lable>
        <button onClick={generatePassword} style={{width:"120px"}}> Generate Password</button>
    </div>
  );
};

export default PasswordGenerator;
