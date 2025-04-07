import React from "react";
import { House } from "lucide-react";
import { Folder } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Wrench } from "lucide-react";
import { Link } from "react-router-dom";

function Header({setRoot}) {
  return (
    <>
      <section className="px-4 py-8 flex justify-center">
        <nav className="flex gap-2 justify-between items-center py-1 px-4 bg-[#1b1a18] w-[350px] rounded-xl">
          <Link to={"/"}>
            <span className="block p-2 cursor-pointer house" onClick={()=> setRoot(true)}>
              <House color={"white"} size={20} />
            </span>
          </Link>
          <Link to={"/projects"}>
            <span className="block p-2 cursor-pointer folder" onClick={()=> setRoot(false)}>
              <Folder color={"white"} size={20} />
            </span>
          </Link>
          <Link>
          <span className="block p-2 cursor-pointer briefcase" onClick={()=> setRoot(false)}>
            <BriefcaseBusiness color={"white"} size={20} />
          </span>
          </Link>
          <Link to={"/tools"}>
          <span className="block p-2 cursor-pointer wrench" onClick={()=> setRoot(false)}>
            <Wrench color={"white"} size={20} />
          </span>
          </Link>
        </nav>
      </section>
    </>
  );
}

export default Header;
