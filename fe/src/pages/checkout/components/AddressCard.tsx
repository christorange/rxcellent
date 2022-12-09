import { styled, TextField } from '@mui/material';
import type { FC } from 'react';

interface IAdressCard {
    props: any;
    handleNameChange: Function;
    handleStreetChange: Function;
    handleCityChange: Function;
    handleZipChange: Function;
    handleEmailChange: Function;
}

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

const AddressCard: FC<IAdressCard> = (data: IAdressCard) => {
    return (
        <>
            <StyledNameField
                onChange={(e) => data.handleNameChange(e)}
                value={data.props.name}
                placeholder={'Name'}
                key="namefield"
            ></StyledNameField>
            <StyledAddressDiv key="styledAddressDiv">
                <StyledAddressField
                    onChange={(e) => data.handleStreetChange(e)}
                    value={data.props.street}
                    placeholder={'Street Address'}
                    key="streetfield"
                ></StyledAddressField>
                <StyledAddressField
                    onChange={(e) => data.handleCityChange(e)}
                    value={data.props.city}
                    placeholder={'City'}
                    key="cityfield"
                ></StyledAddressField>
                <StyledAddressField
                    onChange={(e) => data.handleZipChange(e)}
                    value={data.props.zip}
                    placeholder={'Zip Code'}
                    key="zipfield"
                ></StyledAddressField>
                <StyledAddressField
                    onChange={(e) => data.handleEmailChange(e)}
                    value={data.props.email}
                    placeholder={'Email Address'}
                    key="emailfield"
                ></StyledAddressField>
            </StyledAddressDiv>
        </>
    );
};

export default AddressCard;
