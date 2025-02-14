import NavBar from "./components/NavBar";
import ParticleBackground from "./components/ParticleBackground";

import certificates from './assets/certificates.json';

export default function Certifications() {
    return (
        <div className="container-fluid min-vh-100 min-vw-100 text-white font-cascadia portbg">
            <ParticleBackground move={false} />
            <NavBar activeTab={4} />
            <section className="row p-2 p-md-5 pb-5" id="certifications">
                <div className="row fs-5 text-center text-md-start">Here are some of my certifications 📜...</div>
                <div className="row justify-content-center flex-wrap pt-3 g-0 g-md-5">
                    {
                        certificates.map((certificate, index) => (
                            <div key={index} className="col-12 col-md-5 justify-content-center">
                                <div className="card border-3 rounded-4 border-light text-center hvr-scale bg-dark">
                                    <a href={certificate.verify} target="_blank" className="card-body text-decoration-none text-white">
                                        <img src={certificate.img} alt="Certificate" className="card-img-top img-fluid mb-2" />
                                        <h4 className="card-title text-center txt-gradient-3">{certificate.name}</h4>
                                        <span className="card-text fs-5">From <span className="txt-gradient-2">{certificate.from}</span></span>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
}