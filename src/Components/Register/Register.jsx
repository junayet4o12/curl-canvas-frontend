// import React from 'react';
import { MdDriveFileRenameOutline, MdLogin, MdOutlineInsertPhoto } from "react-icons/md";
import { TbBrandGmail } from "react-icons/tb";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import Title from "../Title";
import { motion } from "framer-motion"
import { useForm } from "react-hook-form";
import useGoogleLogin from "../../hooks/useGoogleLogin";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";
import { auth } from "../Authentication/firebaseconfig";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { GiArchiveRegister } from "react-icons/gi";
import useAuth from "../../hooks/useAuth";
const Register = () => {
    const { createUser } = useAuth()
    console.log(createUser);
    const loginwithgoogle = useGoogleLogin()
    const [showpass, setshowpass] = useState(true);
    const imgHostingKey = import.meta.env.VITE_IMG_HOSTING_KEY;
    const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const [err, seterr] = useState('')
    const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm()
    const onSubmit = async (data) => {
        seterr('')
        const image = { image: data?.image[0] }

        const res = await axios.post(imgHostingApi, image, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const imgurl = res?.data?.data?.display_url
        createUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
                updateProfile(auth.currentUser, {
                    displayName: data.name,
                    photoURL: imgurl

                })
                    .then(() => {
                        console.log('user progile info updated');
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            


                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        icon: "success",
                                        title: "User Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    reset();
                                    navigate('/')
                                }
                            })

                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
                seterr(err?.message)
            })
    }
    const handlegooglelogin = () => {
        seterr('')
        loginwithgoogle()
        navigate('/')
    }
    return (
        <div className="bg-[#51434a] text-[#FFFDD0] min-h-screen">
            <Helmet>
                <title>Mediserve Mobilize | Register</title>
            </Helmet>
            <div className="text-center py-7">
                <Title heading1={'Please'} heading2={'Register'}></Title>
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
                                        <p className="px-2 pb-1 text-sm">Write your name</p>
                                        <div className="relative w-full sm:w-[450px]">

                                            <input name="name" {...register("name", { required: true })} className="w-full  sm:w-[450px]  bg-[#bcb4b8] p-3 px-10 rounded-lg text-black" type="text" placeholder="Name" />
                                            {errors.name && <span className='text-red-500'>Name is required</span>}
                                            <p className='text-xl absolute top-3.5 left-3 text-black'><MdDriveFileRenameOutline></MdDriveFileRenameOutline></p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="px-2 pb-1 text-sm">Choose your profile pic</p>
                                        <div className="relative w-full sm:w-[450px]">
                                            <input name="image" {...register("image", { required: true })} className="w-full  sm:w-[450px]  bg-[#bcb4b8]  py-1 px-12 rounded-lg text-black" type="file" placeholder="Image" />
                                            {errors.image && <span className='text-red-500'>Image is required</span>}
                                            <p className='text-xl absolute top-3.5 left-3 text-black'><MdOutlineInsertPhoto></MdOutlineInsertPhoto ></p>
                                        </div>
                                    </div>
                                  
                                    <div>
                                        <p className="px-2 pb-1 text-sm">Write your email</p>
                                        <div className="relative w-full sm:w-[450px]">
                                            <input required name="email" {...register("email", { required: true })} className="w-full  sm:w-[450px]  bg-[#bcb4b8] p-3 px-10 rounded-lg text-black" type="email" placeholder="email" />
                                            {errors.email && <span className='text-red-500'>Email is required</span>}
                                            <p className='text-xl absolute top-3.5 left-3 text-black'><TbBrandGmail></TbBrandGmail></p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="px-2 pb-1 text-sm">Give a unique pass</p>
                                        <div className="relative w-full sm:w-[450px]">
                                            <input

                                                type={showpass ? 'password' : 'text'} name="password" {...register("password", {
                                                    required: true,
                                                    minLength: 8,
                                                    maxLength: 20,
                                                    pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
                                                })} className="w-full  sm:w-[450px]  bg-[#bcb4b8] p-3 px-10 rounded-lg text-black" placeholder="password" />
                                            <p className='text-xl absolute top-3 left-3 text-black'><RiLockPasswordFill></RiLockPasswordFill></p>
                                            <p onClick={() => (setshowpass(!showpass))} className={`absolute top-2 right-0 mr-2 cursor-pointer text-lg  p-1 text-black`}>{showpass ? <AiOutlineEye></AiOutlineEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</p>
                                            {errors?.password?.type === 'required' && <span className='text-red-500'>Password invalid</span>}
                                            {errors?.password?.type === 'minLength' && <span className='text-red-500'>Password must be minimum 8 charecters</span>}
                                            {errors?.password?.type === 'maxLength' && <span className='text-red-500'>Password must be maximum 20 charecters</span>}
                                            {errors?.password?.type === 'pattern' && <span className='text-red-500'>Password must contain at least one digit, one lowercase letter, and one uppercase letter.</span>}
                                            <p className='text-red-500 text-sm'>{err}</p>
                                            <div>

                                            </div>
                                            <div className='flex justify-between p-2 gap-3'>
                                                <p className='text-sm font-medium'>Already have an Account? <br /> <Link to='/login'><span className='font-bold Register  cursor-pointer flex gap-1 hover:underline items-center'><GiArchiveRegister></GiArchiveRegister>Log in</span></Link></p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col  justify-center items-center gap-2'>
                                        <button type='submit' className='btn bg-gradient-to-r  w-full  sm:w-[450px]  text-white font-bold rounded-lg border-none bg-[#78616c] hover:bg-[#29859e] registerFormBtn'><MdLogin></MdLogin> Register</button>
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

export default Register;