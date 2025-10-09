import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApps } from '../addToDB/addToDb';
import InstalledAppCard from '../InstalledAppCard/InstalledAppCard';
import { removeToInstalledAppsData } from '../removeToDB/removeToDB';

const Installation = () => {

    const installedAppsData = useLoaderData() ;
    const [installedApps, setInstalledApps] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
    
 const handleRemoveBtn = (id) => {
    removeToInstalledAppsData(id)
    setInstalledApps(prev => prev.filter(p => p.id !== id))
}

    useEffect(() => {

         const storedInstalledApps = getInstalledApps();
          const convertedStoredInstalledApps = storedInstalledApps.map(id => parseInt(id));
          const myInstalledApps = installedAppsData.filter(a => convertedStoredInstalledApps.includes(a.id)); 
          console.log(myInstalledApps);
          console.log(convertedStoredInstalledApps);
          setInstalledApps(myInstalledApps)
    },[installedAppsData])

    const sortedItem = (() => {
        if(sortOrder === 'download-asc') {
            return [...installedApps].sort((a,b) => a.downloads -b.downloads)
        }
        else if (sortOrder === 'download-desc') {
            return [...installedApps].sort((a,b) => b.downloads - a.downloads)
        }

        else {return installedApps} 

    }
)()

    return (
        <div className='min-h-[calc(100vh-200px)] p-[16px] sm:p-[20px] md:p-[40px] lg:p-[60px] xl:p-[70px] 2xl:p-[80px] bg-[#f1ecec]'>

             <div className='pb-[12px] sm:pb-[16px] md:pb-[20px] lg:pb-[28px] xl:pb-[32px] 2xl:pb-[40px] text-center'>
                 <h1 className='text-[#001931] font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] pb-[4px] sm:pb-[6px] md:pb-[8px] lg:pb-[12px] xl:pb-[14px] 2xl:pb-[16px] '>Your Installed Apps</h1>
                 <p className='text-[#627382] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                  <div className='flex justify-between items-center font-semibold pb-[4px] sm:pb-[6px] md:pb-[8px] lg:pb-[12px] xl:pb-[14px] 2xl:pb-[16px]'>
                <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]'>({sortedItem.length}) Apps Found</p>
                <div>
                    
                 <label className='form-control w-full max-w-xs'>
                     <select className='select select-bordered' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                    <option value='none'>Sort by downloads</option>
                    <option value='download-asc'>Low-&gt;High</option>
                    <option value='download-desc'>High-&gt;Low</option>
                  </select>
                 </label>
            </div>
            </div>


            <div className='mt-[4px] sm:mt-[6px] md:mt-[8px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[16px]'>

                {
                    sortedItem.map(installedApp => <InstalledAppCard key={installedApp.id} installedApp={installedApp}  handleRemoveBtn={ handleRemoveBtn}></InstalledAppCard>)
                }
                
            </div>

           
        </div>
    );
};

export default Installation;