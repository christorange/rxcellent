import type { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';
import { Navigation } from 'swiper';

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
        medicine: 'Ricola Mountain Herb Drops Sugar Free, 45 CT',
        price: '$ 7.29',
        img: ''
    },
    {
        medicine: 'Betadine Antiseptic Sore Throat Gargle, 8 OZ',
        price: '$ 11.99',
        img: ''
    },
    {
        medicine: 'Dramamine-N The Nausea Relief Tablets, 10 CT',
        price: '$ 8.99',
        img: ''
    },
    {
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: '$ 11.79',
        img: ''
    }
];

const Carousel: FC = () => {
    return (
        <Box sx={{ py: '30px' }}>
            <Swiper slidesPerView={3} spaceBetween={35} navigation={true} modules={[Navigation]}>
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
            </Swiper>
        </Box>
    );
};

export default Carousel;
