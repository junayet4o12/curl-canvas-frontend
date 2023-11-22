// import React from 'react';

import Activity from "./Activity/Activity";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    // #51434a #FFFDD0
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Activity></Activity>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;