import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import TextUtils from "./components/TextUtils";
import DummyFiles from "./components/DummyFils.jsx";
import "./styles/App.css";
import WordCloud1 from "./components/WordCloud1.jsx";
import QRCodeNew from "../src/components/QRcodeNew.jsx";
import Base64Converter from "../src/components/Base64Converter.jsx";
import JsonFormater from "../src/components/JsonFormatter.jsx";
import Home from "./components/Home.jsx";
import URLShortner from "./components/URLShortner.jsx";
import PasswordGenerator from "./components/PasswordGenerator";
import PDFLock from "./components/PDFLockComponent";
import ChatBot from "./components/ChatBot.jsx";


const App = () => { 
    console.log(process.env.REACT_APP_KEY);
    
    return (
        <>
        <Router>
        <div>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/text-util" element={<TextUtils />} />
                <Route exact path="/dummy-files" element={<DummyFiles />} />
                <Route exact path="/word-cloud" element={<WordCloud1 />} />
                <Route exact path="/QRcode-genrator" element={<QRCodeNew/>} />
                <Route exact path="/Base64Converter" element={<Base64Converter />} />
                <Route exact path="/Json-formatter" element={<JsonFormater />} />
                <Route exact path="/url-shortner" element={<URLShortner />} />
                <Route exact path="/password-generator" element={<PasswordGenerator/>} />
                <Route exact path="/pdf-locker" element={<PDFLock/>} />
            </Routes>
        </div>
        </Router>
     {/* <div className="flex items-center justify-center min-h-screen bg-gray-100"> <ChatBot/></div> */}
       
        </>
    );
    }

export default App;
