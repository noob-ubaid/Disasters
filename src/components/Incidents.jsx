import React ,{useState} from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import card from './common/card.json'
import Button from './common/Button'
const Incidents = () => {
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
                <p className='font-onest text-[12px] text-[#71717A]'>Home - Incidents</p>
                <h2 className='text-[#09090B] font-bold sm:text-[26px] text-[16px] font-onest'>Incidents</h2>
              </div>  

              <div className='flex items-center gap-2 sm:mt-0 mt-2 sm:gap-[14px]'>
                <Button className='flex bg-white rounded p-2 sm:py-[17px] py-3 items-center gap-1 sm:gap-2'><i class="fa-solid text-[10px] sm:text-[12px] text-[#71717A] fa-magnifying-glass"></i>
                  <span className='sm:text-[12px] text-[10px] text-[#A1A1AA] font-onest'>Search incident</span>
                </Button>

                <Button className='sm:py-[17px] sm:text-[12px] text-[10px] py-3 font-normal bg-white text-[#A1A1AA] px-2 sm:px-[10px]'>Sort By: Date modified </Button>
                <button onClick={() => navigate("/getstarted")} className='btn flex cursor-pointer items-center gap-1 sm:py-[14px] py-1 px-2 sm:px-[23px]'> <span className='text-[16px] '>+</span>
                  New Incident
                </button>
              </div>  
            </div>
            {
              isMenu ? (
                <ul className='flex flex-col p-6 w-full z-50 overflow-y-hidden h-screen bg-secondary items-start gap-7 sm:gap-[35px] font-onest text-[14px] text-[#A1A1AA]'>
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink  to="/incidients">Incidents</NavLink></li>
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


    </>
  )
}

export default Incidents