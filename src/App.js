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


const App = () => { 
    return (
        <Router>
        <div>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/text-util" element={<TextUtils />} />
                <Route exact path="/dummy-files" element={<DummyFiles />} />
                <Route exact path="/word-cloud" element={<WordCloud1 />} />
                <Route exact path="/QRcode-genrator" element={<QRCodeNew />} />
                <Route exact path="/Base64Converter" element={<Base64Converter />} />
                <Route exact path="/Json-formatter" element={<JsonFormater />} />
            </Routes>
        </div>
        </Router>
    );
    }

export default App;
