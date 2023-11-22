// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import ServiceCart from "./ServiceCart";

const Services = () => {
    const axiosPublic = useAxiosPublic()
    const {data: services=[]} = useQuery({
        queryKey: ['servicescollection'],
        queryFn: async ()=> {
            const res = await axiosPublic.get('http://localhost:3000/services')
            return res?.data
        }
    })
    console.log(services);
    return (
        <div className="bg-[#51434a] text-[#FFFDD0] py-7 px-4">
            <h2 className="text-4xl font-bold text-center">Our awesome <span className="text-[#C094AE]">services</span></h2>

            <div>
                <div className="flex flex-wrap justify-center items-center gap-5 p-5">
                    {
                        services.map(service=> <ServiceCart key={service?._id} service={service}></ServiceCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;