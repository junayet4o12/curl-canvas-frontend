import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useRegisterData = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const { data: userRegister = [], isLoading: userRegisterLoading, refetch: userRegisterRefetch } = useQuery({
        queryKey: ['userCollection', user],
        queryFn: async () => {
            const res = await axiosPublic.get(`/register/${user?.email}`)
            return res?.data
        }
    
    })
    return {userRegister, userRegisterLoading, userRegisterRefetch}
};

export default useRegisterData;