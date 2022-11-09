import type { FC } from 'react';
import { Box } from '@mui/material';
import ItemCard from './components/ItemCard/itemCard';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import MED1 from '../../assets/Landing/Carousel/medCard1.png';
import MED2 from '../../assets/Landing/Carousel/medCard2.png';
import MED3 from '../../assets/Landing/Carousel/medCard3.png';
import MED4 from '../../assets/Landing/Carousel/medCard4.png';
import MED5 from '../../assets/Landing/Carousel/medCard5.png';
import MED6 from '../../assets/Landing/Carousel/medCard6.png';

const itemList = [
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
    }
];

const Shopping: FC = () => {
    return (
        <Box
            sx={{
                mx: '30px'
            }}
        >
            <Grid container columns={4}>
                {itemList.map((item) => (
                    <ItemCard medicine={item.medicine} price={item.price} img={item.img} />
                ))}
            </Grid>
        </Box>
    );
};

export default Shopping;
