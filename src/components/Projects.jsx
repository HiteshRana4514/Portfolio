import React from 'react'
import EachProject from './EachProject'
import fileProject from '../json-file/project.json';
const Projects = () => {
  
  return (
    <>
        <div>
            <h1 className="text-6xl text-center font-bold text-white mb-4 lg:text-8xl lg:text-start" style={{ fontFamily: 'Poppins, sans-serif' }}>RECENT <span className='text-[#333333]'>PROJECTS</span></h1>
            <div>
              {fileProject.map((item,index)=>{
                return(
                  <EachProject
                    key = {index}
                    projectName = {item.project}
                    discription = {item.Discription}
                    image = {item.image}
                    link = {item.link}
                  />
                )
              })}
              
            </div>
        </div>
    </>
  )
}

export default Projects