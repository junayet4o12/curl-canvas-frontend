// import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from '../../../assets/curlCanvasLogoWhite.png'
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer gap-4 text-[#FFFDD0] footer-center p-10 bg-[#45393f]">

                <nav>
                    <img className="w-32 h-28" src={logo} alt="" />
                </nav>
                <nav >
                    <p className="max-w-md mx-auto p-2 text-sm font-medium">Discover the artistry of hair at Curl Canvas. Follow us on social media for the latest styles and trends. For inquiries, email us at <a href=""><b>muhammadjunayetmaruf@gmail.com</b></a>.</p>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-2xl justify-center items-center cursor-pointer">
                        <a href="https://www.facebook.com/profile.php?id=100056107479254" className=" hover:text-blue-200">
                            <FaFacebookSquare></FaFacebookSquare>
                        </a>
                        <a className="text-3xl hover:text-red-300 cursor-pointer">
                            <FaYoutube></FaYoutube>
                        </a>
                        <a className=" hover:text-gray-300 cursor-pointer">
                            <FaSquareXTwitter></FaSquareXTwitter>
                        </a>

                    </div>
                </nav>

                <nav className="grid grid-flow-col gap-4">
                    <Link to={`/`} className="link link-hover">Home</Link>
                    <Link to={`/portfolio`} className="link link-hover">Portfolio</Link>
                    <Link to={`/barber`} className="link link-hover">Berbers</Link>
                    <Link to={`/contactus`} className="link link-hover">Contact us</Link>
                </nav>

            </footer>
            <footer className="footer footer-center p-4 bg-[#31292d] text-[#FFFDD0]">
                <aside>
                    <p>Copyright © {currentYear} - All right reserved by Curl Canvas</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;