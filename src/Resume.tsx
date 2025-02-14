import { Document, Page, pdfjs } from "react-pdf";
import NavBar from "./components/NavBar";
import MyResume from "./assets/Varun_Resume.pdf";
import { useEffect, useState } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {    
    
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return(
        <div className="container-fluid min-vh-100 min-vw-100 text-white font-cascadia portbg">
            <NavBar activeTab={2}/>
            <section className="row p-5" id="resume">
                <span className="row fs-5">Here is my resume 📄...</span>
                <div className="row mt-3 mt-md-0">
                    <Document file={MyResume} onLoadError={(err)=>{console.log(err)}} className="d-flex justify-content-center align-items-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} renderAnnotationLayer={false} renderTextLayer={false}/>
                    </Document>
                </div>
                <div className="row mt-4 align-items-center justify-content-center">
                    <a href={MyResume} target="_blank" className="btn btn-primary w-auto">Download Resume</a>
                </div>
            </section>
        </div>
    );
}