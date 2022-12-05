import { FC, useState } from 'react';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { AddCircleRounded, RemoveCircleRounded } from '@mui/icons-material';

const StyledQty = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px'
}));

interface DrugProps {
    name: string;
    img?: string;
    price: number;
    increase: () => void;
    decrease: () => void;
}

const Drug: FC<DrugProps> = ({ name, img, price, increase, decrease }: DrugProps) => {
    const [count, setCount] = useState(1);

    return (
        <Box
            sx={{
                'position': 'relative',
                'width': '100%',
                'height': 'fit-content',
                'display': 'flex',
                'mb': '20px',
                'py': '10px',
                'borderRadius': '10px',
                'alignItems': 'center',
                'backgroundColor': '#fff',
                'boxShadow': '0px 5px 10px 3px rgba(0, 0, 0, 0.07)',
                '&:hover': {
                    transform: 'translateY(-5px)'
                }
            }}
        >
            <img
                src={img}
                style={{
                    height: '100px',
                    width: '100px',
                    margin: '10px'
                }}
            />
            <div
                style={{
                    width: '200px',
                    margin: '0 20px'
                }}
            >
                {name}
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'space-between',
                    gap: '10px',
                    borderRadius: '50px',
                    backgroundColor: '#f0f3f7',
                    width: 'fit-content',
                    height: 'fit-content',
                    //marginRight: '10px',
                    position: 'absolute',
                    right: '10px'
                }}
            >
                <IconButton
                    color="primary"
                    onClick={() => {
                        setCount((prevCount) => prevCount - 1);
                        decrease();
                    }}
                    disabled={count === 0}
                    sx={{ zIndex: '1' }}
                >
                    <RemoveCircleRounded sx={{ fontSize: '40px' }} />
                </IconButton>
                <StyledQty sx={{ zIndex: '1' }}>{count}</StyledQty>
                <IconButton
                    color="primary"
                    onClick={() => {
                        setCount((prevCount) => prevCount + 1);
                        increase();
                    }}
                    sx={{ zIndex: '1' }}
                >
                    <AddCircleRounded sx={{ fontSize: '40px' }} />
                </IconButton>
            </div>
        </Box>
    );
};

export default Drug;
