import React from 'react';
import ReactCardFlip from "react-card-flip";

import { FaGithub, FaLinkedin, FaGitAlt, FaPuzzlePiece, FaSwimmer, FaEdge, FaCode} from "react-icons/fa";
import { SiNotion, SiMicrosoftexcel, SiTensorflow, SiScikitlearn, SiFuturelearn, SiGmail} from "react-icons/si";
import { HiUserGroup } from "react-icons/hi";
import { RiUserSettingsFill, RiMailSendLine} from "react-icons/ri";
import { GiShuttlecock } from "react-icons/gi";

import Project from "./components/Project";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";

import './css/PortFolio.css';
import ProfilePic from './assets/1659525487318.jpeg';
import QR from './assets/portfolio-qr.svg';
import Resume from './assets/Varun_Resume.pdf';

export default function Portfolio() {

  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const stopPropagation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  }


  return (
    <div className="container-fluid min-vh-100 min-vw-100 portbg text-white px-5 py-5 font-cascadiacode">
      <section id='about' className='mt-5'>
          <div className='row justify-content-start '>
            <span className='fs-4'>Hi👋.....,</span>
          </div>
          <div className='row justify-content-center mt-2 column-gap-2 '>
            <div className='col-12 col-md-4 text-center align-items-center order-md-2 align-middle justify-content-center d-flex'>
              <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped}>
                <div className='text-center align-items-center align-middle justify-content-center' onClick={handleClick} style={{cursor:'pointer'}}>
                  <img id="profilepic" src={ProfilePic} alt='Profile' className='img-fluid rounded-circle'/>
                </div>
                <div id="golden-card" className='text-center align-items-center align-middle justify-content-center' onClick={handleClick} style={{cursor:'pointer'}}>
                  <div className="gold-gradient px-3 py-4 d-flex column-gap-3 text-black rounded-5">
                    <div className="col-8 justify-content-start text-start fw-light row-gap-2">
                      <div className="row row-gap-1">
                        <span className="fs-5 fw-semibold">Varun V</span>
                        <p style={{fontSize:10}}>
                          I am an aspiring student currently pursuing my B.Tech in the branch of Computer Science And Engineering (CSE) at Jain (Deemed-To-Be University). I possess a strong foundation in vast programming languages, machine learning and deep learning. I am currently seeking an opportunity to apply my skills in a dynamic environment and contribute to innovative projects.
                        </p>
                      </div>
                      <div className="row d-flex flex-row column-gap-1">
                        <a href="mailto:varun.v.1410@gmail.com" onClick={stopPropagation} target="_blank" className="text-decoration-none align-items-center w-auto fs-4">
                          <RiMailSendLine color="343434"/>
                        </a>
                        <a href="https://github.com/varun-v-1410" onClick={stopPropagation} target='_blank' className='text-decoration-none w-auto align-items-center fs-4'>
                          <FaGithub color='343434'/>
                        </a>
                        <a href="https://www.linkedin.com/in/varun-v-823839247/" onClick={stopPropagation} target='_blank' className='text-decoration-none w-auto align-items-center fs-4'>
                          <FaLinkedin color='343434'/>
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row justify-content-center">
                        <img src={ProfilePic} alt='Profile' className='img-fluid w-100 rounded-circle' />
                      </div>
                      <div className="row justify-content-center mt-2">
                        <img src={QR} alt='QR' className='img-fluid w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
            <div className='col-12 col-md-4 text-start fs-5 order-md-1 p-sm-2'>
              <p className='text-justify text-wrap lh-lg fs-5 fs-6'>
                <span className='fs-2'>I am <span className='text-warning'>Varun V.</span></span><br /><br />
                I am an aspiring student currently pursuing my B.Tech in the branch of Computer Science And Engineering (CSE) at Jain (Deemed-To-Be University). I possess a strong foundation in vast programming languages, machine learning and deep learning. I am currently seeking an opportunity to apply my skills in a dynamic environment and contribute to innovative projects.
              </p>
              <div className='d-flex flex-row column-gap-4'>
                <a href="https://github.com/varun-v-1410" target='_blank' className='text-decoration-none align-items-center fs-3 d-flex flex-row column-gap-2 glow-text-1'>
                  <FaGithub color='F7CE68'/>
                  <span className='gradient-1'>Github</span>
                </a>
                <a href="https://www.linkedin.com/in/varun-v-823839247/" target='_blank' className='text-decoration-none align-items-center fs-3 d-flex flex-row column-gap-2 glow-text-1'>
                  <FaLinkedin color='F7CE68'/>
                  <span className='gradient-1'>Linkedin</span>
                </a>
              </div>
              <div className='mt-4'>
                  <a href={Resume} className='text-decoration-none text-white' download={true}>
                    <button className='btn-grad'>Download Resume</button>
                  </a>
              </div>
            </div>
          </div>
      </section>
      <section id='education' className='mt-5'>
        <div className='row justify-content-start '>
            <span className='fs-5'>I completed my education at,</span>
        </div>
        <div className='row justify-content-center mt-3 column-gap-2 '>
            <div className='col-12 col-md-8 align-items-center justify-content-start'>
              <p className='fs-5 lh-lg'>
                <a className='text-warning text-decoration-none' href='https://maps.app.goo.gl/NQuRAdEYehdyn9Us9' target='_blank'>Sri Bhuvanendra Residential School</a> - Class 10<sup>th</sup><br />
                <a className='text-warning text-decoration-none' href='https://sadhanacollege.com/' target='_blank'>Sadhana Pre-University College</a> - Class 12<sup>th</sup><br />
                <a className='text-warning text-decoration-none' href='https://set.jainuniversity.ac.in/' target='_blank'>Jain (Deemed-To-Be University)</a> - B.Tech (Currently Pursuing 3<sup>rd</sup> Year) 
              </p>
            </div>
          </div>
      </section>
      <section id='skills' className='mt-5'>
        <div className='row justify-content-start '>
            <span className='fs-5'>My skils and abilities include,</span>
        </div>
        <div className='row justify-content-center mt-3 column-gap-2 '>
            <Skills 
            Beginner={["C++"]} 
            Intermediate={["C","Java","Python","Javascript","Node.js","Machine Learning"]} 
            Advanced={["React","React Native","Expres.js","Bootstrap","Deep Learning"]} 
            Tools={[{name: "Git",icon: <FaGitAlt/>},{name:'Notion',icon: <SiNotion/>},{name:'MS Office',icon:<SiMicrosoftexcel/>},{name:'TensoFlow',icon:<SiTensorflow/>},{name:'Scikit-Learn',icon:<SiScikitlearn/>}]} 
            SoftSkills={[{name:'Problem Solving',icon:<FaPuzzlePiece/>},{name:'Team Collaboration',icon:<HiUserGroup/>},{name:'Adaptability',icon:<RiUserSettingsFill/>}]} 
            Languages={[{name: 'English A'},{name:'Kannada ಅ'},{name: 'Hindi अ'}]} 
            Hobbies={[{name:'Swimming',icon:<FaSwimmer/>},{name:'Badminton',icon:<GiShuttlecock/>},{name:'Browsing Web',icon:<FaEdge/>}]} 
            Interests={[{name:'Programming',icon:<FaCode/>},{name:'Proactive Learning',icon:<SiFuturelearn/>}]}/>
          </div>
      </section>
      <section id="certifications" className="mt-5">
        <div className="row justify-content-start ">
          <span className="fs-5">My certifications are,</span>
        </div>
        <div className="row row-gap-5 mt-5 justify-content-center column-gap-5  d-flex flex-wrap flex-row">
          <Certificate platform="Coursera" course="Machine Learning" image="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ZSGYB3P6CSG2/CERTIFICATE_LANDING_PAGE~ZSGYB3P6CSG2.jpeg" link="https://www.coursera.org/account/accomplishments/specialization/certificate/ZSGYB3P6CSG2"/>
        </div>
      </section>
      <section id='projects' className='mt-5'>
        <div className='row justify-content-start '>
            <span className='fs-5'>Some of my projects are,</span>
        </div>
        <div className='row row-gap-5 mt-5 justify-content-center column-gap-5  d-flex flex-wrap flex-row'>
          <Project techStack={["NodeJS","Expo","React Native","Async-Storage"]} title="Hangman" description="One of the most popular games we played as kids🧒 was Hangman. Whenever we have free time, let's spend it with our cousins or friends 🤝, one of the first games that came to mind was hangman. In fact, this was one of the games/activities with word-related topics of a subject to go when the teachers thought of a fun activity to conduct in class while keeping the silence and decorum of the room." code="https://github.com/varun-v-1410/Hangman"/>
          <Project techStack={["NodeJS","Expo","React Native","MealDB API"]} image="https://github.com/varun-v-1410/Food-Recipes/raw/main/mockup.png" live="https://varun-v-1410.github.io/Food-Recipes/" title="Food-Recipes" description="'Are you tired of the same old meals? Craving inspiration in the kitchen? Look no further! Our app offers a treasure trove of diverse recipes, catering to all tastes, preferences, and dietary needs. Whether you're a novice cook or a seasoned chef, our step-by-step instructions and handy tips will guide you through every dish with ease. Say goodbye to mealtime monotony and hello to a world of delicious possibilities at your fingertips'" code="https://github.com/varun-v-1410/Food-Recipes"/>
        </div>
      </section>
      <section id="contact">
        <div className="row justify-content-center mt-5">
          <div className="col-12 text-center">
            <span className="fs-5">Feel free to reach out to me via,</span>
          </div>
          <div className="col-12 text-center align-items-center justify-content-center mt-3 d-flex flex-row column-gap-5 fs-3">
            <a href="mailto:varun.v.1410@gmail.com" target="_blank" className="text-decoration-none align-items-center">
              <SiGmail color="F7CE68"/>
            </a>
            <a href="https://github.com/varun-v-1410" target='_blank' className='text-decoration-none align-items-center'>
              <FaGithub color='F7CE68'/>
            </a>
            <a href="https://www.linkedin.com/in/varun-v-823839247/" target='_blank' className='text-decoration-none align-items-center'>
              <FaLinkedin color='F7CE68'/>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}