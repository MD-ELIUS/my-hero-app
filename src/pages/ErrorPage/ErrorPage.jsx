import React from 'react';
import errorImg from '../../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center p-[16px] sm:p-[20px] md:p-[40px] lg:p-[60px] xl:p-[70px] 2xl:p-[80px] bg-[#f1ecec]'>

            <img className='h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] 
        lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px] 2xl:h-[500px] 2xl:w-[500px]' src={errorImg} alt="" />

            <div className='mt-[4px] sm:mt-[6px] md:mt-[8px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] text-center'>
                <h1 className='text-[#001931] font-semibold text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px]'>Oops, page not found!</h1>
                <p className='text-[#627382] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] mt-[2px] sm:mt-[3px] md:mt-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[8px]'>The page you are looking for is not available.</p>
            </div>

          <Link to='/' className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] rounded-[8px] px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-3.5 lg:py-2.5 xl:px-3.5 xl:py-2.5 2xl:px-4 2xl:py-3 text-[#FFFFFF] font-semibold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] mt-[4px] sm:mt-[6px] md:mt-[8px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px]'>Go Back!</Link>
            
        </div>
    );
};

export default ErrorPage;