import React from 'react';
import googlePlayImg from '../../assets/google-play.png' ;
import appStoreImg from '../../assets/app-store.png'
import heroImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='px-[80px] pt-[80px] flex flex-col text-center justify-center items-center bg-[#f1ecec]'>
            <h1 className='text-[72px] font-bold text-[#001931]  leading-[1.2]'>
                We Build  <br/>
                <span className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps
            </h1>
            
            <div className='text-[#627382] text-[20px] mt-[16px]'>
        <p> At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting</p>
            <p> Our goal is to turn your ideas into digital experiences that truly make an impact. </p>
            </div>
            
            <div className='flex gap-4 my-[40px]'>
                <button className='py-[12px] px-[20px] flex items-center gap-[10px] text-[#001931] border-1 border-[#627382] rounded-[8px] bg-[#FFFFFF]'>
                    <img src={googlePlayImg} alt="" />
                    <p>Google Play</p>
                </button>
                <button className='py-[12px] px-[20px] flex items-center gap-[10px] text-[#001931] border-1 border-[#627382] rounded-[8px]'>
                    <img src={appStoreImg} alt="" />
                    <p>App Store</p>
                </button>
            </div>

            <div>
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;