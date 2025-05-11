import '../styles/PDFLockComponent.css';
import React, { useState } from 'react';
import { saveAs } from 'file-saver';


const PDFLockComponent = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please select a valid PDF file.");
      setPdfFile(null);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const lockPDF = async () => {
    if (!pdfFile || !password) {
      alert("Please select a PDF file and enter a password.");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("pdf", pdfFile);
      formData.append("password", password);

      const response = await fetch("http://localhost:5001/lock-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to lock PDF.");
      }

      const blob = await response.blob();
      saveAs(blob, "locked.pdf");
      alert("PDF locked successfully!");
    } catch (error) {
      console.error("Error locking PDF:", error);
      alert("Failed to lock PDF. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='dibba'>
    <div className="pdf-lock-container">
      <h2>🔒 Secure Your PDF</h2>
      <label className="file-label">
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
        📄 Choose PDF File
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={handlePasswordChange}
        className="password-input"
      />
       <input
        type="password"
        placeholder="ReEnter Password"
        value={password}
        onChange={handlePasswordChange}
        className="password-input"
      />
      <button onClick={lockPDF} className="lock-button" disabled={loading}>
        {loading ? "Locking..." : "🔐 Lock PDF"}
      </button>
    </div>
    </div>
  );
};

export default PDFLockComponent;

