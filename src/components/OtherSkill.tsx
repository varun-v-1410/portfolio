import { ReactNode } from "react";

interface Tool{
    icon: ReactNode;
    name: string;
}

export default function OtherSkill({heading, tools}: {heading: string, tools: Tool[]}) {
    return (
        <>
            <div className="row text-center fs-3 mt-5 txt-gradient-heading border-bottom border-white border-2 mb-3">
                <strong><i>{heading}</i></strong>
            </div>
            <div className="row justify-content-center d-flex flex-row column-gap-4 column-gap-md-5 row-gap-4 row-gap-md-5 mt-2">
                {tools.map((tool, index) => (
                    <div key={index} className="col-auto border border-2 border-white rounded-4">
                        <div className=" justify-content-center align-items-center d-flex flex-column row-gap-1 p-2 p-md-3" style={{fontSize:50}}>
                            {tool.icon}
                            <span className="fs-6">{tool.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}