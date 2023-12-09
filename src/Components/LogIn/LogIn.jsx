// import React from 'react';
import { MdDriveFileRenameOutline, MdLogin, MdOutlineInsertPhoto } from "react-icons/md";
import { TbBrandGmail } from "react-icons/tb";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion"
import Title from "../Title";
import useAuth from "../../hooks/useAuth";
import useGoogleLogin from "../../hooks/useGoogleLogin";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { GiArchiveRegister } from "react-icons/gi";

const LogIn = () => {
    const { loginUser } = useAuth()
    const loginwithgoogle = useGoogleLogin()
    const [showpass, setshowpass] = useState(true);
    const [err, seterr] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm()
    const onSubmit = async (data) => {
        seterr('')
        const email = data?.email;
        const password = data?.password;
        loginUser(email, password)
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: "Logged in Successfully..",
                    showClass: {
                        popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
                    },
                    hideClass: {
                        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
                    }
                });
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                seterr(err?.message)
            })

    }
    const handlegooglelogin = () => {
        seterr('')
        loginwithgoogle()
            
    }
    return (
        <div className="bg-[#51434a] text-[#FFFDD0] min-h-screen">
            <Helmet>
                <title>Mediserve Mobilize | Register</title>
            </Helmet>
            <div className="text-center py-7">
                <Title heading1={'Please'} heading2={'LogIn'}></Title>
            </div>
            <div>
                <div className="">

                    <div className=" px-7 flex  overflow-hidden">

                        <motion.form onSubmit={handleSubmit(onSubmit)} initial={{ y: 100, }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-[550px]  mx-auto ">

                            <div className="mx-auto w-[100%] px-5  pb-10   ">

                                <div className="flex flex-col justify-center items-center gap-5 text-sm font-medium">



                                    <div>
                                        <p className="px-2 pb-1 text-sm">Write your email</p>
                                        <div className="relative w-full sm:w-[450px]">
                                            <input required name="email" {...register("email", { required: true })} className="w-full  sm:w-[450px]  bg-[#bcb4b8] p-3 px-10 rounded-lg text-black" type="email" placeholder="email" />
                                            {errors.email && <span className='text-red-500'>Email is required</span>}
                                            <p className='text-xl absolute top-3.5 left-3 text-black'><TbBrandGmail></TbBrandGmail></p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="px-2 pb-1 text-sm">Enter Your Password</p>
                                        <div className="relative w-full sm:w-[450px]">
                                            <input

                                                type={showpass ? 'password' : 'text'} name="password" {...register("password", {
                                                    required: true
                                                })} className="w-full  sm:w-[450px]  bg-[#bcb4b8] p-3 px-10 rounded-lg text-black" placeholder="password" />
                                            <p className='text-xl absolute top-3 left-3 text-black'><RiLockPasswordFill></RiLockPasswordFill></p>
                                            <p onClick={() => (setshowpass(!showpass))} className={`absolute top-2 right-0 mr-2 cursor-pointer text-lg  p-1 text-black`}>{showpass ? <AiOutlineEye></AiOutlineEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</p>

                                            <p className='text-red-500 text-sm'>{err}</p>
                                            <div>

                                            </div>
                                            <div className='flex justify-between p-2 gap-3'>
                                                <p className='text-sm font-medium'>Don&apos;t have an Account? <br /> <Link to='/register'><span className='font-bold Register  cursor-pointer flex gap-1 hover:underline items-center'><GiArchiveRegister></GiArchiveRegister>Register</span></Link></p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col  justify-center items-center gap-2'>
                                        <button type='submit' className='btn bg-gradient-to-r  w-full  sm:w-[450px]  text-white font-bold rounded-lg border-none bg-[#78616c] hover:bg-[#29859e] registerFormBtn'><MdLogin></MdLogin> Log in</button>
                                        <p>Or</p>
                                        <p
                                            onClick={handlegooglelogin}
                                            className='btn   bg-[#78616c] text-white  font-bold text-sm hover:bg-[#2b859e] border-none hover:text-white navlink'>Log in with <span className="text-lg"><FcGoogle></FcGoogle></span></p>
                                    </div>
                                </div>

                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;