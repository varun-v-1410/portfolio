import React from "react";
import ReactCardFlip from "react-card-flip";
import { IoMdOpen, IoLogoGithub } from "react-icons/io";

import NavBar from "./components/NavBar";
import proj1 from './assets/undraw_developer_activity_re_39tg.svg';

import projlst from "./assets/projects.json";
import ParticleBackground from "./components/ParticleBackground";
import BackToTop from "./components/BactToTop";

export default function Projects() {

    const [flippedCards, setFlippedCards] = React.useState<Record<number | string, boolean | NodeJS.Timeout>>({});

    const handleFrontMouseEnter = (index: number) => {
        const timeout = setTimeout(() => {
            setFlippedCards(prev => ({ ...prev, [index]: true }));
        }, 1000);

        setFlippedCards(prev => ({ ...prev, [`timeout-${index}`]: timeout as unknown as boolean }));
    };

    const handleFrontMouseLeave = (index: number) => {
        const timeoutId = flippedCards[`timeout-${index}`] as NodeJS.Timeout | undefined;
        if (timeoutId) {
            clearTimeout(timeoutId);
            setFlippedCards(prev => {
                const newState = { ...prev };
                delete newState[`timeout-${index}`];
                return newState;
            });
        }
    };    

    const handleBackMouseLeave = (index: number) => {
        setFlippedCards(prev => ({ ...prev, [index]: false }));
    };

    return (
        <div className="container container-fluid min-vh-100 min-vw-100 text-white font-cascadia portbg">
            <ParticleBackground move />
            <NavBar activeTab={1} />
            <section className="row p-2 p-md-5 pb-5" id="projects">
                <span className="row fs-5 text-center text-md-start">
                    Do explore the projects I have worked on 🚀...
                </span>
                <div className="row justify-content-center align-items-center flex-wrap g-0 g-md-5 row-gap-5 row-gap-md-3 pt-5 pt-md-0">
                    {projlst.map((proj, index) => (
                        <div
                            key={index}
                            className="col-lg-3 col-md-4 col-12 justify-content-center align-items-center d-flex"
                        >
                            <div className="card border-3 rounded-4 border-light hvr-scale cur-default" style={{background:"transparent"}}>
                                <div className="card-body justify-content-center align-items-center d-flex flex-column row-gap-md-3 p-md-3">
                                    <h4 className="card-title text-center text-white border-2 border-bottom border-white pb-md-2">
                                        {proj.name}
                                    </h4>
                                    <ReactCardFlip
                                        isFlipped={!!flippedCards[index]}
                                        flipDirection="horizontal"
                                        flipSpeedBackToFront={1}
                                        flipSpeedFrontToBack={1}
                                    >
                                        <img
                                            src={proj.image === "proj1" ? proj1 : proj.image}
                                            alt={proj.name}
                                            className="img-fluid mx-auto w-100"
                                            onMouseEnter={() => handleFrontMouseEnter(index)}
                                            onMouseLeave={() => handleFrontMouseLeave(index)}
                                        />
                                        <div
                                            className="justify-content-center align-items-center d-flex flex-column row-gap-1 p-md-3 text-white"
                                            onMouseLeave={() => handleBackMouseLeave(index)}
                                        >
                                            <p className="fs-6 lh-base proj-p txt-justify">
                                                {proj.description}
                                            </p>
                                            <div className="row justify-content-center d-flex flex-row gap-md-2">
                                                <label className="fs-6 lh-base">
                                                    Implemented using,
                                                </label>
                                                {proj.tech ? proj.tech.map((t, i) => (
                                                    <span
                                                        key={i}
                                                        className="badge bg-primary h6 w-auto"
                                                    >
                                                        {t}
                                                    </span>
                                                )) : null}
                                            </div>
                                        </div>
                                    </ReactCardFlip>
                                    <div className="d-flex justify-content-between border-top border-2 border-white w-100 mt-3 pt-2">
                                        {proj.live ? (
                                            <a
                                                href={proj.live}
                                                className="text-decoration-none fs-6 text-white"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Live Demo <IoMdOpen color="#fff" />
                                            </a>
                                        ) : null}
                                        {proj.github ? ( 
                                            <a
                                                href={proj.github}
                                                className="text-decoration-none fs-6 txt-gradient-1"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <IoLogoGithub color="#fff" /> View Code
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <BackToTop />
        </div>
    );
}