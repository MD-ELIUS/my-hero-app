import React from 'react';
import { Download, Star } from 'lucide-react';

const AppCard = ({app}) => {

    const [rating1, rating2, rating3, rating4, rating5] = app.ratings ;
    const [rating1Count, rating2Count, rating3Count, rating4Count, rating5Count  ] = [rating1.count, rating2.count, rating3.count, rating4.count, rating5.count]  ;
     
   const totalRatingCount = rating1Count + rating2Count + rating3Count + rating4Count + rating5Count ;
   const totalRatingValue = rating1Count*1 + rating2Count*2 + rating3Count*3 + rating4Count*4 + rating5Count*5 ;

   const avgRating = totalRatingValue/totalRatingCount

    console.log(rating1Count, rating2Count, rating3Count, rating4Count, rating5Count)
  
    return (
        <div className='p-4 bg-[#FFFFFF] shadow-md rounded-[8px] flex flex-col gap-4'>
            <div className='rounded-[8px] overflow-hidden flex justify-center'>
                <img className='w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[300px] xl:h-[300px] 2xl:w-[316px] 2xl:h-[316px] object-cover rounded-[8px]' src={app.image} alt="" />
            </div>

            <h4 className='text-[#001931] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] font-medium'>{app.title}</h4>

            <div className='flex justify-between items-center mt-auto'>
                
                <button className='bg-[#F1F5E8] px-[6px] py-[4px] sm:px-[8px] sm:py-[5px] md:px-[10px] md:py-[6px] lg:px-[12px] lg:py-[7px] xl:px-[14px] xl:py-[8px] 2xl:px-[16px] 2xl:py-[10px] text-[#00D390] font-medium rounded-[8px] flex items-center gap-1 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]'>
                  <Download className='w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 '/>
                  <p>{app.downloads}</p>
                </button  >
                <button  className='bg-[#FFF0E1] px-[6px] py-[4px] sm:px-[8px] sm:py-[5px] md:px-[10px] md:py-[6px] lg:px-[12px] lg:py-[7px] xl:px-[14px] xl:py-[8px] 2xl:px-[16px] 2xl:py-[10px] text-[#FF8811] font-medium rounded-[8px] flex items-center gap-1 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]'>
                      <Star className='w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 '/>
                      <p>{avgRating.toFixed(1) }</p>
                </button>
            </div>
        </div>
    );
};

export default AppCard;