/* eslint-disable react/prop-types */
// import React from 'react';

const Title = ({heading1, heading2}) => {
    return (
        <div> 
             <h2 className="text-4xl font-bold  py-5">{heading1} <span className="text-[#C094AE]">{heading2}</span></h2>
        </div>
    );
};

export default Title;