import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const Incidenttitle = () => {
  const [isMenu,setIsMenu] = useState(false)
  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }
  const navigate = useNavigate();
  
  return (
    <>
        <div className='bg-secondary p-2'>
            <div className='flex items-center md:px-[50px] md:py-[13px] px-[11px] py-[7px] lg:px-[85px] lg:py-[25px] border-b border-b-[#3F3F46] justify-between'>
              <img className='sm:w-[132px] sm:h-[37px] w-[120px] h-[28px]' src="img/logo.png" alt="" />

              <ul className='md:flex hidden items-center gap-[35px] font-onest text-[14px] text-[#A1A1AA]'>
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink className="active" to="/incidients">Incidents</NavLink></li>
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
              {isMenu ? (<i  class='fa-solid md:hidden block ml-2 text-[15px] fa-xmark'></i>) : (<i class='fa-solid md:hidden block ml-2 text-[15px] fa-bars'></i>)}
              </div>
            </div>


            <div className='flex sm:flex-row flex-col  items-center lg:px-[85px] lg:py-[23px] md:px[60px] md:py-[18px] px-4 py-3 justify-between'>
              <div className='flex items-center gap-3'>
                <img className='w-[41px] h-[41px]' src="img/cross.png" alt="" />
                  <div>
                    <p className='font-onest text-[12px] text-[#71717A]'>Home - Incidents - New Incident</p>
                    <h2 className='text-[#09090B] font-bold sm:text-[26px] text-[16px] font-onest'>New Incident</h2>
                  </div> 
              </div> 

              <div className='md:w-[430px] sm:mt-0 mt-3 w-[90%] rounded-lg bg-white h-[2px]'>
                <div className='w-[30%] rounded-lg bg-primary h-full'></div>
              </div>

              <div className='flex items-center sm:mt-0 mt-3 gap-2  sm:gap-[14px]'>
                <button onClick={() => navigate("/describeincidents")} className='font-bold font-onest text-[#71717A] text-[12px]  bg-white py-3 px-[50px] rounded-md'>Back</button>
                <button onClick={() => navigate("/gps")} className='font-bold font-onest text-white text-[12px]  bg-primary py-3 px-[41px] rounded-md'>Next step</button>
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


        <div className='flex mt-10  justify-center'>
            <div className='md:mx-0 mx-5'>
                <h3 className='text-[#09090B]  text-[24px] font-bold font-onest'>Let’s give the incident a title?</h3>
                <p className='text-[#71717A] mt-2 font-onest text-[14px] '>Make a title that will easily identify the incidents</p>
                <input className='bg-secondary mt-2 font-onest w-full p-2 rounded-md'placeholder='Add title here' type="text" />
                <h3 className='text-[#09090B] mt-2 text-[24px] font-bold font-onest'>Describe what happened during the incident?</h3>
                <p className='text-[#71717A] mt-2 font-onest text-[14px] '>Share some information about the incident. The when, where, how. </p>
                <input className='bg-secondary mt-2 font-onest h-[100px] w-full rounded-md p-2'placeholder='Type here' type="text" />
            </div>
        </div>
       
    </>
  )
}

export default Incidenttitle