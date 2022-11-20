import { Button, Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import PrescriptionDrawer from './drawer';

const StyledDiv = styled('div')(() => ({
    height: '45px',
    maxWidth: '100%',
    backgroundColor: '#E4F4F5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: '30px',
    borderBottomLeftRadius: '30px'
}));

const StyledButton = styled(Button)(() => ({
    font: 'Manrope',
    fontSize: '20px',
    fontWeight: '600',
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
