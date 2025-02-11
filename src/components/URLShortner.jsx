import React, { useState } from "react";
import axios from "axios";

const URLShortner = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const BITLY_API_TOKEN = ""

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
          style={{ margin: "10px", height: "30px", borderRadius: "4px" }}
        >
          Shorten URL
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          {shortUrl && (
            <a
              href={shortUrl}
              style={{ border: "3px", color: "green", background: "yellow" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {shortUrl}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default URLShortner;

