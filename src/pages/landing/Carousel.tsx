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
        medicine: 'ThermaCare Advanced Back Pain Therapy Heatwraps, 2 CT',
        price: '$ 8.49',
        img: MED1
    },
    {
        medicine: 'Unisom Simple Slumbers Midnight Raspberry Gummies...',
        price: '$ 11.79',
        img: MED2
    },
    {
        medicine: 'Ricola Mountain Herb Drops Sugar Free, 45 CT',
        price: '$ 7.29',
        img: MED3
    },
    {
        medicine: 'Betadine Antiseptic Sore Throat Gargle, 8 OZ',
        price: '$ 11.99',
        img: MED4
    },
    {
        medicine: 'Dramamine-N The Nausea Relief Tablets, 10 CT',
        price: '$ 8.99',
        img: MED5
    },
    {
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: '$ 11.79',
        img: MED6
    },
    {
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: '$ 11.79',
        img: MED6
    },
    {
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: '$ 11.79',
        img: MED6
    },
    {
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: '$ 11.79',
        img: MED6
    },
    {
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: '$ 11.79',
        img: MED6
    },
    {
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: '$ 11.79',
        img: MED6
    },
    {
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
                padding: '0 30px'
            }}
        >
            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                parallax={true}
                style={{
                    padding: '30px'
                }}
            >
                {swiperList.map((i) => (
                    <SwiperSlide
                        key={i.medicine}
                        style={{
                            maxWidth: '180px',
                            border: '1px solid #fff',
                            borderRadius: '10px',
                            margin: '0 20px',
                            background: '#fff',
                            boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.25)',
                            overflow: 'hidden'
                        }}
                    >
                        <img src={i.img} style={{ margin: '0 10px', transform: 'scale(.85)' }} />
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
