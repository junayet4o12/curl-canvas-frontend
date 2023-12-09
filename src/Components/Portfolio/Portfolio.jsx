// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import Title from "../Title";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../Shared/Loading";
import PortFolioCard from "./PortFolioCard";

const Portfolio = () => {
    const axiosPublic = useAxiosPublic()
    const {data: portfolio, isLoading: portfolioLoading} = useQuery({
        queryKey: ['portfolio'],
        queryFn: async()=> {
            const res= await axiosPublic.get('/portfolio')
            return res?.data
        }
    })
    if(portfolioLoading){
        return <Loading></Loading>
    }
    return (
        <div className="bg-[#51434a] pt-20  text-[#FFFDD0]">
            <div className="text-center py-7">
                <Title heading1={'Our'} heading2={'Portfolio'}></Title>
            </div>
           <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
            {
                portfolio.map((data, idx)=> <PortFolioCard key={idx} idx={idx} data={data}></PortFolioCard>)
            }
           </div>
        </div>
    );
};

export default Portfolio;