/* eslint-disable react/prop-types */
// import React from 'react';

const PortFolioCard = ({ idx, data }) => {
    return (
        <div>
            <div className="hero   max-w-[600px] bg-[#251f22] md:h-[250px]">
                <div className={`hero-content flex-col md:${(idx % 4 === 0 || (idx + 1) % 4 === 0) ? 'flex-row' : 'flex-row-reverse'} overflow-hidden px-4 md:px-10`}>
                    <img className="w-[300px] h-[200px]" src={data?.servicePhoto} />
                    <div>
                        <div className="avatar">
                            <div className="w-24 mask mask-hexagon">
                                <img src={data?.clientProfile} />
                            </div>
                        </div>
                        <h2 className="text-lg font-medium "><span className="underline font-bold">CLient Name:</span> {data?.clientName}</h2>
                        <h2 className=" font-medium "><span className="underline font-bold">Srvice Name:</span> {data?.serviceName}</h2>
                        <h2 className=" font-medium "><span className="underline font-bold">Price:</span> ${data?.price}</h2>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortFolioCard;