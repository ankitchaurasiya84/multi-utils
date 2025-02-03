import React, { useState } from 'react';
import WordCloud from 'react-wordcloud';
import html2canvas from 'html2canvas';
import '../styles/WordCloud1.css';

const WordCloud1 = () => {
  const [fontSize, setFontSize] = useState(70);
 
  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
    fontSizes: [15, `${fontSize}`], 
  };
  const [text, setText] = useState('');
  const [words, setWords] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleOnChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    const wordArray = inputText.split(/\s+/).filter(word => word);
    const wordCount = wordArray.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});

    const wordList = Object.keys(wordCount).map(word => ({
      text: word,
      value: wordCount[word],
    }));
    setWords(wordList);
  };
  const rotate = word => word.value % 360;

  const downloadImage = () => {
    setIsDownloading(true);
    const wordCloudElement = document.getElementById('word-cloud-container');
    html2canvas(wordCloudElement).then(canvas => {
      const link = document.createElement('a');
      link.download = 'wordcloud.png';
      link.href = canvas.toDataURL();
      link.click();
      setIsDownloading(false);
    });
  };

  return (
    <div className="form-group">
      <div >
        <h1>Word Cloud Image Generator</h1>
        <textarea
          style={{
            borderRadius: "5px",
            fontSize: "16px",
            minHeight: "150px",
          }}
          className="form-control"
          id="MyBox"
          onChange={handleOnChange}
          value={text}
          placeholder="Enter text here"
          rows="9"
        ></textarea>
      </div>

      {words.length > 0 ? (
        <div id="word-cloud-container" style={{ width: "100%", maxWidth: "600px", height: 400 }}>
          <WordCloud
            options={options}
            words={words}
            rotate={rotate}
            width={600}
            height={400}
          />
        </div>
      ) : (
        <p>Enter text to generate a Word Cloud.</p>
      )}

      {words.length > 0 && (
        <button
          onClick={downloadImage}
          disabled={isDownloading}
         style={{marginTop: "10px",
            padding: "10px",
            background: "#0398fc",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",}}
        >
          {isDownloading ? "Downloading..." : "Download as PNG"}
        </button>
        
      )}
      <div  >
       {words.length > 0 && (
        <button
          onClick={() => setFontSize(fontSize -10)}
          disabled={isDownloading}
          style={{marginTop: "10px",
            padding: "10px",
            background: "#0398fc",
            color: "white",
            border: "none",
            marginLeft: "10px",
            borderRadius: "5px",
            cursor: "pointer",}}
        >
          {isDownloading ? "Downloading..." : "Font Size -"}
        </button>
        
      )}
        

       {words.length > 0 && (
        <button 
          onClick={() => setFontSize(fontSize +10)}
          disabled={isDownloading}
          style={{marginTop: "10px",
            padding: "10px",
            background: "#0398fc",
            color: "white",
            border: "none",
            marginLeft: "10px",
            borderRadius: "5px",
            cursor: "pointer",}}
        >
          {isDownloading ? "Downloading..." : "Font Size +"}
        </button>
        
      )}
       </div>
    </div>
  );
};

export default WordCloud1;



