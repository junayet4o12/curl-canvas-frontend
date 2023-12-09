// import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/curlCanvasLogo.png'
import './Navbar.css'
import navbg from '../../assets/navbg.jpg'
const NavBar = () => {
    const navli = <>
        <li className=''><NavLink className="hover:text-white navlink" to={'/'}>Home</NavLink></li>
        <li className=''><NavLink className="hover:text-white navlink" to={'/portfolio'}>Our Portfolio</NavLink></li>
        <li className=''><NavLink className="hover:text-white navlink" to={'/barbers'}>Our Barbers</NavLink></li>
        <li className=''><NavLink className="hover:text-white navlink" to={'/contactus'}>Contact Us</NavLink></li>
       
    </>
    return (
        <div>
            <div   className="navbar  bg-white    text-black bg-center bg-cover shadow-xl">
                <div className="navbar-start  ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#9f989c] rounded-box w-52 ">
                            {navli}
                        </ul>
                    </div>
                    <div className='w-20 '>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex ml-auto">
                    <ul className="menu menu-horizontal font-medium px-2 w-max">
                        {navli}
                    </ul>
                </div>
                {/* // #51434a #FFFDD0 */}
                <div className="navbar-end w-max px-4  ml-auto lg:ml-0">
                    <a className="btn bg-[#51434a] text-[#FFFDD0] border-none px-7 sm:px-20 uppercase font-bold  login">Log in</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;