// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../Shared/Loading";
import Title from "../Title";
import BarbersCard from "./BarbersCard";

const Barbers = () => {
    const axiosPublic = useAxiosPublic()
    const { data: barbers, isLoading: barbersLoading } = useQuery({
        queryKey: ['barbers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/barbers')
            return res?.data
        }
    })
    if (barbersLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="bg-[#51434a]   text-[#FFFDD0]">

            <div className="py-7 text-center">
                <Title heading1={'Our'} heading2={'Barbers'}></Title>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 px-5">
                {
                    barbers.map((data, idx) => <BarbersCard key={idx} idx={idx} data={data}></BarbersCard>)
                }
            </div>
        </div>
    );
};

export default Barbers;