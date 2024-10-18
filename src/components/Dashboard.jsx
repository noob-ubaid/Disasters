import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import card from './common/card.json'
import Button from './common/Button'
import {cn} from './common/index' 
function Dashboard() {
  const [isMenu,setIsMenu] = useState(false)
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  }


  const [isOpen,setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
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
              {isMenu ? (<i  class='fa-solid md:hidden block ml-2 text-[15px] fa-xmark'></i>) : (<i class='fa-solid md:hidden block ml-2 text-[15px] fa-bars'></i>)}
              </div>
            </div>


            <div className='flex sm:flex-row flex-col  items-center lg:px-[85px] lg:py-[23px] md:px[60px] md:py-[18px] px-4 py-3 justify-between'>
              <div>
                <p className='font-onest text-[12px] text-[#71717A]'>Welcome back</p>
                <h2 className='text-[#09090B] font-bold sm:text-[26px] text-[16px] font-onest'>Dashboard</h2>
              </div>  

              <div className='flex items-center gap-2 sm:mt-0 mt-2 sm:gap-[14px]'>
                <Button className='flex bg-white rounded p-2 sm:py-[17px]  items-center gap-1 sm:gap-2'><i class="fa-solid text-[10px] sm:text-[12px] text-[#71717A] fa-magnifying-glass"></i>
                  <span className='sm:text-[12px] text-[10px] text-[#A1A1AA] font-onest'>Search incident</span>
                </Button>

                <Button className='sm:py-[17px] py-2 font-normal bg-white text-[#A1A1AA] px-2 sm:px-[10px]'>Sort By: Date modified </Button>
                <Button className="sm:py-[17px] py-2 px-2 sm:px-[25px]">Cypher Ai</Button>
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


        <div className='flex items-center justify-center flex-wrap  lg:px-[50px] lg:py-[40px] md:px-[30px] md:py-[20px] px-[20px] py-[15px] lg:gap-8  md:gap-[25px]'>
            {
              card.map((data) => (
                <div key={data.id} className='md:w-[306px] relative sm:mt-0 mt-7  flex flex-col md:h-[337px] '>
                  <img className='md:w-full md:h-full w-72 h-60 ml-1' src={data.img} alt="" />
                  <h3 className='text-[#09090B] ml-1 mt-2 text-[16px] font-onest font-bold'>{data.title}</h3>
                  <p className='text-[#71717A] ml-1 font-onest text-[14px]'>{data.location}</p>
                  <p className='font-onest font-bold ml-1 mt-1 text-[16px] text-[#09090B]'>{data.price}</p>
                  <div className='flex items-center absolute top-3 right-3 gap-1 bg-white p-2 rounded-full'>
                    <img src="img/rain.png" alt="" />
                    <h4 className='text-xs font-onest font-bold '>Blizzard</h4>
                  </div>
                </div>
              ))
            }
        </div>
          

          <div className='relative'>
            

            {isOpen ? (
                <div className='flex justify-end'>
                    <div className='z-50 flex flex-col absolute right-10 -top-[420px] md:-top-[450px] md:right-24 rounded-md w-[330px] bg-secondary h-[450px]'>
                        <h3 className='font-bold text-[18px] text-white bg-primary w-full rounded-t-md p-4 font-onest'>Chat with Cypher</h3>
                      <div className='flex justify-end'>
                          <p className='font-onest bg-[#3F3F46] p-2 w-[200px] text-start mt-4 mx-4 rounded-md text-white text-[12px]'>Lorem ipsum dolar sit general sac mascho werho</p>
                      </div>
                        <p className='font-onest mt-4 mx-4 border border-gray-300 text-start p-2 w-[200px] rounded-md text-black text-[12px]'>Lorem ipsum dolar sit general sac mascho werho</p>
                        <p className='font-onest mt-4 mx-4 border border-gray-300 p-2 w-[200px]  rounded-md text-black text-[12px]'>Lorem ipsum dolar sit general sac mascho werho</p>
                        <div className='flex justify-end'>
                          <p className='font-onest mt-4 mx-4  bg-[#3F3F46] p-2 w-[200px] rounded-md text-white text-[12px]'>Lorem ipsum dolar sit general sac mascho werho</p>
                        </div>
                        <input className='  bg-transparent mt-4  border font-onest rounded-md border-gray-400 mx-3 p-2 top-[350px]' placeholder='Enter your question...' type="text"/>
                        <div className='flex items-center mx-3 mt-1 justify-between'>
                            <img src="img/whatsapp.png" alt="" />
                            <button className='bg-primary py-2 px-3 text-white font-onest rounded-full mt-2'>Send</button>
                        </div>
                  </div>
                </div>
                
              ) : null
            }

            <div   className='flex md:mt-0 mt-10 mb-10 justify-end'>
                <button onClick={toggleOpen} >{ isOpen ? (<i  class='fa-solid text-[33px] bg-white shadow-xl p-2.5 rounded-full mr-[100px] fa-xmark'></i>) : (<img className='w-14 mr-24 h-14'  src='img/c.png' alt='' />)}</button>
            </div>
          </div>

          
    </>
  )
}

export default Dashboard