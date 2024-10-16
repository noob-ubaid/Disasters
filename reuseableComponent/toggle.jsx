import React, { useState } from 'react'

const Navbar = () => {
    const [isMenu,setIsMenu] = useState(false);
    const toggleMenu = () => {
        setIsMenu(!isMenu)
    }
  return (
    <>
        <nav className=' max-w-[88%] p-2 mx-auto'>
            <div className='flex items-center justify-between'>
                <img src="Img/logo.png" alt="" />

                <div onClick={toggleMenu}>
                    
                </div>


                <ul className='md:flex hidden gap-7 font-semibold'>
                    
                    <li>
                        <a href="">Used Cars</a>
                    </li>
                    <li>
                        <a href="">Auctions</a>
                    </li>
                    <li>
                        <a href="">New Cars</a>
                    </li>
                    <li>
                        <a href="">Sell cars</a>
                    </li>
                    <li>
                        <a href="">Local Dealers</a>
                    </li>
                    <li>
                        <a href="">Support</a>
                    </li>
                    <li className='ml-2'>
                        <a  className='text-[#9A9EA7] flex gap-2 items-center' href="">
                        <i class="fa-solid bg-gray-200 text-[12px] py-2 px-1.5 rounded-lg fa-user "></i>
                        <span>Sign Up</span>
                        </a>
                    </li>
                </ul>
            </div>
        {/* mobile menu */}
            {isMenu ? (
                <ul className='flex gap-3 w-full h-screen text-center flex-col md:hidden  font-semibold'>
            
                <li>
                    <a href="">Used Cars</a>
                </li>
                <li>
                    <a href="">Auctions</a>
                </li>
                <li>
                    <a href="">New Cars</a>
                </li>
                <li>
                    <a href="">Sell cars</a>
                </li>
                <li>
                    <a href="">Local Dealers</a>
                </li>
                <li>
                    <a href="">Support</a>
                </li>
                <li className=' mx-auto'>
                    <a  className='text-[#9A9EA7] flex gap-2 items-center' href="">
                    <i class="fa-solid bg-gray-200 text-[12px] py-2 px-1.5 rounded-lg fa-user "></i>
                    <span>Sign Up</span>
                    </a>
                </li>
            </ul>
            ):null}
        </nav>
    </>
  )
}
