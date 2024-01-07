// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import ServiceCart from "./ServiceCart";
import Title from "../../Title";
import { useState } from "react";

const Services = () => {
    const axiosPublic = useAxiosPublic()
    const [showall, setshowall] = useState(true)
    const { data: services = [] } = useQuery({
        queryKey: ['servicescollection'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services')
            return res?.data
        }
    })
    console.log(services);
    return (
        <div className="bg-[#51434a] text-[#FFFDD0] py-16 px-4">

            <div className="text-center">
                <Title heading1={'Our awesome'} heading2={'services'}></Title>
            </div>
            <div>
                <div className="flex flex-wrap justify-center items-center gap-5 p-5">
                    {
                        services.slice(0, (showall ? 3 : services.length)).map(service => <ServiceCart key={service?._id} service={service}></ServiceCart>)
                    }
                </div>
                <div className="text-center pt-5">
                    <button className="btn btn-neutral serviceshowallbtn border-none bg-[#816676] font-bold" onClick={() => setshowall(!showall)}>{
                        showall ? 'Explore More' : 'Explore Less'
                    }</button>
                </div>
            </div>
        </div>
    );
};

export default Services;