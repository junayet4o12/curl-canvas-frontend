// import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import Title from "../../Title";
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Scrollbar, A11y, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import { EffectCube } from 'swiper/modules';
import { CardMedia, Rating } from '@mui/material';
import './testimonials.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Testimonials = () => {
    const axiosPublic = useAxiosPublic()
    const { data: testimonials = [] } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const res = await axiosPublic.get('/feedback')
            return res?.data
        }
    })
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div className="bg-[#51434a] text-[#FFFDD0] py-14">
            <div className="text-center">
                <Title heading1={'Our'} heading2={'Testimonials'}></Title>
            </div>
            <div>
                <div>
                    <Swiper
                        modules={[Navigation, Scrollbar, A11y, EffectCube, Autoplay, Pagination]}
                        pagination={pagination}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            800: {
                                slidesPerView: 2,
                            },
                            1150: {
                                slidesPerView: 3,
                            },
                        }}

                        speed={2000}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}

                    >
                        {
                            testimonials.map(item => <SwiperSlide key={item._id}>
                                <Card sx={{ maxWidth: 345, mx: 'auto' }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                <CardMedia
                                                    component="img"

                                                    image={item?.img}

                                                />
                                            </Avatar>
                                        }

                                        title={item?.name}
                                        subheader={item?.profession}
                                    />

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary" >
                                            {item?.feedback}
                                        </Typography>
                                    </CardContent>

                                    <Typography sx={{ ml: '10px' }}>
                                        <Rating sx={{ color: '#51434a' }} name="half-rating-read" defaultValue={item?.rating} precision={0.1}
                                            icon={<FavoriteIcon fontSize="inherit" />}
                                            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                            readOnly />
                                    </Typography>
                                </Card>
                            </SwiperSlide>)
                        }




                    </Swiper>
                </div>

            </div>
        </div >
    );
};

export default Testimonials;