import { KeyboardArrowUpOutlined } from '@mui/icons-material';
import { Box, Button, Collapse, IconButton, styled, Typography } from '@mui/material';
import { useState } from 'react';
import type { FC } from 'react';

const StyledDiv = styled('div')(({ theme }) => ({
    width: '15vw',
    height: '30vw',
    backgroundColor: '#E4F4F5'
}));

const StyledBox = styled(Box)(({ theme }) => ({
    height: '30px',
    paddingTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

const StyledMenuHeader = styled(Typography)(({ theme }) => ({
    component: 'span',
    font: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px'
}));

const StyledSubMenu = styled(Typography)(({ theme }) => ({
    'font': 'Manrope',
    'fontStyle': 'normal',
    'fontWeight': '400',
    'fontSize': '16px',
    '&:hover': {
        cursor: 'pointer'
    }
}));

const Filter: FC = () => {
    const [showCategory, setShowCategory] = useState(true);
    const [showBrand, setShowBrand] = useState(false);
    const [showPrice, setShowPrice] = useState(false);

    return (
        <StyledDiv>
            <StyledBox>
                <StyledMenuHeader>Category</StyledMenuHeader>
                <IconButton onClick={() => setShowCategory((prev) => !prev)} sx={{ color: '#37B9C5' }}>
                    <KeyboardArrowUpOutlined fontSize="large"></KeyboardArrowUpOutlined>
                </IconButton>
            </StyledBox>
            <Collapse in={showCategory} sx={{ paddingLeft: '15px' }}>
                <StyledSubMenu onClick={() => alert('sdfsdf')}>Cold, Cough & Flu</StyledSubMenu>
                <StyledSubMenu>Pain & Fever</StyledSubMenu>
                <StyledSubMenu>Home Tests</StyledSubMenu>
                <StyledSubMenu>Digestive Health</StyledSubMenu>
                <StyledSubMenu>Diabetes</StyledSubMenu>
                <StyledSubMenu>Vitamins & Supplements</StyledSubMenu>
                <StyledSubMenu>Weight Loss</StyledSubMenu>
            </Collapse>
            <hr color="#D1D5DB"></hr>

            <Collapse in={showBrand} onClick={() => setShowBrand((prev) => !prev)}>
                def
            </Collapse>
            <Collapse in={showPrice} onClick={() => setShowPrice((prev) => !prev)}>
                ghi
            </Collapse>
        </StyledDiv>
    );
};

export default Filter;
