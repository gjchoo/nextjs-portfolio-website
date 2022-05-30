import { useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
  const file = "./resume/resume_gjchoo.pdf";
  const [numPages, setNumPages] = useState(0);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  console.log(Array.from({ length: numPages }, (_, i) => i + 1));

  return (
    <div className="pdf-viewer">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div
            style={{
              backgroundColor: "white",
              height: "100vh",
              width: "100vw",
            }}
          />
        }
      >
        {Array.from({ length: numPages }, (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        ))}
      </Document>
    </div>
  );
}
