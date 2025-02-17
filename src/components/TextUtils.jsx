// import React, { useState } from "react";
// import copy from "copy-to-clipboard";
// import { ToastContainer,toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import "../styles/TextUtils.css";
// import Button from "@mui/material/Button";
// import TypographyIcon from "@mui/icons-material/FormatSize"; // For Uppercase
// import TextFieldsIcon from "@mui/icons-material/TextFields"; // For Lowercase
// import ClearIcon from "@mui/icons-material/Clear";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import BackspaceIcon from "@mui/icons-material/Backspace";
// import { display } from "@mui/system";

// const TextUtils =(props)=> 
// {
//  const [text, setText] = useState('');

//   const handleUpClick = () => {
//     if (document.getElementById("MyBox").value !== "") {
      
//     // console.log("Upper case cliked" + text);
//     //setText("You clicked on Button");
//     let newText = text.toUpperCase();
//     setText(newText);
    
//     }
//     else{
      
//       toast("Enter Text to Convert",{position:"top-center",autoClose:1500});
      
//     }
//   };
//   const handleloClick = () => {
//     if (document.getElementById("MyBox").value !== "") {
//       let newText = text.toLowerCase();
//       setText(newText);
//     }
//    else{
//     toast("Enter Text to Convert",{position:"top-center",autoClose:1500,closeOnClick:false})
//    }
//   };
//   const handleClrClick = () => {
//     if (document.getElementById("MyBox").value !== ""){
//       let newText = "";
//     setText(newText);
//     }
    
//     else{
//       toast("Allready cleared",{position:"top-center",autoClose:1500})
//     }
//   };
//   const copyToClipboard = () => {
//     if (document.getElementById("MyBox").value !== ""){
//       copy(text)
//       toast(`You have copy `,{position:"top-center",autoClose:1500});
//     }
//     else{
//       toast('Text is empty',{position:"top-center",autoClose:1500});
//     }
// //console.log( copy("Ankit Yourwehrfvhgse"));
   
//   };
//   const downloadTxtFile = () => {
//     const element = document.createElement("a");
//     if (document.getElementById("MyBox").value !== "") {
//       const file = new Blob([document.getElementById("MyBox").value], {type: "text/plain",});
//       element.href = URL.createObjectURL(file);
//       element.download = "MyFile.txt";
//       document.body.appendChild(element);
//       element.click()
//       toast("Downloading...",{position:"top-center",autoClose:1500})
//     } else {
//       toast("File is Empty",{position:"top-center",autoClose:1500});
//     }
//   };
//   const HandleOnChange = (event) => {
//     // console.log("on change");
//     setText(event.target.value);
//   };
//   const handleExtraSpace = () => {
//     if (document.getElementById("MyBox").value !== ""){
//       let newText = text.split(/[ ]+/);
//       setText(newText.join(" "));
//       toast("Extra space removed",{position:"top-center",autoClose:1500})
//     }
//     else{
//       toast("Text is empty",{position:"top-center",})
//     }
    
//   };
//   return (
//     < div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginLeft:"23%"}  }>
//       {/* </><div className="container" style={{color:props.mode==='dark'?'white':'black'}}> */}
//       <div className="container" style={{color:'black' }}>
//         <h1>{props.heading} </h1>
//         <div className="mb-3">
//           <textarea
//             className="form-control"
//             id="MyBox"
//             onChange={HandleOnChange}
//             value={text}
//             placeholder="Enter text here"
//             rows="9"
//             // style={{backgroundColor:props.mode==='dark'?'#302f30':'white',color:props.mode==='dark'?'white':'black'}}
//             style={{backgroundColor:'#302f30',color:'white'}}
//           ></textarea>
//         </div>
//         {/* <Button className="btn btn-primary" onClick={handleUpClick}>
//           Convert to uppercase
//         </Button> */}
//          <Button
//           variant="contained"
//           startIcon={<TypographyIcon />}
//           onClick={handleUpClick}
//           color="primary"
//         >
          
//         </Button>
        
//         {"    "}
//         <Button
//           variant="contained"
//           startIcon={<TextFieldsIcon />}
//           onClick={handleloClick}
//           color="primary"
//         >
          
//         </Button>
//         {/* <Button className="btn btn-primary" onClick={handleloClick}>
//           Convert to Lowercase
//         </Button> */}
//         {"    "}
//         <Button  variant="contained"startIcon={< ClearIcon/>} className="btn btn-primary" onClick={handleClrClick}>
          
//         </Button>
//         {"    "}
//         <Button  variant="contained" startIcon={<  ContentCopyIcon/>} onClick={copyToClipboard}>
         
//         </Button>
//         {"    "}
//         <Button className="btn btn-primary"  variant="contained" startIcon={<  FileDownloadIcon/>}onClick={downloadTxtFile}>
         
//         </Button>
//         {"    "}
//         <Button className="btn btn-primary"   variant="contained" startIcon={<  BackspaceIcon/>} onClick={handleExtraSpace}>
         
//         </Button>
//       </div>

//       <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
//         <h1> Summary </h1>
//         <p1>
//           {" "}
//           {text.split(" ").filter((elements)=>{return elements.length!==0}).length} word and character {text.length}{" "}
//         </p1>
//         <br></br>
//         <p1> Reading time :- {text.split(" ").length * 0.008} minutes </p1>
//         <h2>Preview</h2>
//         <p>{text.length>0?text:"Enter something to preview here"}</p>
//         <ToastContainer/>
//       </div>
      
//     </div>
//   );
// }

// export default TextUtils;



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
        <button onClick={handleUpClick}>Uppercase</button>{" "}
        <button onClick={handleloClick}>Lowercase</button>{" "}
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
