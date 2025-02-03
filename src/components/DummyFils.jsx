import React from "react";
import { faker } from "@faker-js/faker";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import JSZip from "jszip";
import * as XLSX from "xlsx";
import PPTXGenJS from "pptxgenjs";

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

  const files = [
    { id: 1, logo: "https://cdn-icons-png.flaticon.com/512/2656/2656402.png", description: "Sample Text File", downloadFunction: createDummyTextFile },
    { id: 2, logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg", description: "Example PDF File", downloadFunction: createDummyPDF },
    { id: 3, logo: "https://cdn-icons-png.flaticon.com/512/732/732220.png", description: "CSV Data File", downloadFunction: createDummyCSV },
    { id: 4, logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png", description: "Presentation Slide", downloadFunction: createDummyPptx },
    { id: 5, logo: "https://cdn-icons-png.flaticon.com/512/732/732225.png", description: "Excel File", downloadFunction: createDummyXlsx },
    { id: 6, logo: "https://github.com/opencv/opencv/raw/4.x/samples/data/opencv-logo-white.png", description: "ZIP Archive", downloadFunction: createDummyZip },
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Dummy Files</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", justifyItems: "center" }}>
        {files.map((file) => (
          <div key={file.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "15px", width: "200px", textAlign: "center" }}>
            <img src={file.logo} alt="File Logo" style={{ width: "60px", height: "60px", marginBottom: "10px" }} />
            <p>{file.description}</p>
            <button onClick={file.downloadFunction} style={{ background: "#007bff", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer" }}>
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
