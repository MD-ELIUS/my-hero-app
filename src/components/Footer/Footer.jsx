import React from "react";
import logoImg from "../../assets/logo.png"
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link, NavLink } from "react-router";


const Footer = () => {
  return (
    <footer className="bg-black text-[#eaeaea] py-[12px] sm:py-[14px] md:py-[16px] lg:py-[20px] xl:y-[28px] 2xl:py-[40px] px-[16px] sm:px-[20px] md:px-[40px] lg:px-[60px] xl:px-[70px] 2xl:px-[80px]  ">


    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-8 mb-4 sm:mb-6 md:mb-8 lg:mb-9 xl:mb-10 2xl:mb-10">
       
        <div className="flex flex-col md:text-left">
          <div className="flex gap-[4px] sm:gap-[6px] md:gap-[8px] lg:gap-[8px] xl:gap-[8px] 2xl:gap-[8px] mb-[8px] sm:mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[16px] items-center">
             <img className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 2xl:h-8 2xl:w-8" src={logoImg} alt="" />
             <p className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">Hero.io</p>
          </div>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]">Discover smart, elegant, and high-performing apps designed to make your digital experience smoother and more productive.</p>
       </div>

    <div className="flex flex-col justify-center md:text-center">
       <h3 className="mb-[8px] sm:mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[16px] bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold  text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">Important Links</h3>
       <div className="flex flex-col gap-2 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px]">
            <NavLink className='hover:text-[#632EE3]' to='/'>Home</NavLink>
         <NavLink className='hover:text-[#632EE3]' to='/apps'>Apps</NavLink>
          <NavLink className='hover:text-[#632EE3]' to='/installation'>Installation</NavLink>
       </div>
      
    </div>

   <div className="flex flex-col md:items-end md:text-right">
  <h3 className="mb-[8px] sm:mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[16px]  bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold  text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">Social Links</h3>

  <div className="flex flex-col gap-1 md:gap-2 w-fit text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px]">
    <Link to='https://www.facebook.com/' className="flex gap-1 md:gap-2 items-center md:justify-end hover:text-[#632EE3]">
      <Facebook className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[14px] lg:h-[14px] xl:w-[16px] xl:h-[16px] 2xl:w-[16px] 2xl:h-[16px]" />
      <p>Facebook</p>
    </Link>
    <Link to='https://x.com/?lang=en' className="flex gap-1 md:gap-2 items-center md:justify-end hover:text-[#632EE3]">
      <Twitter className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[14px] lg:h-[14px] xl:w-[16px] xl:h-[16px] 2xl:w-[16px] 2xl:h-[16px]" />
      <p>Twitter</p>
    </Link>
    <Link to='https://www.instagram.com/' className="flex gap-1 md:gap-2 items-center md:justify-end hover:text-[#632EE3]">
      <Instagram className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[14px] lg:h-[14px] xl:w-[16px] xl:h-[16px] 2xl:w-[16px] 2xl:h-[16px]" />
      <p>Instagram</p>
    </Link>
  </div>
</div>


    </div>

    <div className="pt-[12px] sm:pt-[14px] md:pt-[16px] lg:pt-[20px] xl:pt-[28px] 2xl:pt-[40px] text-center border-t-2 border-[#632EE3] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]">
      <p>
         © 2025 HERO.IO. Developed by <Link className="underline hover:text-[#632EE3]" to='https://github.com/MD-ELIUS'> Mohammad Elius </Link>. All rights reserved.
      </p>
    </div>
   
    
    </footer>
  );
};

export default Footer;
