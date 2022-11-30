import { KeyboardDoubleArrowUp, MedicalServices, Cake } from '@mui/icons-material';
import { Button, Box, styled, Typography, TextField, IconButton } from '@mui/material';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

const StyledOuterDiv = styled('div')(({ theme }) => ({
    width: '100vw',
    height: '300px',
    backgroundColor: '#E4F4F5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: '30px',
    borderBottomLeftRadius: '30px'
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
    width: '450px',
    variant: 'outlined',
    paddingBottom: '25px'
}));

const PrescriptionDrawer = ({ toggleBanner }: any) => {
    const [date, setDate] = useState<Dayjs | null>(null);

    return (
        <StyledOuterDiv>
            <StyledDiv>
                <Box sx={{ width: '50%', marginBottom: '50px' }}>
                    <StyledTypography>Already have a prescription?</StyledTypography>
                    <StyledTypography>Fill in the Rx number and</StyledTypography>
                    <StyledTypography>get them without sign in!</StyledTypography>
                </Box>
                <Box sx={{ width: '50%' }}>
                    <Box
                        sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}
                    >
                        <MedicalServices
                            sx={{ color: '#37B9C5', mr: '25px', my: 0.5 }}
                            fontSize="large"
                        />
                        <StyledTextField placeholder="Rx Number" />
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}
                    >
                        <Cake sx={{ color: '#37B9C5', mr: '25px', my: 0.5 }} fontSize="large" />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                toolbarPlaceholder="Date of birth (MM/DD/YYYY)"
                                value={date}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} sx={{ width: '450px' }} />
                                )}
                            />
                        </LocalizationProvider>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: '25px' }}>
                        <Button
                            variant="contained"
                            onClick={() => 'abc'}
                            sx={{
                                width: '250px',
                                height: '50px',
                                ml: '25px'
                            }}
                        >
                            Get prescription
                        </Button>
                    </Box>
                </Box>
            </StyledDiv>
            <IconButton
                sx={{ color: '#37B9C5' }}
                aria-label="collapse drawer"
                onClick={toggleBanner}
            >
                <KeyboardDoubleArrowUp />
            </IconButton>
        </StyledOuterDiv>
    );
};

export default PrescriptionDrawer;
