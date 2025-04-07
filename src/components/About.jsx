import React from 'react'
import useResize from '../hooks/useResize';

function About() {
    const isMobile = useResize();
    
  return (
    <>
        <h1 className="text-6xl text-center font-bold text-white mb-4 lg:text-8xl lg:text-start" style={{ fontFamily: 'Poppins, sans-serif' }}>SOFTWARE <span className='text-[#333333]' >ENGINEER</span></h1>
        <p className='text-center text-base text-[#998f8f] lg:text-start lg:w-[550px] lg:text-lg' style={{ fontFamily: 'Poppins, sans-serif' }}>
            {isMobile ? "A Software Engineer passionate about crafting seamless user experiences with React, JavaScript, and Three.js—turning ideas into interactive, high-performance web solutions." : "I am a Software Engineer passionate about crafting seamless user experiences using React, JavaScript, and Three.js. With a keen eye for detail and a problem-solving mindset, I specialize in transforming ideas into high-performance, interactive web solutions. From intuitive UI designs to immersive 3D experiences, I strive to bridge the gap between creativity and functionality, ensuring smooth and engaging digital interactions."}
            </p>
    </>
  )
}

export default About