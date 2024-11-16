import {FaGithub} from 'react-icons/fa';
import { MdOpenInNew } from "react-icons/md";

import projimg from '../assets/undraw_developer_activity_re_39tg.svg';

interface ProjectProps {
    title: string;
    description: string;
    live?: string;
    image?: string;
    code : string;
    techStack: string[];
}

export default function Project({title, description, live="None", image="None", code, techStack}: ProjectProps) {
    return(
        <div className="col-12 col-md-5 pls">
            <div className='justify-content-center align-items-center row border border-2 rounded-3 p-3 project-card'>
                <img src={image == "None" ? projimg : image} style={{maxHeight:450}} alt="project-image" className='mw-100 align-self-middle mx-auto d-block'/>
                <h3 className='text-center mt-2'><span className='gradient-1'>{title}</span></h3>
                <div className='proj-desc lh-lg'>
                    <p className='text-justify m-0'>{description}</p>
                </div>
                {
                    techStack == undefined ? null :
                    <div className='d-flex flex-wrap justify-content-center mt-2'>
                        Implemented using {techStack.map((tech, index) => <span key={index} className='badge text-bg-primary text-center align-middle justify-content-center m-1'>{tech}</span>)}
                    </div>
                }
                <div className='d-flex justify-content-between mt-3'>
                    {live == "None" ? null: 
                    <a href={live} target='_blank' className='text-decoration-none align-items-center fs-4 d-flex flex-row column-gap-2'>
                        <MdOpenInNew color='white'/>
                        <span className='text-white'>Live</span>
                    </a>}
                    <a href={code} target='_blank' className='text-decoration-none align-items-center fs-4 d-flex flex-row column-gap-2'>
                        <FaGithub color='white'/>
                        <span className='gradient-2'>View code</span>
                    </a>
                </div>
            </div>
        </div>
    );
}