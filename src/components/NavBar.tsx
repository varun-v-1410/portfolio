import { Link } from "react-router";
import { IoHome } from "react-icons/io5";
import { SiPolymerproject } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";
import { useEffect, useState } from "react";
import { PiCertificateBold } from "react-icons/pi";

import "../css/navbar.css";

export default function NavBar({ activeTab }: { activeTab: number }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="d-none d-lg-block d-md-block d-xl-block">
                {/* Desktop Navbar */}
                <nav
                    className={`navbar row fixed-top navbar-expand-lg navbar-dark ${scrolled ? "scrolled" : ""}`}
                >
                    <div className="container-fluid justify-content-end">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${activeTab === 0 ? "active" : ""}`} aria-current="page">
                                    <IoHome /> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className={`nav-link ${activeTab === 1 ? "active" : ""}`}>
                                    <SiPolymerproject /> Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/certification" className={`nav-link ${activeTab === 4 ? "active" : ""}`}>
                                    <PiCertificateBold /> Certifications
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/resume" className={`nav-link ${activeTab === 2 ? "active" : ""}`}>
                                    <FaFilePdf /> Resume
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="d-block d-lg-none d-md-none d-xl-none">
                {/* Mobile Navbar */}
                <nav
                    className={`navbar navbar-expand-lg navbar-dark ${scrolled ? "scrolled" : ""}`}
                >
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to="/" className={`nav-link ${activeTab === 0 ? "active" : ""}`} aria-current="page">
                                        <IoHome /> Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/projects" className={`nav-link ${activeTab === 1 ? "active" : ""}`}>
                                        <SiPolymerproject /> Projects
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/certification" className={`nav-link ${activeTab === 4 ? "active" : ""}`}>
                                        <PiCertificateBold /> Certifications
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/resume" className={`nav-link ${activeTab === 2 ? "active" : ""}`}>
                                        <FaFilePdf /> Resume
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}