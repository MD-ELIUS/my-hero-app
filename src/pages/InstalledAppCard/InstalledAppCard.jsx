
import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import starIcon from '../../assets/icon-ratings.png'


const InstalledAppCard = ({installedApp,  handleRemoveBtn}) => {

        const [rating1, rating2, rating3, rating4, rating5] = installedApp.ratings ;
    const [rating1Count, rating2Count, rating3Count, rating4Count, rating5Count  ] = [rating1.count, rating2.count, rating3.count, rating4.count, rating5.count]  ;
     
   const totalRatingCount = rating1Count + rating2Count + rating3Count + rating4Count + rating5Count ;
   const totalRatingValue = rating1Count*1 + rating2Count*2 + rating3Count*3 + rating4Count*4 + rating5Count*5 ;

   const avgRating = totalRatingValue/totalRatingCount

function formatDownloads(num) {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
    return num.toString();
  }
}



    return (
       <div className='p-[4px] sm:p-[6px] md:p-[8px] lg:p-[10px] xl:p-[12px] 2xl:p-[16px] flex justify-between items-center shadow-lg'>

                   <div className='flex items-center gap-4'>
                     <div>
                        <img className='h-[24px] w-[24px] sm:h-[32px] sm:w-[32px] md:h-[48px] md:w-[48px]     lg:h-[64px] lg:w-[64px] xl:h-[72px] xl:w-[72px] 2xl:h-[80px] 2xl:w-[80px]' src={installedApp.image} alt="" />
                    </div>

                    <div className='flex flex-col gap-[2px] sm:gap-[4px] md:gap-[6px] lg:gap-[8px] xl:gap-[10px] 2xl:gap-[16px]'>
                        <h3 className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] font-medium text-[#001931]'>{installedApp.title}</h3>

                        <div className='flex gap-[2px] sm:gap-[4px] md:gap-[6px] lg:gap-[8px] xl:gap-[10px] 2xl:gap-[16px] items-center'>
                            <div className='flex gap-[2px] sm:gap-[4px] md:gap-[6px] lg:gap-[8px] xl:gap-[10px] 2xl:gap-[12px] items-center'>
                               <img className='h-[8px] w-[8px] sm:h-[10px] sm:w-[10px] md:h-[12px] md:w-[12px] 
                                 lg:h-[14px] lg:w-[14px] xl:h-[16px] xl:w-[16px] 2xl:h-[20px] 2xl:w-[20px]' src={downloadIcon} alt="" />
                               <p className='text-[#00D390] font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]'> {formatDownloads(installedApp.downloads)} </p>
                            </div>
                            <div className='flex gap-[2px] sm:gap-[4px] md:gap-[6px] lg:gap-[8px] xl:gap-[10px] 2xl:gap-[12px] items-center'>
                                <img className='h-[8px] w-[8px] sm:h-[10px] sm:w-[10px] md:h-[12px] md:w-[12px] 
                                 lg:h-[14px] lg:w-[14px] xl:h-[16px] xl:w-[16px] 2xl:h-[20px] 2xl:w-[20px]' src={starIcon} alt="" />
                                <p className='text-[#FF8811] font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]' >{avgRating.toFixed(1)}</p>
                            </div> 
                            <p className='text-[#627382] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]'>{installedApp.size} MB</p>
                        </div>
                    </div>
                   </div>

                   <div>
                     <button onClick={() => handleRemoveBtn(installedApp.id)} className='px-[4px] py-[2px]       sm:px-[6px] sm:py-[3px] md:px-[8px] md:py-[4px] lg:px-[10px] lg:py-[6px] xl:px-[12px] xl:py-[8px] 2xl:px-[16px] 2xl:py-[12px] rounded-[8px] bg-[#00D390] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'> Uninstall </button>
                   </div>

                </div>
    );
};

export default InstalledAppCard;