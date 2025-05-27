
import React, { useState } from "react";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../styles/TextUtils.css";

const TextUtils = (props) => {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    if (text !== "") {
      let newText = text.toUpperCase();
      setText(newText);
    } else {
      toast("Enter Text to Convert", { position: "top-center", autoClose: 1500 });
    }
  };

  const handleloClick = () => {
    if (text !== "") {
      let newText = text.toLowerCase();
      setText(newText);
    } else {
      toast("Enter Text to Convert", { position: "top-center", autoClose: 1500, closeOnClick: false });
    }
  };

  const handleClrClick = () => {
    if (text !== "") {
      setText("");
    } else {
      toast("Already cleared", { position: "top-center", autoClose: 1500 });
    }
  };

  const copyToClipboard = () => {
    if (text !== "") {
      copy(text);
      toast("Text copied", { position: "top-center", autoClose: 1500 });
    } else {
      toast("Text is empty", { position: "top-center", autoClose: 1500 });
    }
  };

  const downloadTxtFile = () => {
    if (text !== "") {
      const element = document.createElement("a");
      const file = new Blob([text], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "MyFile.txt";
      document.body.appendChild(element);
      element.click();
      toast("Downloading...", { position: "top-center", autoClose: 1500 });
    } else {
      toast("File is Empty", { position: "top-center", autoClose: 1500 });
    }
  };

  const handleSnackCase=()=>{
    if(text!==""){
      let newText=text.replaceAll(" ","_")
      setText(newText)
    }else {
      toast("Enter Text to Convert Snack Case", { position: "top-center", autoClose: 1500 });
    }
  }
  const handleCapitalizeCase=()=>{
    if(text!==""){

      let newText=text.toLowerCase().split(" ")
      let arr=""
     arr=newText.map((i)=>{


      return (i.charAt(0).toUpperCase()+i.slice(1))
     }
   
    )
      setText(arr.join(" "))
    }else {
      toast("Enter Text to Convert Capitalize Case", { position: "top-center", autoClose: 1500 });
    }
  }
  const HandleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpace = () => {
    if (text !== "") {
      let newText = text.split(/[ ]+/).join(" ");
      setText(newText);
      toast("Extra space removed", { position: "top-center", autoClose: 1500 });
    } else {
      toast("Text is empty", { position: "top-center" });
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "23%" }}>
      <div className="container" style={{ color: 'black' }}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="MyBox"
            onChange={HandleOnChange}
            value={text}
            placeholder="Enter text here"
            rows="9"
            style={{ backgroundColor: '#302f30', color: 'white' }}
          ></textarea>
        </div>
        <button onClick={handleUpClick}>UPPER CASE</button>{" "}
         <button onClick={handleSnackCase}>Snack_Case</button>
       <button onClick={  handleCapitalizeCase}>Capitalize Case</button>
        <button onClick={handleloClick}>lowercase</button>{" "}
        <button onClick={handleClrClick}>Clear</button>{" "}
        <button onClick={copyToClipboard}>Copy</button>{" "}
        <button onClick={downloadTxtFile}>Download</button>{" "}
        <button onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>

      <div className="container" style={{ color: 'black' }}>
        <h1>Summary</h1>
        <p>
          {text.split(" ").filter((elements) => elements.length !== 0).length} words and {text.length} characters
        </p>
        <p>Reading time: {text.split(" ").length * 0.008} minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default TextUtils;
