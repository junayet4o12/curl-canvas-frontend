// import React from 'react';

import { useNavigate } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

const useGoogleLogin = () => {
    const navigate = useNavigate()
    const { user, googleLogIn } = useAuth()
    const axiosPublic = useAxiosPublic();
    const handlegooglelogin = () => {
        
        googleLogIn()
            .then(res => {
                console.log(res.user);
                const userInfo = {
                    email: res?.user?.email,
                    name: res?.user?.displayName,
                    
                }
                console.log(userInfo);
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res?.data);
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
                        navigate( '/')
                    })


            })
            .catch(err => {
                console.log(err);
            })
    }
    return handlegooglelogin
};

export default useGoogleLogin;