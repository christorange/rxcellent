/* eslint-disable import/no-unresolved */
import './Carousel.scss';

import type { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';

import MED1 from '../../assets/Landing/Carousel/medCard1.png';
import MED2 from '../../assets/Landing/Carousel/medCard2.png';
import MED3 from '../../assets/Landing/Carousel/medCard3.png';
import MED4 from '../../assets/Landing/Carousel/medCard4.png';
import MED5 from '../../assets/Landing/Carousel/medCard5.png';
import MED6 from '../../assets/Landing/Carousel/medCard6.png';

const swiperList = [
    {
        key: 1,
        medicine: 'ThermaCare Advanced Back Pain Therapy Heatwraps, 2 CT',
        price: '$ 8.49',
        img: MED1
    },
    {
        key: 2,
        medicine: 'Unisom Simple Slumbers Midnight Raspberry Gummies...',
        price: '$ 11.79',
        img: MED2
    },
    {
        key: 3,
        medicine: 'Ricola Mountain Herb Drops Sugar Free, 45 CT',
        price: '$ 7.29',
        img: MED3
    },
    {
        key: 4,
        medicine: 'Betadine Antiseptic Sore Throat Gargle, 8 OZ',
        price: '$ 11.99',
        img: MED4
    },
    {
        key: 5,
        medicine: 'Dramamine-N The Nausea Relief Tablets, 10 CT',
        price: '$ 8.99',
        img: MED5
    },
    {
        key: 6,
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: '$ 11.79',
        img: MED6
    },
    {
        key: 7,
        medicine: 'ThermaCare Advanced Back Pain Therapy Heatwraps, 2 CT',
        price: '$ 8.49',
        img: MED1
    },
    {
        key: 8,
        medicine: 'Unisom Simple Slumbers Midnight Raspberry Gummies...',
        price: '$ 11.79',
        img: MED2
    },
    {
        key: 9,
        medicine: 'Ricola Mountain Herb Drops Sugar Free, 45 CT',
        price: '$ 7.29',
        img: MED3
    },
    {
        key: 10,
        medicine: 'Betadine Antiseptic Sore Throat Gargle, 8 OZ',
        price: '$ 11.99',
        img: MED4
    },
    {
        key: 11,
        medicine: 'Dramamine-N The Nausea Relief Tablets, 10 CT',
        price: '$ 8.99',
        img: MED5
    },
    {
        key: 12,
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: '$ 11.79',
        img: MED6
    }
];

const Carousel: FC = () => {
    return (
        <Box
            sx={{
                background: '#e4f4f5',
                padding: ' 30px'
            }}
        >
            <Swiper
                slidesPerView={5}
                spaceBetween={40}
                navigation={true}
                modules={[Navigation]}
                parallax={true}
                style={{
                    maxWidth: '1400px',
                    padding: '30px'
                }}
            >
                {swiperList.map((i) => (
                    <SwiperSlide
                        key={i.key}
                        style={{
                            maxWidth: '180px',
                            border: '1px solid #fff',
                            borderRadius: '10px',
                            background: '#fff',
                            overflow: 'hidden'
                        }}
                        className="swiper-slide"
                    >
                        <img
                            src={i.img}
                            style={{
                                margin: '0 10px',
                                transform: 'scale(.85)'
                            }}
                            className="carousel-img"
                        />
                        <p
                            style={{
                                margin: '10px 15px',
                                fontSize: '14px'
                            }}
                        >
                            {i.medicine}
                        </p>
                        <p
                            style={{
                                margin: '10px 15px',
                                color: '#ff5a5a',
                                fontWeight: 'bold'
                            }}
                        >
                            {i.price}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Carousel;
