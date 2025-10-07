import React, { useState } from 'react';
import logoImg from '../../assets/logo.png'
import gitLogo from '../../assets/github-logo.png'
import { Link, NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';
import './Navbar.css'


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] py-[16px] flex justify-between items-center relative'>
            <div className='flex items-center gap-2'>
                  <img className='h-[40px] w-[40px]' src={logoImg} alt="" />
                  <h4 className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>HERO.IO</h4>
            </div>

            <nav className={`md:flex gap-[32px] items-center absolute md:static bg-white md:bg-transparent top-[70px] left-0 w-full md:w-auto p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'}`}>
                 <NavLink to='/' className='block py-2 md:py-0' >Home</NavLink>
                 <NavLink to='/apps' className='block py-2 md:py-0'  >Apps</NavLink>
                 <NavLink to='/installation' className='block py-2 md:py-0' >Installation</NavLink>
            </nav>

            <div className='md:hidden'>
                {
                    menuOpen ? ( <X onClick={() => setMenuOpen(false)} className='h-6 w-6 cursor-pointer '/>) : 
                    (<Menu onClick={() => setMenuOpen(true)} className='h-6 w-6 cursor-pointer'/>)
                }

            </div>
            
            <Link to='https://github.com/MD-ELIUS' className='flex gap-[6px] md:gap-[10px] bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] rounded-[8px] px-2 py-1  md:px-3 md:py-2 lg:px-4 lg:py-3 items-center' >
                <img className=' h-[15px] w-[15px] md:h-[20px] md:w-[20px]' src={gitLogo} alt="" />
                <p className='font-semibold text-[#FFFFFF]'>Contribute</p>
            </Link>
            
            
        </div>
    );
};

export default Navbar;

