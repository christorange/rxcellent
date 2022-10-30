import { KeyboardDoubleArrowUp, MedicalServices, Cake } from '@mui/icons-material';
import { Button, Box, styled, Typography, TextField, IconButton } from '@mui/material';

const StyledOuterDiv = styled('div')(({ theme }) => ({
    width: '100vw',
    height: '300px',
    backgroundColor: '#E4F4F5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledDiv = styled('div')(({ theme }) => ({
    width: '100vw',
    height: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    font: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '30px',
    textAlign: 'center',
    color: '#37B9C5'
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#37B9C5'
        }
    },
    'width': '450px',
    'variant': 'outlined',
    'paddingBottom': '25px'
}));

const StyledSubmitButton = styled(Button)(({ theme }) => ({
    'color': 'white',
    'backgroundColor': '#37B9C5',
    'borderRadius': '50px',
    'textTransform': 'none',
    '&:hover': {
        color: '#37B9C5'
    }
}));

const PrescriptionDrawer = ({ toggleBanner }: any) => {
    return (
        <StyledOuterDiv>
            <StyledDiv>
                {/* <Button sx={{ height: '200px' }} onClick={toggleBanner}>
                Here is drawer
            </Button> */}
                <Box sx={{ width: '50%', marginBottom: '50px' }}>
                    <StyledTypography>Have a prescription?</StyledTypography>
                    <StyledTypography>Fill in the Rx number and</StyledTypography>
                    <StyledTypography>get them without sign in!</StyledTypography>
                </Box>
                <Box sx={{ width: '50%', marginBottom: '10px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <MedicalServices sx={{ color: '#37B9C5', mr: 1, my: 0.5 }} />
                        <StyledTextField placeholder="Rx Number" size="small" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Cake sx={{ color: '#37B9C5', mr: 1, my: 0.5 }} />
                        <StyledTextField placeholder="Date of birth (MM/DD/YYYY)" size="small" />
                    </Box>
                    <StyledSubmitButton variant="outlined" onClick={() => 'abc'}>
                        Get prescription
                    </StyledSubmitButton>
                </Box>
            </StyledDiv>
            <IconButton sx={{ color: '#37B9C5' }} aria-label="collapse drawer" onClick={toggleBanner}>
                <KeyboardDoubleArrowUp />
            </IconButton>
        </StyledOuterDiv>
    );
};

export default PrescriptionDrawer;
