import React from "react";
import Socials from "./Socials";
import { useRef } from "react";
import useResize from '../hooks/useResize';
const ProfileImg = "/images/profile-image.png";


function ProfileCard() {
  const isMobile = useResize();
  const cardRef = useRef(null);
//   const handelMouseMove = (e)=>{
//     if(cardRef.current){
//       const card = cardRef.current
//       const { width, height, left, top } = card.getBoundingClientRect();
//     const x = (e.clientX - left - width / 2) / 10;
//     const y = (e.clientY - top - height / 2) / 10;

//     card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
//     card.addEventListener("mouseleave", () => {
//       card.style.transform = "rotateY(0deg) rotateX(0deg)";
//   });
// }
//     }

  return (
    <>
      <div className="py-6 px-8 bg-white w-full rounded-xl flex items-center flex-col lg:sticky lg:top-[50px] lg:left-0 transition duration-100 lg:w-[355px]"
        // onMouseMove={handelMouseMove}
        ref = {cardRef}
      >
        <div className="px-2 min-h-[350px] flex items-center flex-col">
          <div className="w-full min-h-[65%] max-h-[255px] max-w-[255px] bg-[#1E90FF] rounded-xl mb-6">
            <img
              src={ProfileImg}
              alt="profile"
              className="w-full block h-full rounded-xl"
            ></img>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Hitesh Rana</h1>
          </div>
          
        </div>
        <p className="text-md font-medium text-center text-[#6f7072] max-w-[275px] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {isMobile ? 'Bringing Ideas to Life with Code – Crafting Engaging, High-Performance Web Experiences ' : 'Transforming Ideas into Seamless Web Experiences – Building Interactive, Scalable, and Lightning-Fast Frontends with Clean Code.'}
        </p>
        <div className="w-[60%] max-w-[200px]">
          <Socials/>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
