import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './common/Button'
const card = [
  {
    img:"img/day.png",
    title:"Whitechapel Rd.",
    description:"Tulare County,  Los Angles, CA 23415",
    price:"$1,456,654.00",
    id:"1"
  },

  {
    img:"img/night.png",
    title:"Whitechapel Rd.",
    description:"Tulare County,  Los Angles, CA 23415",
    price:"$1,456,654.00",
    id:"2"
  },

  {
    img:"img/day.png",
    title:"Whitechapel Rd.",
    description:"Tulare County,  Los Angles, CA 23415",
    price:"$1,456,654.00",
    id:"3"
  },

  {
    img:"img/day.png",
    title:"Whitechapel Rd.",
    description:"Tulare County,  Los Angles, CA 23415",
    price:"$1,456,654.00",
    id:"4"
  },
]
const Location = () => {
  const [isMenu,setIsMenu] = useState(false)
  const toggleMenu = () => {
    setIsMenu(!isMenu)
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


            <div className='flex sm:flex-row flex-col  items-center lg:px-[85px] lg:py-[23px] md:px[60px] md:py-[18px] px-4 py-3 justify-between'>
              <div>
                <p className='font-onest text-[12px] text-[#71717A]'>Incidents - DR-4699 March 2023 Severe Storms </p>
                <div className='text-[#09090B] font-bold mt-1 flex items-center gap-2 sm:text-[26px] text-[16px] font-onest'>
                  <img src="img/storm.png" alt="" />
                  <h2> DR-4699 March 2023 Severe Storms</h2></div>
              </div>  

              <div className='flex items-center gap-2 sm:mt-0 mt-2 sm:gap-[14px]'>
                <Button className='flex bg-white rounded p-2 sm:py-[17px]  items-center gap-1 sm:gap-2'><i class="fa-solid text-[10px] sm:text-[12px] text-[#71717A] fa-magnifying-glass"></i>
                  <span className='sm:text-[12px] text-[10px] text-[#A1A1AA] font-onest'>Search incident</span>
                </Button>

                <Button className='sm:py-[17px] p-2 font-normal bg-white text-[#A1A1AA] px-2 sm:px-[10px]'>Sort By: Date modified </Button>
                <button className='btn sm:py-[17px] sm:px-[25px]'>+ New Location</button>
              </div>  
            </div>
      </div>




      {/* hero section start */}
      <div className='flex items-start md:flex-row flex-col md:mx-0 mx-5 gap-10 justify-between lg:px-[50px] md:px-[30px] md:py-10 py-7'>
        {/* left side */}
            <div >
              <div className='flex flex-col gap-4'>
                  <div className='flex items-center  gap-2'>
                      <img src="img/location.png" alt="" />
                      <div>
                        <p className='text-[#6B7280] text-[14px ]'>Location</p>
                        <h3 className='text-[20px] font-onest font-bold'>Tulare County,  Los Angles, CA 23415</h3>
                      </div>
                    </div>


                    <div className='flex items-center  w-full border-b border-b-gray-300 pb-8 gap-2'>
                      <img src="img/cost.png" alt="" />
                      <div>
                        <p className='text-[#6B7280] text-[14px ]'>Approx Cost</p>
                        <h3 className='text-[20px] font-onest font-bold'>$60,607,456.00</h3>
                      </div>
                  </div>

                  <div className='border-b border-b-gray-300 pb-8'>
                    <h3 className='text-[14px] font-bold font-onest mb-2'>Description</h3>
                    <p className='font-onest text-[16px] w-full  md:w-[600px] text-[#71717A]'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
                  </div>

                  <div className='flex items-center justify-between'>
                    <h3 className='text-[14px] font-bold font-onest mb-2'>Locations</h3>
                    <p className='text-[14px] font-onest text-[#A1A1AA] underline'>See All</p>
                  </div>


                  {/* card section */}
                  <div className='flex items-center md:justify-start border-b border-b-gray-300 pb-8 justify-center '>
                    <div className='flex justify-center md:justify-between gap-2 flex-wrap items-center '>
                          {
                            card.map((data) =>(
                              <div key={data.id} className='relative mt-3'>
                                <img src={data.img} alt="" />
                                <h3 className='text-[14px] font-bold '>{data.title}</h3>
                                <p className='font-onest w-[200px] text-[12px] text-[#71717A]'>{data.description}</p>
                                <h3 className='text-[14px] font-bold '>{data.price}</h3>
                                <div className='flex items-center top-3 absolute right-3 gap-1 p-2 bg-white rounded-full'>
                                  <img src="img/small.png" alt="" />
                                  <p className='font-bold font-onest text-[10px]'>Building</p>
                                </div>
                              </div> 
                            ))
                          }
                    </div> 
                  </div>
                  {/* card section end */}

                  <div className='flex items-center justify-between'>
                    <h3 className='text-[14px] font-bold font-onest mb-2'>Activities</h3>
                    <p className='text-[14px] font-onest text-[#A1A1AA] underline '>See All</p>
                  </div>

                  {/* activites section start */}
                  <div className='flex flex-col border-b border-b-gray-300 pb-8 gap-4 '>
                      <div className='flex items-center gap-4 bg-[#F4F4F5] rounded-md p-3'>
                        <img className='w-[78px] rounded-md h-[78px] object-cover' src="img/day.png" alt="" />
                        <div className='flex flex-col gap-2'>
                          <h3 className='font-bold font-onest text-[16px]'>Activity name</h3>
                          <p className='text-[#A1A1AA] text-[14px] font-onest'>Location Name - 16.12212, -122.1424</p>
                          <h3 className='font-bold font-onest text-[16px]'>$1,456,654.00</h3>
                        </div>
                      </div>


                      <div className='flex items-center gap-4 bg-[#F4F4F5] rounded-md p-3'>
                  <img className='w-[78px] rounded-md h-[78px] object-cover' src="img/day.png" alt="" />
                  <div className='flex flex-col gap-2'>
                    <h3 className='font-bold font-onest text-[16px]'>Activity name</h3>
                    <p className='text-[#A1A1AA] text-[14px] font-onest'>Location Name - 16.12212, -122.1424</p>
                    <h3 className='font-bold font-onest text-[16px]'>$1,456,654.00</h3>
                  </div>
                </div>

                      
                  </div>
                  <div/>
                  {/* activites section end */}
                    

                  <div className='flex items-center justify-between'>
                    <h3 className='text-[14px] font-bold font-onest mb-2'>Documents</h3>
                    <p className='text-[14px] font-onest text-[#A1A1AA] underline '>See All</p>
                  </div>


                  {/* activites section start */}
                  <div className='flex flex-col gap-4 '>
                      <div className='flex items-center gap-4 bg-[#F4F4F5] rounded-md p-3'>
                        <img className='w-[78px] rounded-md h-[78px] object-cover' src="img/day.png" alt="" />
                        <div className='flex flex-col gap-2'>
                          <h3 className='font-bold font-onest text-[16px]'>Document name</h3>
                          <p className='text-[#A1A1AA] text-[14px] font-onest'>Location Name - 16.12212, -122.1424</p>
                          <h3 className='font-bold font-onest text-[16px]'>$1,456,654.00</h3>
                        </div>
                      </div>


                      <div className='flex items-center gap-4 bg-[#F4F4F5] rounded-md p-3'>
                  <img className='w-[78px] rounded-md h-[78px] object-cover' src="img/day.png" alt="" />
                  <div className='flex flex-col gap-2'>
                    <h3 className='font-bold font-onest text-[16px]'>Document name</h3>
                    <p className='text-[#A1A1AA] text-[14px] font-onest'>Location Name - 16.12212, -122.1424</p>
                    <h3 className='font-bold font-onest text-[16px]'>$1,456,654.00</h3>
                  </div>
                </div>

                      
                  </div>
                  <div/>
                  {/* activites section end*/}






              </div>


            </div>

            {/* right side */}
            <div>
              <p className='text-[14px] font-onest text-[#71717A] mb-4 md:mt-0 mt-4'> Incident Map</p>
              <img src="img/mainmap.png" alt="" />
              <p className='text-[14px] font-onest text-[#71717A] mt-4'> Start 19.1232, -118.233     End 19.3245, -119.2323</p>
            </div>

      </div>
    </>
  )
}

export default Location