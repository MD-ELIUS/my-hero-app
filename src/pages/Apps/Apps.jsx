import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../pages/AppCard/AppCard';
import { OctagonX } from 'lucide-react';

const Apps = () => {
  const apps = useLoaderData();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchApps, setSearchApps] = useState(apps);


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setLoading(true);


    setTimeout(() => {
      const term = value.trim().toLowerCase();
      const filtered = term
        ? apps.filter((app) => app.title.toLowerCase().includes(term))
        : apps;
      setSearchApps(filtered);
      setLoading(false);
    }, 400);
  };

  return (
    <div className='p-[16px] sm:p-[20px] md:p-[40px] lg:p-[60px] xl:p-[70px] 2xl:p-[80px]'>

     
      <div className='pb-[12px] sm:pb-[16px] md:pb-[20px] lg:pb-[28px] xl:pb-[32px] 2xl:pb-[40px] text-center'>
        <h1 className='text-[#001931] font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] pb-[4px] sm:pb-[6px] md:pb-[8px] lg:pb-[12px] xl:pb-[14px] 2xl:pb-[16px]'>Our All Applications</h1>
        <p className='text-[#627382] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

     
      <div className='flex justify-between items-center font-semibold pb-[4px] sm:pb-[6px] md:pb-[8px] lg:pb-[12px] xl:pb-[14px] 2xl:pb-[16px]'>
        <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]'>
          ({searchApps.length}) Apps Found
        </p>
        <div>
          <label className="flex items-center border border-[#186ab1] rounded-md px-3 py-2">
            <svg
              className="h-5 w-5 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search Apps"
              value={search}
              onChange={handleSearch}
              className="flex-1 ml-2 text-[14px] outline-none"
            />
          </label>
        </div>
      </div>

    
      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="w-12 h-12 border-4 border-[#00D390] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : searchApps.length ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {searchApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center text-center'>
          <OctagonX className='h-10 w-10' />
          <h1 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] font-bold text-[#001931] mt-4 text-center'>
            No App Found
          </h1>
        </div>
      )}

    </div>
  );
};

export default Apps;
