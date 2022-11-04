import type { FC } from 'react';
import { Box, Container } from '@mui/material';
import RxImg1 from '../../assets/Landing/Rx-img1.svg';
import RxImg2 from '../../assets/Landing/Rx-img2.svg';
import RxImg3 from '../../assets/Landing/Rx-img3.svg';
//import {TextField, Button} from '@mui/joy';
import { MedicalServicesRounded, CakeRounded } from '@mui/icons-material';
import { TextField, styled, Button, Stack } from '@mui/material';

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#37B9C5'
        }
    },
    'width': '450px',
    'marginLeft': '25px'
}));

const Landing: FC = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#f7feff',
                    width: '100%',
                    py: '100px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        pt: '50px'
                    }}
                >
                    <Box
                        component="img"
                        src={RxImg1}
                        sx={{
                            mr: '40px',
                            transform: 'scale(.85)'
                        }}
                    />
                    <Box sx={{ ml: '40px' }}>
                        <Box
                            component="h2"
                            sx={{
                                color: '#37B9C5',
                                fontSize: '40px',
                                textAlign: 'center',
                                my: '60px'
                            }}
                        >
                            No more jumping through hoops
                            <br />
                            to get your prescription
                        </Box>
                        <Box
                            sx={{
                                color: '#37b9c5',
                                fontSize: '28px',
                                textAlign: 'center'
                            }}
                        >
                            Fill in your Rx number, and we'll do the rest.
                            <br />
                            No sign up required!
                            <br />
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            mr: '40px',
                            pt: '120px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: '20px'
                            }}
                        >
                            <MedicalServicesRounded sx={{ color: '#37B9C5' }} fontSize="large" />
                            <StyledTextField variant="outlined" label="Rx number" />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <CakeRounded sx={{ color: '#37B9C5' }} fontSize="large" />
                            <StyledTextField label="Date of birth (MM/DD/YYYY)" />
                        </Box>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                color: '#fff',
                                background: '#37B9C5',
                                borderRadius: '50px',
                                mt: '50px',
                                height: '60px',
                                width: '250px'
                            }}
                        >
                            Get prescription
                        </Button>
                    </Box>
                    <Box
                        component="img"
                        src={RxImg2}
                        sx={{
                            ml: '40px',
                            transform: 'scale(.85)'
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: '30px'
                    }}
                >
                    <Box
                        component="img"
                        src={RxImg3}
                        sx={{
                            mr: '40px',
                            transform: 'scale(.95)'
                        }}
                    />
                    <Box
                        sx={{
                            ml: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Box
                            component="h2"
                            sx={{
                                color: '#37B9C5',
                                fontSize: '40px',
                                textAlign: 'center'
                            }}
                        >
                            Already have a
                            <br />
                            prescription with us?
                        </Box>
                        <Box
                            sx={{
                                color: '#37b9c5',
                                fontSize: '28px',
                                textAlign: 'center'
                            }}
                        >
                            Create an account to
                            <br />
                            keep your prescription records
                            <br />
                            and get your medication with one click!
                        </Box>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                color: '#fff',
                                background: '#37B9C5',
                                borderRadius: '50px',
                                mt: '50px',
                                height: '60px',
                                width: '250px'
                            }}
                        >
                            Refill prescription
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Landing;
