import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../pages/AppCard/AppCard';

const Apps = () => {
    const apps = useLoaderData()
    return (
        <div className='p-[16px] sm:p-[20px] md:p-[40px] lg:p-[60px] xl:p-[70px] 2xl:p-[80px]'>

        <div className='pb-[12px] sm:pb-[16px] md:pb-[20px] lg:pb-[28px] xl:pb-[32px] 2xl:pb-[40px] text-center'>
                 <h1 className='text-[#001931] font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] pb-[4px] sm:pb-[6px] md:pb-[8px] lg:pb-[12px] xl:pb-[14px] 2xl:pb-[16px] '>Our All Applications</h1>
                 <p className='text-[#627382] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

             <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

                {apps.map(app => <AppCard key={app.id} app={app}></AppCard>)}

            </div>

        </div>
    );
};

export default Apps;