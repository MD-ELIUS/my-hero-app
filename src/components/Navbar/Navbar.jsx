import React, { useState } from 'react';
import logoImg from '../../assets/logo.png'
import gitLogo from '../../assets/github-logo.png'
import { Link, NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';
import './Navbar.css'


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='px-[16px] sm:px-[20px] md:px-[40px] lg:px-[60px] xl:px-[70px] 2xl:px-[80px] py-[8px] sm:py-[12px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[16px] flex justify-between items-center relative'>
            <div className='flex items-center gap-2'>
                  <img className='h-[24px] w-[24px] sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px] lg:h-[36px] lg:w-[36px] xl:h-[38px] xl:w-[38px] 2xl:h-[40px] 2xl:w-[40px]' src={logoImg} alt="" />
                  <h4 className='text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>HERO.IO</h4>
            </div>

          <nav className={`md:flex md:gap-[32px] items-center absolute md:static bg-white md:bg-transparent
    top-full left-0 w-full md:w-auto transition-all duration-300 ease-in-out shadow-md md:shadow-none
     ${menuOpen ? 'block' : 'hidden'}`}>
  <div className="px-[16px] sm:px-[20px] md:px-0 py-2 md:py-0 flex flex-col md:flex-row gap-2 md:gap-[32px]">
    <NavLink to='/' className='block py-2 md:py-0'>Home</NavLink>
    <NavLink to='/apps' className='block py-2 md:py-0'>Apps</NavLink>
    <NavLink to='/installation' className='block py-2 md:py-0'>Installation</NavLink>
  </div>
</nav>


            <div className='md:hidden'>
                {
                    menuOpen ? ( <X onClick={() => setMenuOpen(false)} className='h-6 w-6 cursor-pointer '/>) : 
                    (<Menu onClick={() => setMenuOpen(true)} className='h-6 w-6 cursor-pointer'/>)
                }

            </div>
            
            <Link to='https://github.com/MD-ELIUS' className='flex gap-[4px] sm:gap-[6px] md:gap-[8px] lg:gap-[9px] xl:gap-[9px] 2xl:gap-[10px] bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] rounded-[8px] px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-3.5 lg:py-2.5 xl:px-3.5 xl:py-2.5 2xl:px-4 2xl:py-3 items-center' >
                <img className='h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] md:h-[16px] md:w-[16px] lg:h-[18px] lg:w-[18px] xl:h-[19px] xl:w-[19px] 2xl:h-[20px] 2xl:w-[20px]' src={gitLogo} alt="" />
                <p className='font-semibold text-[#FFFFFF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] '>Contribute</p>
            </Link>
            
            
        </div>
    );
};

export default Navbar;

