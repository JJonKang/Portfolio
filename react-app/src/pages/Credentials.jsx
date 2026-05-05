import '../index.css'
import awsLogo from "@/assets/misc/aws.png"
import { useState, useRef, useEffect } from 'react';
// https://github.com/wojtekmaj/react-pdf
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


function Certificates() {
  return (
    <div className="page-content">
      <h1 style={{ marginTop: '35px' }}>Certificates</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src={awsLogo} alt="AWS Logo" className="small-img" />
        <h2>
          Amazon Web Services Cloud Practitioner
        </h2>
      </div>
      <div style={{ marginTop: '35px' }}>
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

function Resume({ dark, setDark }) {
  const containerRef = useRef(null);
  const [w, setWidth] = useState(0);

  // Resize continually based on tab resizes
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(entries => {
      setWidth(entries[0].contentRect.width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Resume Downloader Button
  const btnLight = "box-btn-resume " + (dark ? 'box-btn-dark' : 'box-btn-light')
  return (
    <div>
      <div className="resume-header">
        <h1 style={{ margin: 0 }}>Resume</h1>
        {/* https://stackoverflow.com/questions/11620698/how-to-trigger-a-file-download-when-clicking-an-html-button-or-javascript */}
        <a href="/Portfolio/resume.pdf" download="Jonathan_Kang_Resume" className={btnLight}>
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 10L12 15M12 15L7 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
      <div ref={containerRef} className="resume-reader">
        <Document file="/Portfolio/resume.pdf">
          {/* https://github.com/wojtekmaj/react-pdf/wiki/Frequently-Asked-Questions for devicepixelratio*/}
          <Page
            pageNumber={1}
            renderTextLayer={true}
            renderAnnotationLayer={false}
            width={w * 0.75}
            devicePixelRatio={Math.min(2, window.devicePixelRatio)}
          />
        </Document>
      </div>
    </div>
  )
}

function Credentials({ dark, setDark }) {
  return (
    <div className="page-content">
      <Certificates />
      <Resume dark={dark} setDark={setDark} />
    </div>
  )
}

export default Credentials