import React from 'react'
const replaci =  '/images/replaci.png';
function EachProject({projectName, discription, image, link}) {
  return (
    <>
        <div className='py-4'>
            <a href={link} className='p-2 flex items-center gap-6'  target="_blank"  rel="noopener noreferrer">
                <div className='h-[80px] w-[100px] rounded-md'>
                    <img src={image} alt="replaci" className='block w-full h-full rounded-md'></img>
                </div>
                <div>
                  <span className='block text-xl text-white font-semibold' style={{ fontFamily: 'Poppins, sans-serif' }}>{projectName}</span>
                  <span className='block text-lg text-[#998f8f]' style={{ fontFamily: 'Poppins, sans-serif' }}>{discription}</span>
                </div>
            </a>
        </div>
    </>
  )
}

export default EachProject