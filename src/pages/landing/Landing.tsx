import type { FC } from 'react';
import { Box } from '@mui/material';
import doctor from '../../assets/doctor.png';
import RxImg1 from '../../assets/Landing/Rx-img1.svg';
import RxImg2 from '../../assets/Landing/Rx-img2.svg';
import RxImg3 from '../../assets/Landing/Rx-img3.svg';
import img1 from '../../assets/Landing/image29.png';
import img2 from '../../assets/Landing/image23.png';
import img3 from '../../assets/Landing/image24.png';
import img4 from '../../assets/Landing/image25.png';
import img5 from '../../assets/Landing/image26.png';
import img6 from '../../assets/Landing/image27.png';
import img7 from '../../assets/Landing/image28.png';

//import {TextField, Button} from '@mui/joy';
import { MedicalServicesRounded, CakeRounded } from '@mui/icons-material';
import { TextField, styled, Button } from '@mui/material';
import Carousel from './Carousel';
import './Landing.css';

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
            <div
                className="welcome"
                style={{
                    paddingTop: '50px'
                }}
            >
                <div>
                    Get your medication <br />
                    delivered to you <br />
                    <a className="link" href="">
                        See all of our products {'\u2192'}
                    </a>
                </div>
                <div>
                    <img src={doctor} className="happy-doctor"></img>
                </div>
            </div>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    height: '448px',
                    backgroundColor: '#E4F4F5'
                }}
            >
                {/* box 1 */}
                <Box
                    component="div"
                    sx={{
                        'display': 'flex',
                        'flexDirection': 'column',
                        'p': 3,
                        'justifyContent': 'flex-start',
                        'padding': '25px',
                        '&:hover': {
                            opacity: [0.9, 0.8, 0.7]
                        }
                    }}
                >
                    <div className="dot">
                        <img src={img1} className="icons"></img>
                    </div>
                    <br></br>
                    <div className="text">Cold, Cough & Flu</div>
                </Box>

                {/* box 2 */}
                <Box
                    component="div"
                    sx={{
                        'display': 'flex',
                        'flexDirection': 'column',
                        'p': 3,
                        'justifyContent': 'flex-end',
                        'padding': '25px',
                        '&:hover': {
                            opacity: [0.9, 0.8, 0.7]
                        }
                    }}
                >
                    <div className="dot">
                        <img src={img2} className="digest"></img>
                    </div>
                    <br></br>
                    <div className="text">Digesetive Health</div>
                </Box>

                {/* box  */}
                <Box
                    component="div"
                    sx={{
                        'display': 'flex',
                        'flexDirection': 'column',
                        'p': 3,
                        'justifyContent': 'flex-start',
                        'padding': '25px',
                        '&:hover': {
                            opacity: [0.9, 0.8, 0.7]
                        }
                    }}
                >
                    <div className="dot">
                        <img src={img3} className="icons1"></img>
                    </div>
                    <br></br>
                    <div className="text">Home Tests</div>
                </Box>

                {/* box  */}
                <Box
                    component="div"
                    sx={{
                        'display': 'flex',
                        'flexDirection': 'column',
                        'p': 3,
                        'justifyContent': 'flex-end',
                        'padding': '25px',
                        '&:hover': {
                            opacity: [0.9, 0.8, 0.7]
                        }
                    }}
                >
                    <div className="dot">
                        <img src={img4} className="diabetes"></img>
                    </div>
                    <br></br>
                    <div className="text">Diabetes</div>
                </Box>

                {/* box  */}
                <Box
                    component="div"
                    sx={{
                        'display': 'flex',
                        'flexDirection': 'column',
                        'p': 3,
                        'justifyContent': 'flex-start',
                        'padding': '25px',
                        '&:hover': {
                            opacity: [0.9, 0.8, 0.7]
                        }
                    }}
                >
                    <div className="dot">
                        <img src={img5} className="icons1"></img>
                    </div>
                    <br></br>
                    <div className="text">Pain & Fever</div>
                </Box>

                {/* box  */}
                <Box
                    component="div"
                    sx={{
                        'display': 'flex',
                        'flexDirection': 'column',
                        'p': 3,
                        'justifyContent': 'flex-end',
                        'padding': '25px',
                        '&:hover': {
                            opacity: [0.9, 0.8, 0.7]
                        }
                    }}
                >
                    <div className="dot">
                        <img src={img6} className="icons1"></img>
                    </div>
                    <br></br>
                    <div className="text">Weight Loss</div>
                </Box>

                {/* box  */}
                <Box
                    component="div"
                    sx={{
                        'display': 'flex',
                        'flexDirection': 'column',
                        'p': 3,
                        'justifyContent': 'flex-start',
                        'padding': '25px',
                        '&:hover': {
                            opacity: [0.9, 0.8, 0.7]
                        }
                    }}
                >
                    <div className="dot">
                        <img src={img7} className="icons1"></img>
                    </div>
                    <br></br>
                    <div className="text">
                        Vitamines & <br></br>Supplements
                    </div>
                </Box>

                {/* End of categories  */}
            </Box>
            <div
                style={{
                    height: '200px',
                    backgroundColor: '#f7feff'
                }}
            ></div>
            <Carousel />
            {/*  */}
            <Box
                sx={{
                    backgroundColor: '#f7feff',
                    pt: '100px',
                    pb: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        pt: '50px',
                        width: '1200px'
                    }}
                >
                    <Box
                        component="img"
                        src={RxImg1}
                        sx={{
                            width: '400px'
                        }}
                    />
                    <Box
                        sx={{
                            width: '600px'
                        }}
                    >
                        <Box
                            component="h2"
                            sx={{
                                color: '#37B9C5',
                                fontSize: '36px',
                                textAlign: 'center'
                            }}
                        >
                            No more jumping through hoops
                            <br />
                            to get your prescription
                        </Box>
                        <Box
                            sx={{
                                color: '#37b9c5',
                                fontSize: '22px',
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
                        justifyContent: 'space-between',
                        width: '1200px'
                    }}
                >
                    <Box
                        sx={{
                            pt: '120px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            width: '600px'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    pb: '20px'
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
                    </Box>
                    <Box component="img" src={RxImg2} sx={{ width: '400px' }} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        pt: '30px',
                        width: '1200px'
                    }}
                >
                    <Box component="img" src={RxImg3} sx={{ width: '400px' }} />
                    <Box sx={{ width: '600px' }}>
                        <Box
                            sx={{
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
            </Box>
        </>
    );
};

export default Landing;
