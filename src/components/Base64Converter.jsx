import React, { useState } from 'react';
import './../styles/Base64.css';

const Base64Converter = () => {
    const [base64String, setBase64String] = useState('');
    const [fileName, setFileName] = useState('');
    const [copySuccess, setCopySuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0]; // Get the first selected file
      if (file) {
        setIsLoading(true);
        setFileName(file.name);
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result.split(',')[1]; // Get Base64 part of the result
          setBase64String(base64String);
          setIsLoading(false);
          setCopySuccess(''); // Reset copy status when new file is uploaded
        };
        reader.readAsDataURL(file); // Read file as data URL (Base64)
      }
    };
  
    const handleCopyToClipboard = () => {
      navigator.clipboard.writeText(base64String).then(
        () => setCopySuccess('Copied!'),
        () => setCopySuccess('Failed to copy!')
      );
    };
  
    return (
      <div className="file-upload-container">
        <h2>Upload any file Convert to Base64</h2>
        <input type="file" onChange={handleFileChange} />
        {fileName && <p><strong>File:</strong> {fileName}</p>}
        {isLoading && (
        <div className="spinner">
          <div className="loader"></div>
          <p>Converting file, please wait...</p>
        </div>
      )}
        {!isLoading&&base64String && (
          <div className="output-container">
            <h3>Base64 Encoded String:</h3>
            <textarea
              value={base64String}
              readOnly
              rows={6}
              style={{ width: '100%' }}
            />
            <button onClick={handleCopyToClipboard} className="copy-button" style={{ background: copySuccess ? 'green' : 'grey' }}>
              Copy to Clipboard
            </button>
            {copySuccess && <p className={`copy-status ${copySuccess === 'Failed to copy!' ? 'failed' : ''}`}>
              {copySuccess}</p>}
          </div>
        )}
      </div>
    );
  };
  
export default Base64Converter;