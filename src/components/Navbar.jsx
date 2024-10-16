import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Commonbtn from '../../reuseableComponent/Commonbtn'

const Navbar = () => {
  const [isMenu,setIsMenu] = useState(false)
  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }
  return (
    <>
        <div className='bg-secondary p-2'>
            <div className='flex items-center md:px-[50px] md:py-[13px] px-[11px] py-[7px] lg:px-[85px] lg:py-[25px] border-b border-b-[#3F3F46] justify-between'>
              <img className='sm:w-[132px] sm:h-[37px] w-[120px] h-[28px]' src="img/logo.png" alt="" />

              <ul className='md:flex hidden items-center gap-[35px] font-onest text-[14px] text-[#A1A1AA]'>
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/incidients">Incidents</NavLink></li>
                <li><NavLink to="/Location">Locations</NavLink></li>
                <li><NavLink to="/activities">Activities</NavLink></li>
                <li><NavLink to="/documents">Documents</NavLink></li>
                <li><NavLink to="/cyper">Cypher AI</NavLink></li>
              </ul>

              <div className='flex items-center gap-1 sm:gap-2'>
                <div className='flex items-center gap-1 sm:gap-2'>
                  <img className='w-[30px] h-[30px] sm:w-full sm:h-full' src="img/notification.png" alt="" />
                  <img className='w-[30px] h-[30px] sm:w-full sm:h-full ' src="img/men.png" alt="" />
                </div>
                <div>
                  <p className='font-onest sm:font-semibold font-medium text-[14px] sm:text-[16px] text-[#71717A]'>Usman Zafar</p>
                  <p className='text-[#71717A] sm:text-[14px] text-[12px] font-onest'>usmanzafar@gmail.com</p>
                </div>
              </div>
              <div onClick={toggleMenu}>
              {/* <i class="fa-solid md:hidden block ml-2 text-[15px] fa-bars"></i> */}
              {isMenu ? (<i  class='fa-solid md:hidden block ml-2 text-[15px] fa-xmark'></i>) : (<i class='fa-solid md:hidden block ml-2 text-[15px] fa-bars'></i>)}
              </div>
            </div>




            <div className='flex sm:flex-row flex-col  items-center lg:px-[85px] lg:py-[23px] md:px[60px] md:py-[18px] px-4 py-3 justify-between'>
              <div>
                <p className='font-onest text-[12px] text-[#71717A]'>Welcome back</p>
                <h2 className='text-[#09090B] font-bold sm:text-[26px] text-[16px] font-onest'>Dashboard</h2>
              </div>  

              <div className='flex items-center gap-2 sm:mt-0 mt-2 sm:gap-[14px]'>
                <button className='flex bg-white rounded p-2 items-center gap-1 sm:gap-2'><i class="fa-solid text-[10px] sm:text-[12px] text-[#71717A] fa-magnifying-glass"></i>
                  <span className='sm:text-[12px] text-[10px] text-[#71717A] font-onest'>Search incident</span>
                </button>

                <button className=' bg-white rounded text-[10px] sm:text-[12px] text-[#71717A] font-onest p-2'>Sort By: Date modified </button>
                <button className='btn '>Cypher Ai</button>
              </div>  
            </div>
            {
              isMenu ? (
                <ul className='flex flex-col p-6 w-full z-50 overflow-y-hidden h-screen bg-secondary items-start gap-7 sm:gap-[35px] font-onest text-[14px] text-[#A1A1AA]'>
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/incidients">Incidents</NavLink></li>
                <li><NavLink to="/Location">Locations</NavLink></li>
                <li><NavLink to="/activities">Activities</NavLink></li>
                <li><NavLink to="/documents">Documents</NavLink></li>
                <li><NavLink to="/cyper">Cypher AI</NavLink></li>
              </ul>
              ) : null
            }
        </div>
    </>
  )
}

export default Navbar