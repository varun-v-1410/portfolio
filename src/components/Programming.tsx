import {ReactNode} from "react";

interface SkillProp{
  icon: ReactNode;
  name: string;
}

function AddSkill({ icon, level, skillname }: { icon: ReactNode, level: number, skillname: string }) {
  return (
    <div className="col-auto d-flex flex-column row-gap-1">
      <div className="row justify-content-start fw-bolder">
        <span className="fs-5">{icon} {skillname} - {level === 25? "Beginner" : level === 50? "Intermediate" : level === 75? "Advanced" : level === 100? "Expert" : "Noob"}</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="progress" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} style={{height: 5}}>
            <div className={"progress-bar bg-primary w-"+level}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Programming({ Beginner, Intermediate, Advanced, Expert }: { Beginner?: SkillProp[], Intermediate?: SkillProp[], Advanced?: SkillProp[], Expert?: SkillProp[] }) {

  return (
    <>
      <div className="row text-center fs-3 txt-gradient-heading border-bottom border-white border-2 mb-3">
        <strong><i>Programming Skillset</i></strong>
      </div>
      <div className="row justify-content-center d-flex flex-row column-gap-3 row-gap-5 mt-5">
        {Beginner?.map((skill, index) => <AddSkill key={index} icon={skill.icon} level={25} skillname={skill.name} />)}
        {Intermediate?.map((skill, index) => <AddSkill key={index} icon={skill.icon} level={50} skillname={skill.name} />)}
        {Advanced?.map((skill, index) => <AddSkill key={index} icon={skill.icon} level={75} skillname={skill.name} />)}
        {Expert?.map((skill, index) => <AddSkill key={index} icon={skill.icon} level={100} skillname={skill.name} />)}
      </div>
    </>
  );
}