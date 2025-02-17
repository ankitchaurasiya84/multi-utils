import React, { useState } from "react";
import axios from "axios";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const URLShortner = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [copySuccess, setCopySuccess] = useState('');

  const BITLY_API_TOKEN = process.env.REACT_APP_KEY
  
  const shortenUrl = async () => {
    if (!longUrl) {
      setError("Please enter a URL.");
      return;
    }
    try {
      const response = await axios.post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          domain: "bit.ly",
          long_url: longUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${BITLY_API_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      setShortUrl(response.data.link);
      setError("");
    } catch (error) {
      setError("Failed to shorten URL. Please try again.");
      console.error(error);
    }

    
  };
  const copyToClipboard = () => {
    if (shortUrl !== "") {
      copy(shortUrl);
     setCopySuccess('Copied!')
  
    } else {
      setCopySuccess('Failed to copy!')
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }} className="file-upload-container">
      <h1>URL Shortner</h1>
      <input
        type="text"
        placeholder="Enter a long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={{
          width: "320px",
          borderRadius: "5px",
          padding: "10px",
          marginRight: "10px",
        }}
      />
      <div>
        <button
          onClick={shortenUrl}
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            padding: "10px",
            background: "grey",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Shorten URL
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          {shortUrl && (
            <div style={{ marginLeft: "33%" , backgroundColor: "lightgray", padding: "10px", borderRadius: "5px" , width:"30%"}}>
            <a
              href={shortUrl}
              style={{ border: "3px", color: "green" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {shortUrl}
            </a>
          
            </div>
          )}
          {shortUrl && (
            <button
              onClick={copyToClipboard}
              style={{
                marginTop: "10px",
                padding: "10px",
                background: "grey",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
               Copy to Clipboard 📋
            </button>
          )}
          {copySuccess && <p style={{color:"green"}} >
              {copySuccess}</p>}
            
        </div>
      </div>
    </div>
  );
};

export default URLShortner;

