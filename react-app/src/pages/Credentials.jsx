import '../index.css'
// import { Document, Page, pdfjs } from 'react-pdf'
// import workerSrc from 'react-pdf/dist/pdf.worker.entry.js?url'

// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc
import awsLogo from "@/assets/misc/aws.png"

function Certificates() {
  return (
    <div>
      <h1 style={{ marginTop: '35px' }}>Certificates</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src={awsLogo} alt="AWS Logo" className="small-img" />
        <h2>
          Amazon Web Services Cloud Practitioner
        </h2>
      </div>
      <div>
        <a style={{ display: 'inline' }} href="https://cp.certmetrics.com/amazon/en/public/verify/credential/74a0b2a15ce24a8783b6862209c3e350"
          target="_blank" className="cert">
          <u>Link-To-AWS-Credential</u>
        </a>
      </div>
      <div>
        <p>June 01, 2025 - June 01, 2028</p>
      </div>
    </div>
  )
}

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

function Credentials() {
  return (
    <div className="page-content">
      <Certificates />
      <Resume />
    </div>
  )
}

export default Credentials