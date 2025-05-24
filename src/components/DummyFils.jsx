import React from "react";
import { faker } from "@faker-js/faker";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import JSZip from "jszip";
import * as XLSX from "xlsx";
import PPTXGenJS from "pptxgenjs";
import csv from "../assets/7.png";
import xl from "../assets/9.png";
import ppt from "../assets/19.png";
import zip from "../assets/zip.png";
import  png from "../assets/png.png";
import  md from "../assets/md5.png";
import  xml from "../assets/xml.png";
import  json from "../assets/6.png";

const DummyFiles = () => {
  const createDummyFile = (filename, content, type) => {
    const blob = new Blob([content], { type });
    saveAs(blob, filename);
  };

  const createDummyTextFile = () => createDummyFile("dummy.txt", faker.lorem.paragraphs(5), "text/plain;charset=utf-8");

  const createDummyJSON = () =>
    createDummyFile(
      "dummy.json",
      JSON.stringify({ name: faker.person.fullName(), email: faker.internet.email(), phone: faker.phone.number() }, null, 2),
      "application/json"
    );

  const createDummyCSV = () =>
    createDummyFile(
      "dummy.csv",
      `Name,Email,Phone\n${faker.person.fullName()},${faker.internet.email()},${faker.phone.number()}`,
      "text/csv;charset=utf-8;"
    );

  const createDummyPDF = () => {
    const doc = new jsPDF();
    doc.text(faker.lorem.paragraphs(3), 10, 10);
    doc.save("dummy.pdf");
  };

  const createDummyZip = async () => {
    const zip = new JSZip();
    zip.file("dummy.txt", "This is some dummy text.");
    zip.file("dummy.json", JSON.stringify({ message: "Hello, World!" }, null, 2));
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "dummy.zip");
  };

  const createDummyXlsx = () => {
    const worksheet = XLSX.utils.aoa_to_sheet([
      ["Name", "Email", "Phone"],
      [faker.person.fullName(), faker.internet.email(), faker.phone.number()],
    ]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    const blob = new Blob([s2ab(wbout)], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, "dummy.xlsx");
  };

  const createDummyPptx = () => {
    const pptx = new PPTXGenJS();
    const slide = pptx.addSlide();
    slide.addText("Dummy PPTX Presentation", { x: 1, y: 1, fontSize: 24 });
    pptx.writeFile("dummy.pptx");
  };

  const createDummyXML = () =>
    createDummyFile(
      "dummy.xml",
      `<note>
        <to>${faker.person.fullName()}</to>
        <from>${faker.person.fullName()}</from>
        <heading>Reminder</heading>
        <body>${faker.lorem.sentence()}</body>
      </note>`,
      "application/xml"
    );

  const createDummyMarkdown = () =>
    createDummyFile(
      "dummy.md",
      `# ${faker.lorem.words(3)}\n\n${faker.lorem.paragraphs(2)}`,
      "text/markdown;charset=utf-8"
    );

  const createDummyImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 200;
    canvas.height = 200;
    ctx.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => saveAs(blob, "dummy.png"), "image/png");
  };

  const createDummyJS = () =>
    createDummyFile(
      "dummy.js",
      `// Sample JavaScript File
const message = "Hello, World!";
console.log(message);`,
      "application/javascript;charset=utf-8"
    );

  const createDummyJSON2 = () =>
    createDummyFile(
      "dummy2.json",
      JSON.stringify({ message: "This is another JSON file", data: { id: 1, value: "example" } }, null, 2),
      "application/json"
    );

  const files = [
    { id: 1, logo: "https://cdn-icons-png.flaticon.com/512/2656/2656402.png", description: "Sample Text File", downloadFunction: createDummyTextFile },
    { id: 2, logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg", description: "Example PDF File", downloadFunction: createDummyPDF },
    { id: 3, logo: csv, description: "CSV Data File", downloadFunction: createDummyCSV },
    { id: 4, logo: ppt, description: "Presentation Slide", downloadFunction: createDummyPptx },
    { id: 5, logo: xl, description: "Excel File", downloadFunction: createDummyXlsx },
    { id: 6, logo: zip, description: "ZIP Archive", downloadFunction: createDummyZip },
    { id: 7, logo: xml, description: "XML Data File", downloadFunction: createDummyXML },
    { id: 8, logo: md, description: "Markdown File", downloadFunction: createDummyMarkdown },
    { id: 9, logo: png, description: "Image File (PNG)", downloadFunction: createDummyImage },
    { id: 10, logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", description: "JavaScript File", downloadFunction: createDummyJS },
    { id: 11, logo: json, description: "JSON File", downloadFunction: createDummyJSON2 },
    { id: 12, logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg", description: "Example PDF File", downloadFunction: createDummyPDF },
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Dummy Files</h1>
      <div style={{backgroundColor: "#e3e3e3", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px", justifyItems: "center" }}>
        {files.map((file) => (
          <div key={file.id} style={{ border: "1px solid #ffffff", borderRadius: "8px", padding: "15px", width: "200px", textAlign: "center" }}>
            <img src={file.logo} alt="File Logo" style={{ width: "80px", height: "60px", marginBottom: "10px" }} />
            <p>{file.description}</p>
            <button onClick={file.downloadFunction} style={{ background: "grey", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer" }}>
              ⬇ Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DummyFiles;

function s2ab(s) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
}
