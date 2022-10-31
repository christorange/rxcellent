import { Button, Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import PrescriptionDrawer from '../drawer/drawer';

const StyledDiv = styled('div')(({ theme }) => ({
    height: '45px',
    width: '100vw',
    backgroundColor: '#E4F4F5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: '40px',
    borderBottomLeftRadius: '40px'
}));

const StyledButton = styled(Button)(({ theme }) => ({
    font: 'Manrope',
    fontSize: '20px',
    fontWeight: '700',
    color: '#37B9C5',
    textTransform: 'none'
}));

const Banner = () => {
    const [banner, setBanner] = useState(true);

    const toggleBanner = () => {
        setBanner((prev) => !prev);
    };

    return (
        <div>
            <Collapse in={banner}>
                <StyledDiv>
                    <StyledButton variant="text" disableRipple onClick={toggleBanner}>
                        Need prescription medications? Click here!
                    </StyledButton>
                </StyledDiv>
            </Collapse>
            <Collapse in={!banner}>
                <PrescriptionDrawer toggleBanner={toggleBanner} />
            </Collapse>
        </div>
    );
};

export default Banner;
