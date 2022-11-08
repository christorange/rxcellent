import type { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';

const swiperList = [
    {
        medicine: 'ThermaCare Advanced Back Pain Therapy Heatwraps, 2 CT',
        price: '$ 8.49',
        img: ''
    },
    {
        medicine: 'Unisom Simple Slumbers Midnight Raspberry Gummies...',
        price: '$ 11.79',
        img: ''
    },
    {
        medicine: '',
        price: '',
        img: ''
    },
    {
        medicine: '',
        price: '',
        img: ''
    },
    {
        medicine: '',
        price: '',
        img: ''
    },
    {
        medicine: '',
        price: '',
        img: ''
    }
];

const Carousel: FC = () => {
    return (
        <>
            <Swiper slidesPerView={6} spaceBetween={35} grabCursor={true}>
                {swiperList.map((i) => (
                    <SwiperSlide>
                        <Box
                            sx={{
                                display: 'flex',
                                background: 'white',
                                borderRadius: '20px',
                                width: '180px',
                                height: '312px',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <p>{i.medicine}</p>
                        </Box>
                    </SwiperSlide>
                ))}
                ;
            </Swiper>
        </>
    );
};

export default Carousel;
