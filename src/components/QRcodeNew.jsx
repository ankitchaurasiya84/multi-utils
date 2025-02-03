import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";

const QRcodeNew = () => {
  const [inputText, setInputText] = useState(""); // Track input value
  const [qr, setQr] = useState(""); // Track generated QR code value
  const qrRef = useRef(null); // Ref to the QR code element

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setQr(inputText); 
  };

  const handleDownload = () => {
    if (qrRef.current) {
      
      toPng(qrRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "qr-code.png"; // File name for download
          link.href = dataUrl; // Set the href to the data URL of the image
          link.click(); // Trigger the download
        })
        .catch((error) => {
          console.error("Error downloading QR code:", error);
        });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Enter text to generate QR Code"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)} 
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "10px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Generate QR Code
        </button>
      </form>

      {qr.trim() !== "" ? (
        <div style={{ marginTop: "20px" }}>
          <div ref={qrRef}>
            <QRCode value={qr} size={200} />
          </div>
          <button
            onClick={handleDownload}
            style={{
              marginTop: "10px",
              padding: "10px",
              background: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Download QR Code
          </button>
        </div>
      ) : (
        <p>Enter text to generate QR Code</p>
      )}
    </div>
  );
};

export default QRcodeNew;