
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';
import { Document, Page, pdfjs  } from 'react-pdf'
//import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs";
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import "./Styling/Resume.css"

import resume_pdf from '../components/assets/Resume_Madhur_Vaidya.pdf'

//IMPPPPPP: If PDF Not seen on Resume.js and error like versions are different, install : npm i --save --save-exact pdfjs-dist@4.4.168

class Resume extends Component {

  //<embed src={`${resume_pdf}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0`} width="80%" height="70%"/>
  render() {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs',import.meta.url,).toString();

    return (
      <div className="centre" >
        <Title title="Resume" />
        <br />
        <p className="noto-sans-300">This is My Resume</p>
        <br /><br /><br />

        <div className="pdf-container" style={{maxWidth:"80vw !important", overflow:"scroll", overflowX:"auto"}}>
          <div className="pdf-container-actual" style={{}}>
            <Document file={resume_pdf} style={{maxWidth:"80vw !important"}}>
              <Page pageNumber={1} />
            </Document>
          </div>
        </div>

        <a href={resume_pdf} style={{textDecoration:'none'}} target="_blank" rel="noopener noreferrer">
          <div className="button-container">
            <button className="rounded-button">Download PDF</button>
          </div>
        </a>

      </div>
    );
  }
}

export default Resume;