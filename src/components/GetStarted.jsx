import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
const card =[
    {
        img:"img/fan.png",
        title:"What type of incident?",
        description:"Choose the category that best describes the incident.",
        id:"1"
    },

    {
        img:"img/Frame (1).png",
        title:"Tell us about the incident?",
        description:"Let’s connect the dots and see where to start.",
        id:"2"
    },

    {
        img:"img/Vector.png",
        title:"Where did the incident occur?",
        description:"Lorem ipsum dolar sit general sac mascho werho",
        id:"3"
    }
]

const Navbar = () => {
  const [isMenu,setIsMenu] = useState(false)
  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }
  const navigate = useNavigate()
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
              {/* <i class="fa-solid md:hidden block ml-2 text-[15px] fa-bars"></i> */}
              {isMenu ? (<i  class='fa-solid md:hidden block ml-2 text-[15px] fa-xmark'></i>) : (<i class='fa-solid md:hidden block ml-2 text-[15px] fa-bars'></i>)}
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

        <div className='flex items-center md:mt-[85px] mt-10 flex-col justify-center text-[32px]'>
            <h2 className='font-onest font-bold '>Let’s get started</h2>
            <p className='font-onest text-[16px] text-center mt-2 sm:w-[468px] text-[#71717A]'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
            <img className='my-4 md:w-[600px] w-[90%]' src="img/progress.png" alt="" />
            <div className='flex items-center md:flex-row mt-4 flex-col gap-11 '>
                {
                    card.map((data) =>(
                        <div className='w-[235px] bg-[#F4F4F5] rounded-md h-[270px] '>
                            <img className='pt-[25px] pl-5 pb-[68px]' src={data.img} alt="" />
                            <h3 className='text-[20px] font-onest pl-5 font-bold text-[#09090B]'>{data.title}</h3>
                            <p className='text-[#71717A] pl-5 mt-2 text-[14px] font-onest'>{data.description}</p>
                        </div>
                    ))
                }
            </div>
            <button  onClick={() => navigate("/describeincidents")} className='bg-primary py-2 px-4 rounded-md text-[12px] md:mt-16 mt-10 font-bold text-white'>Get started</button>
            
        </div>
    </>
  )
}

export default Navbar