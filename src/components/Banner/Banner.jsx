import React from 'react';
import googlePlayImg from '../../assets/google-play.png' ;
import appStoreImg from '../../assets/app-store.png'
import heroImg from '../../assets/hero.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='px-[16px] sm:px-[20px] md:px-[40px] lg:px-[60px] xl:px-[70px] 2xl:px-[80px] pt-[16px] sm:pt-[20px] md:pt-[40px] lg:pt-[60px] xl:pt-[70px] 2xl:pt-[80px] flex flex-col text-center justify-center items-center bg-[#f1ecec]'>
            <h1 className='text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[64px] 2xl:text-[72px] font-bold text-[#001931]  leading-[1.2]'>
                We Build  <br/>
                <span className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps
            </h1>
            
            <div className='text-[#627382] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] mt-[12px] sm:mt-[14px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] px-[16px] sm:px-[32px] md:px-[64px] lg:px-[96px] xl:px-[128px] 2xl:px-[160px]'>
        <p> At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
             Our goal is to turn your ideas into digital experiences that truly make an impact. </p>
            </div>
            
            <div className='flex gap-4 my-[10px] sm:my-[15px] md:my-[20px] lg:my-[30px] xl:my-[35px] 2xl:my-[40px]'>
                <Link to='https://play.google.com/store/apps?hl=en'  className='py-[6px] px-[10px] sm:py-[7px] sm:px-[12px] md:py-[8px] md:px-[14px] lg:py-[10px] lg:px-[16px] xl:py-[11px] xl:px-[18px] 2xl:py-[12px] 2xl:px-[20px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-[4px] sm:gap-[6px] md:gap-[8px] lg:gap-[9px] xl:gap-[9px] 2xl:gap-[10px] text-[#001931] border-1 border-[#627382] rounded-[8px] bg-[#FFFFFF] font-bold' >
                 <img className='h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] md:h-[20px] md:w-[20px] lg:h-[22px] lg:w-[22px] xl:h-[24px] xl:w-[24px] 2xl:h-[32px] 2xl:w-[32px]'  src={googlePlayImg} alt="" />
                 <p>Google Play</p>
                </Link>

                <Link to='https://www.apple.com/app-store/'  className='py-[6px] px-[10px] sm:py-[7px] sm:px-[12px] md:py-[8px] md:px-[14px] lg:py-[10px] lg:px-[16px] xl:py-[11px] xl:px-[18px] 2xl:py-[12px] 2xl:px-[20px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-[4px] sm:gap-[6px] md:gap-[8px] lg:gap-[9px] xl:gap-[9px] 2xl:gap-[10px] text-[#001931] border-1 border-[#627382] rounded-[8px] font-bold' >
                    <img className='h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] md:h-[20px] md:w-[20px] lg:h-[22px] lg:w-[22px] xl:h-[24px] xl:w-[24px] 2xl:h-[32px] 2xl:w-[32px]' src={appStoreImg} alt="" />
                    <p>App Store</p>
                </Link>
           
                
            </div>

            <div className='overflow-hidden'>
                <img className='h-[200px] w-[400px] sm:h-[250px] sm:w-[500px] md:h-[300px] md:w-[600px] lg:h-[350px] lg:w-[700px] xl:h-[400px] xl:w-[800px] 2xl:h-[450px] 2xl:w-[900px] max-w-full' src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;