import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiCplusplus, SiPython, SiJavascript, SiReact, SiExpress, SiBootstrap, SiTensorflow, SiScikitlearn, SiGithubcopilot, SiVite, SiSpringboot, SiPostman, SiMongodb, SiSurrealdb} from "react-icons/si";
import { RiJavaLine, RiNotionFill, RiPenNibFill, RiTeamFill, RiNextjsFill } from "react-icons/ri";
import { FaNode, FaGitAlt, FaPuzzlePiece, FaSwimmer, FaEdge, FaCode } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { GiBrain } from "react-icons/gi";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { MdPublishedWithChanges } from "react-icons/md";
import { GiShuttlecock, GiMountainClimbing } from "react-icons/gi";

import NavBar from './components/NavBar';
import Programming from "./components/Programming";
import ParticleBackground from "./components/ParticleBackground";
import OtherSkill from "./components/OtherSkill";

import ProfilePIc from './assets/profile-pic.jpg';
import { TbBrandMysql } from "react-icons/tb";
import BackToTop from "./components/BactToTop";
import { CgGym } from "react-icons/cg";

export default function Home() {

  return (
    <div className='container-fluid min-vh-100 min-vw-100 text-white font-cascadia portbg'>
      <ParticleBackground move />
      <NavBar activeTab={0} />
      <section className="row px-2 px-md-5 min-vh-100 min-vw-100" id="home">
        <div className='row py-5'>
          <label className='fs-4 my-md-3 w-auto row'>Hii 👋.....,</label>
          <div className='row mx-md-5 mx-auto justify-content-center column-gap-5'>
            <div className='col-12 col-md-4 mt-4 mt-md-0 justify-content-center align-items-center order-md-last'>
              <img src={ProfilePIc} alt='VarunV' className='img-fluid rounded-5'/>
            </div>
            <div className='col-12 col-md-4 order-md-first mt-3 mt-md-0'>
              <div className='row text-start fs-5'>
                <strong>
                  <span className='fs-2'>I am <span className='purple'>Varun V</span></span>
                  <p className='py-3 fs-5 txt-justify'> 
                  I am an aspiring student currently pursuing my B.Tech in the branch of Computer Science And Engineering (CSE) at Jain (Deemed-To-Be University). I possess a strong foundation in vast programming languages, machine learning and deep learning. I am currently seeking an opportunity to apply my skills in a dynamic environment and contribute to innovative projects.
                  </p>
                </strong>
              </div>
              <strong>
                <div className='row justify-content-center d-flex flex-row column-gap-md-3'>
                    <a href="https://github.com/varun-v-1410" target="_blank" rel="noreferrer" className='fs-3 align-align-items-center w-auto hvr-underline moccasin'><FaGithubSquare color="#000" style={{backgroundColor:'moccasin'}}/> Github</a>
                    <a href="https://www.linkedin.com/in/varun-v-823839247/" target="_blank" rel="noreferrer" className='fs-3 align-align-items-center w-auto hvr-underline moccasin'><FaLinkedin className="text-primary-emphasis" style={{backgroundColor:'moccasin'}}/> LinkedIn</a>
                </div>
              </strong>
            </div>
          </div>
        </div>
      </section>
      <section className="row p-3 p-md-5 pb-3" id="education">
        <label className='fs-5 w-auto row'>I completed my education 🏫 at,</label>
        <div className='row justify-content-center pt-5'>
          <div className="text-start fs-5">
            <strong>
              <ul className="d-flex flex-column gap-3" style={{listStyleType: 'none'}}>
                <li><a href="https://maps.app.goo.gl/8Hrpr8d47VrZ8q6L6" target="_blank" className="text-decoration-none text-warning">Sri bhuvanendra Resedential School</a> - Class 10<sup>th</sup></li>
                <li><a href="https://maps.app.goo.gl/AXk7vBDYrPFZZxPP7" target="_blank" className="text-decoration-none text-warning">Sadhana Pre-University College</a> - Class 12<sup>th</sup></li>
                <li><a href="https://set.jainuniversity.ac.in/" target="_blank" className="text-decoration-none text-warning">Jain (Deemed-To-Be University)</a> - B.Tech (Currently Pursuing 3<sup>rd</sup> Year)</li>
              </ul>
            </strong>
          </div>
        </div>
      </section>
      <section className="row p-5" id="skills">
        <label className='fs-5 w-auto row'>My skills and abilities ⚒️ include,</label>
        <div className='row justify-content-center mt-3 mt-md-0'>
          <Programming Beginner={[{icon:<SiCplusplus/>,name:"C++"}]} 
          Intermediate={[{icon:<RiJavaLine/>,name:"Java"},{icon:<SiPython/>,name:"Python"},{icon:<SiJavascript/>,name:"JavaScript"},{icon:<LuBrainCircuit/>,name:"Machine Learning"}]} 
          Advanced={[{icon:<SiReact/>,name:"React"},{icon:<SiReact/>,name:"React Native"},{icon:<GiBrain/>,name:"Deep Learning"}]}/>
          <OtherSkill heading="Frameworks" tools={[{icon:<FaNode/>,name:"Node.js"},{icon:<SiExpress/>,name:"Express.js"},{icon:<SiBootstrap/>,name:"Bootstrap"},{icon:<SiTensorflow/>,name:"Tensorflow"},{icon:<SiScikitlearn/>,name:"Scikit-Learn"},{icon:<RiNextjsFill/>,name:"Next.js"},{icon:<SiVite/>,name:"Vite"},{icon:<SiSpringboot/>,name:"Spring Boot"}]}/>
          <OtherSkill heading="Tools" tools={[{icon:<RiNotionFill/>,name:"Notion"},{icon:<FaGitAlt/>,name:"Git"},{icon:<FaGithubSquare/>,name:"Github"},{icon:<PiMicrosoftExcelLogoFill/>,name:"MS OFfice"},{icon:<SiGithubcopilot/>,name:"Github Copilot"},{icon:<SiPostman/>,name:"Postman"}]}/>
          <OtherSkill heading="Databases" tools={[{icon:<TbBrandMysql/>,name:"MySQL"},{icon:<SiMongodb/>,name:"MongoDB"},{icon:<SiSurrealdb/>,name:"SurrealDB"}]}/>
          <OtherSkill heading="Soft Skills" tools={[{icon:<RiTeamFill/>,name:"Teamwork"},{icon:<MdPublishedWithChanges/>,name:"Adaptability"},{icon:<FaPuzzlePiece/>,name:"Problem Solving"}]}/>
          <OtherSkill heading="Languages" tools={[{icon:"A",name:"English"},{icon:"ಅ",name:"Kannada"},{icon:"अ",name:"Hindi"}]} />
          <OtherSkill heading="Hobbies" tools={[{icon:<GiShuttlecock/>,name:"Badminton"},{icon:<FaSwimmer/>,name:"Swimming"},{icon:<RiPenNibFill/>,name:"Research"},{icon:<FaEdge/>,name:"Browsing web"},{icon:<CgGym/>,name:"Workout"}]} />
          <OtherSkill heading="Interests" tools={[{icon:<FaCode/>,name:"Programming"},{icon:<GiMountainClimbing/>,name:"Proactive Learning"}]} />
        </div>
      </section>
      <BackToTop />
    </div>
  )
}