// import React from 'react';

import Activity from "./Activity/Activity";
import Banner from "./Banner/Banner";
import Daterange from "./DateRange/DateRange";
import Footer from "./Footer/Footer";
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
            {/* <Daterange></Daterange> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;