import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import *  as ai from 'react-icons/ai'
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
    const [showMenu,setShowMenu] = useState(true);
    const [openMenu,setOpenMenu]=useState(false);
    const [isMobile,setIsMobile] = useState(false);
    const handleSize=()=>{
      if(window.innerWidth<640){
        setIsMobile(true);
      }
      else{
        setIsMobile(false);
        setShowMenu(true);
      }
    }
    useEffect(() => {
        window.addEventListener("resize", handleSize)
      })
      
    return (
        <div className='flex-col sm:flex-row flex  justify-between p-2.5 bg-[#111]  sm:fixed  sm:top-0  sm:right-0  sm:left-0 z-10 px-2 sm:px-5 w-full sm:items-center'>
            <div className="logo flex-1">
                <span className='flex justify-between w-full items-center'>
                <Link href="/"><a className="text-[24px]">schadfolio</a></Link>
             {openMenu?   <FaTimes className='text-[20px] sm:hidden' onClick={()=>{
                    setShowMenu(prev=>!prev);
                    setOpenMenu(false)
                }}/>:  <FaBars className='text-[20px] sm:hidden' onClick={()=>{
                    setShowMenu(prev=>!prev);
                    setOpenMenu(true)
                }}/>}
                </span>
           </div>
            {showMenu && (
            <div className="menu flex-1">
                <ul className='flex flex-col sm:flex-row gap-2.5 sm:gap-10 pt-5'>
                    <li><Link href="/"><a className='flex  gap-2.5 items-center'><ai.AiOutlineHome/> Home</a></Link></li>
                    <li><Link href="/#about"><a className='flex  gap-2.5 items-center'><ai.AiOutlineUser/>About</a></Link></li>
                    <li><Link href="/#portfolio"><a className='flex  gap-2.5 items-center'><ai.AiOutlineProject/>Portfolio</a></Link>
                    </li> <li><Link href="/#mystacks"><a className='flex  gap-2.5 items-center'><ai.AiOutlineSetting/>Stacks</a></Link></li>
                    <li><Link href="/#contact"><a className='flex  gap-2.5 items-center'><ai.AiFillContacts/>Contact</a></Link></li>
                </ul>
            </div>
            )}

        </div>
    )
}

export default Navbar