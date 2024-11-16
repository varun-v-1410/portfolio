import React from "react";

interface TSkills{
    name: string;
    icon?: React.ReactNode;
}

interface SkillsProps {
    Beginner?: string[];
    Intermediate?: string[];
    Advanced?: string[];
    Expert?: string[];
    Tools: TSkills[];
    SoftSkills: TSkills[];
    Languages: TSkills[];
    Hobbies: TSkills[];
    Interests: TSkills[];
}

export default function Skills({Beginner, Intermediate, Advanced, Expert,Tools, SoftSkills, Languages, Hobbies, Interests}: SkillsProps) {

    const Heading = ({heading}:{heading:string;}) => {
        return(
            <div className="text-center my-3">
                <span className="fs-3 text-center gradient-3 fw-bolder">{heading}</span>
                <h2 className="text-center heading"></h2>
            </div>
        );
    };

    const Skill = ({skills,level}:{skills:string[], level:string}) => {
        return(
            skills?.map((skill, index) => {
                const levelvalue:string = level === "Beginner"? "25" : level === "Intermediate"? "50" : level === "Advanced"? "75" : level === "Expert"? "100" : "0";
                return(
                    <div key={index}>
                        <span className="fs-5">{skill} - {level}</span><br />
                        <div className="progress" role="progressbar" aria-label={level} aria-valuenow={Number(levelvalue)} aria-valuemin={0} aria-valuemax={100 } style={{height: 5}}>
                            <div className={"progress-bar bg-warning w-"+levelvalue}></div>
                        </div>
                    </div>
                );
            })
        );
    }

    const AddItems = ({Item}:{Item: TSkills[]}) => {
        return(
            <div className="col align-items-center d-flex flex-wrap flex-row justify-content-start row-gap-5 column-gap-5">
                {Item?.map((item, index) => {
                    return(
                        <div key={index}>
                            <span className="fs-4 fst-italic">{item.name} {item.icon? item.icon : null}</span><br />
                        </div>
                    );
                })}
            </div>
        );
    }

    return(
        <div className="col-12 col-md-10">
            <div className="row py-2">
                <Heading heading="Programming Skills, Frameworks & Libraries" />
                <div className="col align-items-center d-flex flex-wrap flex-row justify-content-start row-gap-5 column-gap-5">
                    {Beginner && <Skill skills={Beginner} level="Beginner" />}
                    {Intermediate && <Skill skills={Intermediate} level="Intermediate" />}
                    {Advanced && <Skill skills={Advanced} level="Advanced" />}
                    {Expert && <Skill skills={Expert} level="Expert" />}
                </div>
            </div>
            <div className="row py-3">
                <Heading heading="Tools" />
                <AddItems Item={Tools} />
            </div>
            <div className="row py-3">
                <Heading heading="Soft Skills" />
                <AddItems Item={SoftSkills} />
            </div>
            <div className="row py-3">
                <Heading heading="Languages" />
                <AddItems Item={Languages} />
            </div>
            <div className="row py-3">
                <Heading heading="Hobbies" />
                <AddItems Item={Hobbies} />
            </div>
            <div className="row py-3">
                <Heading heading="Interests" />
                <AddItems Item={Interests} />
            </div>
        </div>
    );
}