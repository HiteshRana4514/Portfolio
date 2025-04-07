import React from 'react'
import { Mail } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';

function Socials() {
  return (
    <>
        <ul className='flex items-center justify-between gap-2'>
            <li>
                <a href="mailto:hiteshrana4514@gmail.com">
                <Mail color={"#1E90FF"} size={20}/>
                </a>
            </li>
            <li>
                <a href="#">
                <Linkedin color={"#1E90FF"} size={20}/>
                </a>
            </li>
            <li>
                <a href="#">
                <Instagram color={"#1E90FF"} size={20}/>
                </a>
            </li>
            <li>
                <a href="#">
                <Twitter color={"#1E90FF"} size={20}/>
                </a>
            </li>
        </ul>
    </>
  )
}

export default Socials