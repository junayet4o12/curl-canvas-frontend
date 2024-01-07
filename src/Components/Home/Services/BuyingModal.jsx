/* eslint-disable react/prop-types */
// import React from 'react';

import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Box, Button, Modal } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Calendar, DateRange } from "react-date-range";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const BuyingModal = ({ handleBuy, closeModal, id, open }) => {
    const { user } = useAuth();
    // console.log(user?.email);
    const axiosPublic = useAxiosPublic()
    const [openchild, setopenchild] = useState(false)
    const [openchild2, setopenchild2] = useState(false)
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedbarber, setselectedbarber] = useState('')
    const [error, seterror] = useState('')
    const [registerInformation, setregisterInformation] = useState({})
    const [date, setDate] = useState(null);
    const [state, setState] = useState([

        {
            startDate: new Date('Mon Jan 08 2024'),
            endDate: new Date('Mon Jan 08 2024'),
            key: 'selection1',
            autoFocus: false
        },
        {
            startDate: new Date('Mon Jan 09 2024'),
            endDate: new Date('Mon Jan 09 2024'),
            key: 'selection2',
            autoFocus: false
        },
        {
            startDate: new Date('Mon Jan 10 2024'),
            endDate: new Date('Mon Jan 10 2024'),
            key: 'selection3',
            autoFocus: false
        },
        {
            startDate: new Date('Mon Jan 11 2024'),
            endDate: new Date('Mon Jan 11 2024'),
            key: 'selection4',
            autoFocus: false
        },
        {
            startDate: new Date('Mon Jan 12 2024'),
            endDate: new Date('Mon Jan 12 2024'),
            key: 'selection5',
            autoFocus: false
        },

    ]);
    const [selectedServiceDate, setSelectedServiceDate] = useState('')
    const [genderError, setGenderError] = useState('')
    const [barberError, setBarberError] = useState('')
    const [dateError, setDateError] = useState('')
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const fiftyColors = [
        "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5",
        "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50",
        "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800",
        "#FF5722", "#795548", "#9E9E9E", "#607D8B", "#F44336",
        "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3",
        "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A",
        "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722",
        "#795548", "#9E9E9E", "#607D8B", "#F44336", "#E91E63",
        "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4",
        "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39"
    ]
    const { data: service = {}, isLoading } = useQuery({
        queryKey: ['singleService', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/service/${id}`)
            return res?.data

        }
    })
    const { data: barbers, isLoading: barbersLoading } = useQuery({
        queryKey: ['barbers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/barbers')
            return res?.data
        }
    })
    if (isLoading || barbersLoading) {
        return ''
    }


    const femaleBarber = barbers.filter(a => a?.criteria === 'female')
    const maleBarber = barbers.filter(a => a?.criteria === 'male')
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,

    };





    const handlebarber = e => {
        setselectedbarber(e.target.value)
    }
    const handleGenderChange = (gender) => {
        setSelectedGender(gender);
        setselectedbarber('')
    };

    const handleConfirm = () => {
        console.log(registerInformation);
        setopenchild(false)
        closeModal(false)
        reset()
        setselectedbarber('')
        setSelectedGender('')
        setDate(null)
        Swal.fire({
            icon: "success",
            title: "Registration successfull",
            showConfirmButton: false,
            timer: 1500
        });
    }
    const barberFee = barbers?.find(barber => selectedbarber === barber?.name)?.fee;
    const netFee = service?.price + barberFee;
    const handleChange = () => {
        // const selectedStartDate = ranges.selection.startDate;
        // console.log(ranges);

    }
    const setSelectedDate = (item) => {
        const itemDate = new Date(item.toString().split(' ').slice(0, 4).join(' '))

        const setinDate = {
            startDate: itemDate,
            endDate: itemDate,
            key: `selection${user?.email}`
        }
        const filterTheDate = state.filter(set => set?.key !== `selection${user?.email}`)
        const findByDate = filterTheDate.find(set => set?.startDate.getTime() === itemDate.getTime())
        if (findByDate) {
            setopenchild2(true)
            setTimeout(() => {
                setopenchild2(false)
            }, 2000);
            return
        }
        setDate(itemDate)
        setSelectedServiceDate(setinDate)
        setState([...state.filter(set => set?.key !== `selection${user?.email}`), setinDate])
    }
    const onSubmit = (data) => {
        setGenderError('')
        setBarberError('')
        setDateError('')
        const name = data?.name;
        const email = user?.email;
        const barber = selectedbarber;
        const fees = netFee;
        const gender = selectedGender;
        const age = data?.age;
        const number = data?.number;
        const serviceDate = selectedServiceDate;
        if (!gender || !barber || !serviceDate) {
            setGenderError(!gender ? 'Please select gender' : '')
            setBarberError(!barber ? 'Please select barber' : '')
            setDateError(!serviceDate ? 'Please select Date' : '')
            return
        }
        const requestData = { name, email, fees, barber, age, number, date, gender }
        setregisterInformation(requestData)
        setopenchild(true)
    }
    return (
        <div>
            <Modal
                sx={{ display: 'flex' }}
                keepMounted
                open={open}
                // onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >



                <div className="bg-purple-300  mx-auto my-auto p-5 overflow-hidden  max-h-[90vh] overflow-y-scroll max-w-[700px]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-2xl font-bold text-center py-2">Registration Form</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-5 ">
                            <div className="  ">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input  {...register("name")} required name="name" type="text" placeholder="Name" className="input input-bordered w-full sm:w-[320px]" />

                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Your Age</span>
                                </label>
                                <input {...register("age", {
                                    required: true, min: { value: 4, message: "Age must be minimum 4" },
                                    max: { value: 100, message: "Age must be  maximum 100 " }
                                })} name="age" type="number" placeholder="Age" className="input input-bordered w-full sm:w-[320px]" />
                                {errors.age && <span className="text-sm font-bold text-red-500">{errors.age.message}</span>}

                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-5">
                            <div className="form-control  w-full sm:w-[320px]">
                                <label className="label">
                                    <span className="label-text">Your Contact Number</span>
                                </label>
                                <input {...register("number", {
                                    required: true, minLength: { value: 11, message: "Number must be 11 charecters" },
                                    maxLength: { value: 11, message: "Number must be 11 charecters" }
                                })} required name="number" type="number" placeholder="Number" className="input input-bordered w-full sm:w-[320px]" />
                                {errors.number && <span className="text-sm font-bold text-red-500">{errors.number.message}</span>}

                            </div>
                            <div className=" w-full sm:w-[320px]">
                                <label className="label">
                                    <span className="label-text">Your Gender: <span className="font-bold">{selectedGender}</span></span>
                                </label>
                                <div className="flex gap-5">
                                    <label className="text-base font-bold flex items-center gap-1">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={selectedGender === 'male'}
                                            onChange={() => handleGenderChange('male')}
                                        />
                                        Male
                                    </label>

                                    <label className="text-base font-bold flex items-center gap-1">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={selectedGender === 'female'}
                                            onChange={() => handleGenderChange('female')}
                                        />
                                        Female
                                    </label>
                                </div>
                                <p className="text-sm font-bold text-red-500">{genderError}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 justify-center  gap-x-5">

                            <div className="form-control  ">

                                <div className="form-control w-full sm:w-[320px]">
                                    <label className="label">
                                        <span className="label-text">Pick your Barbers</span>

                                    </label>
                                    <select value={selectedbarber} onChange={handlebarber} required name="barber" disabled={!selectedGender} className="select select-bordered">
                                        <option value={''} disabled selected>Pick barbers</option>
                                        {
                                            (selectedGender === 'female' ? femaleBarber : maleBarber).map((barber, idx) => <option key={idx} value={barber?.name
                                            }>{barber?.name}</option>)
                                        }



                                    </select>
                                    <p className="text-sm font-bold text-red-500">{barberError}</p>
                                </div>

                            </div>
                            <div className="form-control  w-full sm:w-[320px]">
                                <label className="label">
                                    <span className="label-text">Camp Fee</span>
                                </label>
                                <div className="input input-bordered w-full max-w-xs font-medium text-black flex justify-start items-center min-h-[45px] h-full" >
                                    <div className={`${selectedbarber ? 'flex' : 'hidden'}  flex-col`}>
                                        <div className="flex justify-between gap-2">
                                            Service Fees  <span>${service?.price}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            Barber Fees    <span>${barberFee}</span>
                                        </div>
                                        <hr className="border-black w-full" />
                                        <div className="flex justify-between">
                                            Net Fees    <span>${netFee}</span>
                                        </div>
                                    </div>
                                    <p className={`${!selectedbarber ? '' : 'hidden'}  flex-col`}>Choose a barber to view service fees</p>
                                </div>

                            </div>
                        </div>

                        <div className="form-control  w-full  grid md:grid-cols-2 gap-4">


                            <div className="overflow-hidden flex flex-col  items-center">
                                <label className="label">
                                    <span className="label-text">Already Booked by other</span>
                                </label>

                                <DateRange
                                    onChange={handleChange}
                                    ranges={state?.map(sec => sec)}
                                    disabled={true}
                                    showDateDisplay={false}
                                    editableDateInputs={false}
                                    rangeColors={
                                        // Array.from({ length: 200 }, () => `#${Math.floor(Math.random() * 16777215).toString(16)}`)
                                        fiftyColors
                                    }
                                />

                            </div>

                            <div className="flex flex-col gap-0 overflow-hidden items-center">
                                <label className="label">
                                    <span className="label-text">Pick Your Date</span>
                                </label>

                                <Calendar
                                    onChange={item => setSelectedDate(item)}
                                    date={date}
                                />
                                <p className="text-sm font-bold text-red-500">{dateError}</p>
                            </div>





                        </div>


                        <p className="text-sm font-medium text-red-500">
                            {error}
                        </p>
                        <div className="flex gap-7 flex-wrap pt-5">
                            <button type="submit" className="btn btn-primary">Register</button>
                            <p className="btn btn-neutral" onClick={closeModal}>close</p>
                        </div>
                    </form>
                </div>


            </Modal>
            <Modal
                open={openchild}

                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style }}>
                    <div className="p-2 w-[250px] sm:w-[300px] ">
                        <h2 className="text-2xl font-bold mb-2" id="child-modal-title">Are You sure?</h2>
                        <p className="text-base font-medium mb-4" id="child-modal-description">
                            You can check your infromation twice
                        </p>
                        <Button className="login" sx={{ background: 'blue', color: 'white', mr: '10px', p: '10px', fontWeight: 'bold', mb: '10px', '&:hover': { background: '#003366' }, }} onClick={handleConfirm}>Confirm !!</Button>
                        <Button className="login" onClick={() => setopenchild(false)} sx={{ background: 'red', color: 'white', mr: '10px', p: '10px', fontWeight: 'bold', mb: '10px', '&:hover': { background: '#E53E3E' }, }} >Check info</Button>
                    </div>
                </Box>
            </Modal>
            <Modal
                open={openchild2}

                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style }}>
                    <div className="p-2 w-[250px] sm:w-[300px] ">
                        <h2 className="text-2xl font-bold mb-2" id="child-modal-title">Error</h2>
                        <p className="text-base font-medium mb-4" id="child-modal-description">
                            You cannot select the date. It&lsquo;s already selected.
                        </p>

                        <Button className="login" onClick={() => setopenchild2(false)} sx={{ background: 'red', color: 'white', mr: '10px', p: '10px', fontWeight: 'bold', mb: '10px', '&:hover': { background: '#E53E3E' }, }} >OK</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default BuyingModal;