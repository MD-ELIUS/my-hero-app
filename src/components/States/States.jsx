import React from 'react';

const States = () => {
    return (
        <div className='p-[16px] sm:p-[20px] md:p-[40px] lg:p-[60px] xl:p-[70px] 2xl:p-[80px] bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] flex flex-col text-center justify-center items-center '>
            <h2 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] font-bold text-[#FFFFFF] mb-[10px] sm:mb-[15px] md:mb-[20px] lg:mb-[30px] xl:mb-[35px] 2xl:mb-[40px]'>Trusted by Millions, Built for You</h2>
            
            <div className='flex justify-center items-center gap-[16px] sm:gap-[32px] md:gap-[64px] lg:gap-[96px] xl:gap-[128px] 2xl:gap-[160px] '>
                <div className='flex flex-col '>
                    <p className='text-[#FFFFFF]/80 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]'>Total Downloads</p>
                    <h2 className='font-extrabold text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] text-[#FFD700]'>29.6M</h2>
                    <p className='text-[#FFFFFF]/80 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]'>21% more than last month</p>
                </div>

                  <div className='flex flex-col '>
                    <p className='text-[#FFFFFF]/80 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]'>Total Reviews</p>
                    <h2 className='font-extrabold text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] text-[#00FFFF]'>906K</h2>
                    <p className='text-[#FFFFFF]/80 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]'>46% more than last month</p>
                </div>

                  <div className='flex flex-col '>
                    <p className='text-[#FFFFFF]/80 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]'>Active Apps</p>
                    <h2 className='font-extrabold text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] text-[#ec2863]'>132+</h2>
                    <p className='text-[#FFFFFF]/80 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default States;