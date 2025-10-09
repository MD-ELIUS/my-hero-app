import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png';
import starIcon from '../../assets/icon-ratings.png';
import likeIcon from '../../assets/icon-review.png';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { addToInstalledAppsData, getInstalledApps } from '../addToDB/addToDb';
import { removeToInstalledAppsData } from '../removeToDB/removeToDB';
import AppNotFound from '../AppNotFound/AppNotFound';


const AppDetails = () => {
  const id = useParams();
  const appId = parseInt(id.appId);
  const apps = useLoaderData();
  
  const singleApp = apps.find(app => app.id === appId);

  if (!singleApp) {
  return <AppNotFound/>;
}

  const [isInstall, setIsInstall] = useState(false);

  useEffect(() => {

    const installedApps = getInstalledApps().map(Number);
    setIsInstall(installedApps.includes(singleApp.id));
  }, [singleApp.id]);

  const handleInstalledApps = (id) => {
    addToInstalledAppsData(id);
    setIsInstall(true);
  };


  const [rating1, rating2, rating3, rating4, rating5] = singleApp.ratings;
  const totalRatingCount = rating1.count + rating2.count + rating3.count + rating4.count + rating5.count;
  const totalRatingValue = rating1.count * 1 + rating2.count * 2 + rating3.count * 3 + rating4.count * 4 + rating5.count * 5;
  const avgRating = totalRatingValue / totalRatingCount;

  function formatDownloads(num) {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num.toString();
  }

   


  return (

    

   
    <div className='p-[16px] sm:p-[20px] md:p-[40px] lg:p-[60px] xl:p-[70px] 2xl:p-[80px]'>
      <div className='grid grid-cols-4 gap-[4px] sm:gap-[6px] md:gap-[8px] lg:gap-[10px] xl:gap-[12px] 2xl:gap-[40px] pb-[8px] sm:pb-[12px] md:pb-[16px] lg:pb-[24px] xl:pb-[32px] 2xl:pb-[40px] border-b border-[#00193133]'>
        <div>
          <img className='h-[120px] w-[120px] sm:h-[180px] sm:w-[180px] md:h-[220px] md:w-[220px] lg:h-[260px] lg:w-[260px] xl:h-[300px] xl:w-[300px] 2xl:h-[350px] 2xl:w-[350px]' src={singleApp.image} alt="" />
        </div>
        <div className='col-span-3'>
          <h2 className='font-bold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] text-[#001931]'>{singleApp.title}</h2>
          <p className='text-[#627382] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] pb-[8px] sm:pb-[12px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[30px] border-b border-[#00193133]'>Developed by <span className='font-semibold bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'> {singleApp.companyName} </span> </p>

          <div className='mt-[8px] sm:mt-[12px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[30px] flex 
          gap-[8px] sm:gap-[12px] md:gap-[16px] lg:gap-[20px] xl:gap-[22px] 2xl:gap-[24px] mb-[8px] sm:mb-[12px] md:mb-[16px] lg:mb-[20px] xl:mb-[24px] 2xl:mb-[30px]'>
            <div className='flex flex-col gap-[2px] sm:gap-[4px] md:gap-[6px] lg:gap-[8px] xl:gap-[10px] 2xl:gap-[8px]'>
              <img className='h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] md:h-[24px] md:w-[24px] lg:h-[28px] lg:w-[28px] xl:h-[32px] xl:w-[32px] 2xl:h-[40px] 2xl:w-[40px]' src={downloadIcon} alt="" />
              <p className='text-[#001931] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]'>Downloads</p>
              <h3 className='text-[#001931] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] font-extrabold leading-[1]'>{formatDownloads(singleApp.downloads)}</h3>
            </div>

            <div className='flex flex-col gap-[2px] sm:gap-[4px] md:gap-[6px] lg:gap-[8px] xl:gap-[10px] 2xl:gap-[8px]'>
              <img className='h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] md:h-[24px] md:w-[24px] lg:h-[28px] lg:w-[28px] xl:h-[32px] xl:w-[32px] 2xl:h-[40px] 2xl:w-[40px]' src={starIcon} alt="" />
              <p className='text-[#001931] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]'>Average Ratings</p>
              <h3 className='text-[#001931] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] font-extrabold leading-[1]'>{avgRating.toFixed(1)}</h3>
            </div>

            <div className='flex flex-col gap-[2px] sm:gap-[4px] md:gap-[6px] lg:gap-[8px] xl:gap-[10px] 2xl:gap-[8px]'>
              <img className='h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] md:h-[24px] md:w-[24px] lg:h-[28px] lg:w-[28px] xl:h-[32px] xl:w-[32px] 2xl:h-[40px] 2xl:w-[40px]' src={likeIcon} alt="" />
              <p className='text-[#001931] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]'>Total Reviews</p>
              <h3 className='text-[#001931] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] font-extrabold leading-[1]'>{formatDownloads(singleApp.reviews)}</h3>
            </div>
          </div>

          <button
            disabled={isInstall}
            onClick={() => handleInstalledApps(singleApp.id)}
            className={`rounded-[8px] px-[8px] py-[6px] text-[12px] sm:px-[10px] sm:py-[8px] sm:text-[14px] md:px-[12px] md:py-[10px] md:text-[16px] lg:px-[14px] lg:py-[12px] lg:text-[17px] xl:px-[16px] 
            xl:py-[12px] xl:text-[18px] 2xl:px-[20px] 2xl:py-[14px] 2xl:text-[20px] cursor-pointer font-semibold text-white 
              ${isInstall ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390]'}`}
          >
            {isInstall ? "Installed" : "Install Now"} ({singleApp.size} MB)
          </button>
        </div>
      </div>

      <div className='mt-[8px] sm:mt-[12px] md:mt-[20px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[40px]'>
        <h4 className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 
font-semibold mb-[8px] sm:mb-[12px] md:mb-[16px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px]'>Ratings</h4>
        <div className='bg-base-100  p-[8px] sm:p-[10px] md:p-[12px] lg:p-[14px] xl:p-[16px] 2xl:p-[16px] 
  h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px] 2xl:h-[320px] border-b border-[#00193133] 
  pb-[8px] sm:pb-[12px] md:pb-[16px] lg:pb-[24px] xl:pb-[32px] 2xl:pb-[40px]'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={singleApp.ratings} layout="vertical">
              <XAxis type="number" axisLine={false} tickLine={false} tickMargin={16} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 14 }} axisLine={false} tickLine={false} tickMargin={16} reversed />
              <Tooltip />
              <Bar dataKey="count" fill="#FF8811" barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className='mt-[8px] sm:mt-[12px] md:mt-[16px] lg:mt-[24px] xl:mt-[32px] 2xl:mt-[40px]'>
        <h4 className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-semibold mb-[8px] sm:mb-[12px] md:mb-[16px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px]'>Description
        </h4>
        <p>{singleApp.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
