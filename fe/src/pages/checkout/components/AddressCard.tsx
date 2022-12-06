import { styled, TextField } from '@mui/material';
import type { FC } from 'react';

const AddressCard: FC = () => {
    const StyledAddressDiv = styled('div')(() => ({
        'width': '100%',
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'flex-start',
        'justifyContent': 'flex-start',
        'marginBottom': '1rem',
        '& *': {
            fontSize: '20px',
            fontWeight: 400,
            margin: '0 4px',
            border: 'none'
        }
    }));

    const StyledAddressField = styled(TextField)(() => ({
        'width': '70%',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: 'none'
            },
            '& input': {
                padding: '0.1rem 1.2rem',
                color: '#000000',
                fontSize: '20px',
                fontWeight: 400
            }
        }
    }));

    const StyledNameField = styled(TextField)(() => ({
        'width': '50%',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: 'none'
            },
            '& input': {
                padding: '0.7rem 1.6rem',
                color: '#000000',
                fontSize: '24px',
                fontWeight: 500
            }
        }
    }));

    return (
        <>
            <StyledNameField placeholder={'Name'}></StyledNameField>
            <StyledAddressDiv>
                <StyledAddressField placeholder={'Street Address'}></StyledAddressField>
                <StyledAddressField placeholder={'City'}></StyledAddressField>
                <StyledAddressField placeholder={'Zip Code'}></StyledAddressField>
            </StyledAddressDiv>
        </>
    );
};

export default AddressCard;
