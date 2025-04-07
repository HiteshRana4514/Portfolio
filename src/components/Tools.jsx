import React from "react";
import EachTool from "./EachTool";
import skills from '../json-file/skills.json';

function Tools() {
  return (
    <>
      <div>
        <h1
          className="text-6xl text-center font-bold text-white mb-4 lg:text-8xl lg:text-start"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          PREMIUM <span className="text-[#333333]">TOOLS</span>
        </h1>
        {skills.map((item,index)=>{
            return(
                <EachTool
                    key = {index}
                    skillName = {item.skill}
                    description = {item.description}
                    model = {item.model}
                    scale = {item.scale}
                />
            )
        })}
        
      </div>
    </>
  );
}

export default Tools;
