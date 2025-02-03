import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";

const JsonFormatter = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const formatJson = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      const formattedJson = JSON.stringify(parsedJson, null, 2);
      setJsonInput(formattedJson);
      setMessage({ type: "success", text: "Valid JSON & formatted successfully!" });
    } catch (error) {
      setMessage({ type: "error", text: "Invalid JSON: " + error.message });
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-2">JSON Formatter & Validator</h2>

      <AceEditor
        mode="json"
        theme="monokai"
        value={jsonInput}
        onChange={setJsonInput}
        name="json_editor"
        fontSize={14}
        width="100%"
        height="500px"
        setOptions={{ useWorker: false, tabSize: 2 }}
      />

      {message.text && (
        <div className={`mt-2 p-2 text-white ${message.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
          {message.text}
        </div>
      )}

      <button
        className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={formatJson}
      >
        Format & Validate JSON
      </button>
    </div>
  );
};

export default JsonFormatter;
