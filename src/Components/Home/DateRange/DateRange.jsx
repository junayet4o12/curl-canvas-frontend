// import React from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRange } from 'react-date-range';
import { useState } from 'react';
import { addDays } from 'date-fns';
import './Daterange.css'
const Daterange = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 2),
            key: 'selection'
        }
    ]);
    const handleSelect = (date) => {
        console.log(date);
    }
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date('Sat Nov 11 2023 00:00:00 GMT+0600 (Bangladesh Standard Time)'),
        key: 'selection',

    }
    console.log(selectionRange);
    return (
        <div className='flex justify-center items-center py-7 bg-[#51434a] text-[#FFFDD0]'>


            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                
                moveRangeOnFirstSelection={false}
                ranges={state}
                className='bg'
                rangeColors={[  '#51434a']}
            />
        </div>
    );
};

export default Daterange;