import React from "react";
import "../styles/Home.css";
import textUtil1 from "../assets/text1.png";
import dummyfile from "../assets/2.png";
import wordCloud from "../assets/3.png";
import qr from "../assets/qr-new.png";
import base64 from "../assets/5.png";
import json from "../assets/json2.png";
import urlShort from "../assets/url.png";
import password2 from "../assets/password2png.png";

const Home = () => {
  const cardData = [
    {
      title: "Text Utils",
      logoImage: textUtil1,
      description:
        "A Text Util provides various text-based operations like formatting, case conversion, and analysis.",
      link: "/text-util",
    },
    {
      title: "Dummy Files",
      logoImage: dummyfile,
      description:
        "A dummy file downloader, download files of specified size and format for testing.",
      link: "/dummy-files",
    },
    {
      title: "Word Cloud",
      logoImage: wordCloud,
      description:
        "A word cloud visually represents text data, emphasizing frequently used words.",
      link: "/word-cloud",
    },
    {
      title: "QR Generator",
      logoImage: qr,
      description:
        "A QR code generator creates scannable QR codes from text, URLs, or data.",
      link: "/QRcode-genrator",
    },
    {
      title: "Base64 Converter",
      logoImage: base64,
      description:
        "A Base64 file converter encodes files into Base64 format for data transfer or storage.",
      link: "/Base64Converter",
    },
    {
      title: "PDF Locker",
      logoImage: "https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg",
      description:
        "A PDF locker encrypts PDF files with a password to secure sensitive information.",
      link: "/pdf-locker",
    },
    {
      title: "URL Shortner",
      logoImage: urlShort,
      description:
        "A URL shortener converts long links into short, shareable URLs for easy access.",
      link: "/url-shortner",
    },
    {
      title: "Pwd Generator",
      logoImage: password2,
      description:
        "A URL shortener converts long links into short, shareable URLs for easy access.",
      link: "/password-generator",
    },
    {
      title: "Json Formatter",
      logoImage: json,
      description:
        "A JSON formatter beautifies and structures JSON data for readability and validation.",
      link: "/Json-formatter",
    },
  
  ];
  return (
    <div>
     
      <div className="container">
        <div className="row">
          {cardData.map((data, index) => {
            return (
              <a
                href={data.link}
                style={{ color: "blue", textDecoration: "none" }}
                className="btn btn-primary"

              >
                <div className="card" key={index}>
                  <h5 style={{ marginLeft: "70px", fontSize:"20px" }}>{data.title}</h5>
                  <img
                    style={{
                      height: "100px",
                      width: "135px",
                      marginLeft: "60px",
                      boxShadow: "10px 10px 20px rgba(243, 234, 234, 0.3)",
                    }}
                    src={data.logoImage}
                    alt="logo"
                  />
                  <p className="">{data.description}</p>
                  <a
                    href={data.link}
                    style={{ color: "blue" }}
                    className="btn btn-primary"
                  >
                  </a>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
