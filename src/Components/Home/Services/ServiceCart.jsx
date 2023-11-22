/* eslint-disable react/prop-types */
// import React from 'react';
import './Services.css'
const ServiceCart = ({ service }) => {
    const { _id, title, short_description, long_description, img, price } = service
    return (
        <div>
            <div className="card w-80 bg-[#816676] shadow-xl">
                <figure className="px-5 pt-5 h-60">
                    <img src={img} alt="Shoes" className="rounded-xl h-full w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title font-bold text-2xl text-purple-100">${price}</h2>
                    <p className='text-sm font-medium'>{short_description}</p>
                    <div className="card-actions pt-5">
                        <button className="btn btn-neutral servicebtn border-none bg-[#51434a] font-bold">Buy Service</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;