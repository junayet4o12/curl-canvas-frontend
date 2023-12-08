// import React from 'react';

import Title from "../../Title";
import activityimg from '../../../assets/activityimg.svg'
import { GiHairStrands } from "react-icons/gi";
import { PiMaskHappyBold } from "react-icons/pi";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import './Activity.css'
const Activity = () => {
    const axiosPublic = useAxiosPublic()
    const {data: serviceamount={}} = useQuery({
        queryKey: ['axiosPublic'],
        queryFn: async ()=> {
            const res = await axiosPublic.get('/servicesamount')
            return res?.data
        }
    })
    return (
        <div className="bg-[#45393f]  py-14">
            <div className='md:max-h-screen md:overflow-hidden'>
                <div className="hero  ">
                    <div className="hero-content gap-0 p-0 flex-col md:flex-row">
                        <div className='w-[70%] md:w-1/2 activityImg'>
                            <img src={activityimg} className="" />{/*  */}
                        </div>
                        <div className='md:w-1/2  text-[#FFFDD0] p-5'>
                            <Title heading1={'Let us handle your screen '} heading2={'Professionally.'}></Title>
                            <p className='text-sm font-bold py-4'>
                                Explore the vibrant pulse of our salon&apos;s daily activities in the &quot;tyle Tracker&quot; section. Dive into the heart of Curl Canvas, where trends are set, and transformations unfold. From the number of delighted customers to the spectrum of services rendered, this dynamic space keeps you in the loop with the bustling energy of our salon.
                            </p>
                            <div>
                                <div className="stats bg-[#00000031] shadow-xl  flex  flex-wrap  ">

                                    <div className="stat w-[200px] border-none">
                                        <div className="stat-figure text-primary text-5xl">
                                            <PiMaskHappyBold></PiMaskHappyBold>
                                        </div>
                                        <div className="stat-title "><span className="text-[#FFFDD0]">Happy Customers</span></div>
                                        <div className="stat-value text-primary">25.6K</div>
                                        
                                    </div>

                                    <div className="stat w-[200px] border-none">
                                        <div className="stat-figure text-secondary text-5xl">
                                            <GiHairStrands></GiHairStrands>
                                        </div>
                                        <div className="stat-title"><span className="text-[#FFFDD0]">Total Services</span></div>
                                        <div className="stat-value text-secondary">{serviceamount?.count}+</div>

                                    </div>



                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;