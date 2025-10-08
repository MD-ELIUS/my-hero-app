import React from 'react';
import AppCard from '../../pages/AppCard/AppCard';

const TopApps = ({apps}) => {

    const featureApps = apps.filter(app => app.feature)
    return (
        <div className='p-[16px] sm:p-[20px] md:p-[40px] lg:p-[60px] xl:p-[70px] 2xl:p-[80px]  bg-[#f1ecec]'>
            <h1 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] font-bold text-[#001931] mb-[4px] sm:mb-[6px] md:mb-[8px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] text-center '>Trending Apps</h1>
            <p className='text-[#627382] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] mb-[10px] sm:mb-[15px] md:mb-[20px] lg:mb-[30px] xl:mb-[35px] 2xl:mb-[40px] text-center'>Explore All Trending Apps on the Market developed by us</p>

            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

                {featureApps.map(app => <AppCard key={app.id} app={app}></AppCard>)}

            </div>
          <div className='flex justify-center mt-[16px] sm:mt-[24px] md:mt-[32px] lg:mt-[36px] xl:mt-[40px] 2xl:mt-[40px]'>
               <button className='px-[16px] py-[8px] sm:px-[24px] sm:py-[10px] md:px-[32px] md:py-[12px] lg:px-[36px] lg:py-[14px] xl:px-[40px] xl:py-[15px] 2xl:px-[40px] 2xl:py-[15px] bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-[#FFFFFF] font-semibold rounded-[8px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]'>
                Show All
            </button>
          </div>
            
        </div>
        
    );
};

export default TopApps;