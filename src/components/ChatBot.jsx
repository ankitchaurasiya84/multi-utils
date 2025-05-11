import { useState } from "react";

function Chatbot() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;

    const res = await fetch("http://localhost:5001/search-faq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: query })
    });

    const data = await res.json();
    setResponse(data.answer);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>FAQ Chatbot</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask a question..."
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button onClick={handleSearch} style={{ width: "100%", padding: "10px" }}>
        Search
      </button>
      {response && <p style={{ marginTop: "10px", fontWeight: "bold" }}>{response}</p>}
    </div>
  );
}

export default Chatbot;
