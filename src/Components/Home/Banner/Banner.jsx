// import React from 'react';
// #B48395
import banner from '../../../assets/banner.jpg'
import './banner.css'
const Banner = () => {
    return (
        <div className=''>
            <div className="hero  bg-[#51434a] p-0">
                <div className="hero-content p-0 flex-col lg:flex-row-reverse">
                    <div className='w-1/2 '>
                        <img src={banner} className="  shadow-2xl " />{/*  */}
                    </div>
                    <div className='w-1/2  text-[#FFFDD0] p-5'>
                        <h1 className="text-5xl font-bold uppercase">Beauty salon <br /> for every men.</h1>
                        <p className='text-sm font-bold py-4'>
                            Curl Canvas - Redefining Style and Elegance for Every Man. Indulge in our premier beauty salon experience tailored exclusively for men. Discover personalized grooming services that enhance your unique charm and leave you looking and feeling your absolute best.
                        </p>
                        <button className="btn bg-[#b48395] text-[#FFFDD0] border-none px-7  uppercase font-bold  bannerbtn">get an apointment</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;