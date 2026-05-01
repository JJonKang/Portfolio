import '../index.css'
// import { Document, Page, pdfjs } from 'react-pdf'
// import workerSrc from 'react-pdf/dist/pdf.worker.entry.js?url'

// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

function Resume() {
  return (
    <div>
      <h1 style={{ marginTop: '35px' }}>Resume</h1>
      {/* <Document className="resume-reader" className="resume-reader-text" file="/Portfolio/resume.pdf">
        <Page pageNumber={1} />
      </Document> */}
      <embed src="/Portfolio/resume.pdf" className="resume"/>
    </div>
  )
}

export default Resume