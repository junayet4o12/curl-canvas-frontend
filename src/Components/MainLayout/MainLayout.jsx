// import React from 'react';

import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
const MainLayout = () => {
    return (
        <div className="relative">
            <div className="sticky top-0 z-10">
                <div className="relative">
                    <div className=" w-full">
                        <NavBar></NavBar>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;