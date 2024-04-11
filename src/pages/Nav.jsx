import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { navigation } from "../utils/index";
import { MobileMenu } from "./Design/MobileHeader";
import MenuSvg from '../assets/MenuSvg';
import Motion from '../pages/Design/Motion'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { Link } from "react-router-dom";

const Nav = () => {
  const pathname= useLocation();
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    if(openNav) {
        setOpenNav(false);
        enablePageScroll();
    } else {
        setOpenNav(true);
        disablePageScroll();
    }
  }
  const handleClick = () => {
    setOpenNav(false);
    if (!openNav) return;
    enablePageScroll();
    setOpenNav(false);
  }

  return (
    <div className={`fixed top-0 left-0 z-50 w-full border-b
     border-neutral-900 lg:bg-[#111112]/90 lg:backdrop-blur-sm ${openNav ? 'bg-[#111112]' : 'bg-[#111112]/90 backdrop-blur-sm'}`}>
        <div className='flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-5'>
            <div>
                <a className='block w-[4rem] xl:mr-8 xl:pl-12 text-3xl font-bold text-[#00dc5d]' href='/'>
                    <Motion name="JO." />
                </a>
            </div>
            <div>
                <nav className={` ${openNav ? 'flex text-white' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 
                bg-[#111112] lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className='relative z-2 flex flex-col 
                    items-center justify-center m-auto lg:flex-row'>
                        {navigation.map((item) => (
                            <Motion name={
                            <Link
                               as={Link}
                               key={item.id} 
                               to={item.url}
                               onClick={handleClick}
                               className={`block relative text-2xl uppercase text-n-1 transition-colors hover:text-[#00dc5d] px-3 py-6 md:py-8 lg:-mr-0.25
                               lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-neutral-100' : 'lg:text-neutral-100/50'}
                               lg:leading-5 lg:hover:text-neutral-100 xl:px-6`}
                            >
                                {item.title}
                            </Link>
                            } />
                        ))}

                        
                    </div>
                    <MobileMenu />
                </nav>
            </div>

            <button className="ml-auto lg:hidden" onClick={toggleNav}>
                <MenuSvg openNavigation={openNav} />
            </button>

        </div>
        {/* <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Projects</li>
            <li className='p-4'>Resume</li>
            <li className='p-4'>Contact</li>
            <li className='p-4'>Blogs</li>
        </ul> */}
        {/* <div onClick={handleNav} className='block md:hidden'>
            {navValue ? <AiOutlineClose size={25} color='#00dc5d'/> : <TiThMenuOutline size={25} color='#00dc5d' />}
        </div> */}

        {/* <div className={navValue ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#111112] ease-in-out duration-700' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00dc5d] m-4'>JO.</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b-2 border-gray-700'>Home</li>
                <li className='p-4 border-b-2 border-gray-700'>Projects</li>
                <li className='p-4 border-b-2 border-gray-700'>Resume</li>
                <li className='p-4 border-b-2 border-gray-700'>Contact</li>
                <li className='p-4'>Blogs</li>
            </ul>
        </div> */}
    </div>
  )
}

export default Nav

