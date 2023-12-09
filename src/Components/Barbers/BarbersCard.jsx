/* eslint-disable react/prop-types */
// import React from 'react';

import { Rating } from "@mui/material";

const BarbersCard = ({ data }) => {
    return (
        <div>
            <div className="card card-side shadow-xl max-w-[600px] bg-[#251f22]">
                <figure className="w-1/2"><img className="w-full h-full" src={data?.photo} alt="Movie" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title"> {data?.name}</h2>
                    <p>Specialty: {data?.specialty}</p>
                    <p>Experience: {data?.experience} Years</p>
                    <p>Orders Completed: {data?.workCompleted}</p>
                    <p>Availability: {data?.availability ? 'Available' : 'Unavailable'}</p>
                    <p className="flex  items-center gap-2">Rating: <Rating name="half-rating-read" defaultValue={data?.rating} precision={0.1} readOnly />

                    </p>

                    <div className="card-actions justify-end">
                        <button  className="btn btn-neutral navlink font-bold">{data?.availability ? 'Hire':'Unavailable'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarbersCard;