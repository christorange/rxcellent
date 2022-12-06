import './Landing.scss';

import type { FC } from 'react';
import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { MedicalServicesRounded, CakeRounded } from '@mui/icons-material';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Carousel from './Carousel';
import { createSearchParams, useNavigate } from 'react-router-dom';
import PrescriptionModal from './PrescriptionModal';

import doctor from '@assets/doctor.png';
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

const Landing: FC = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState<Dayjs | null>(null);
    const [isModalOpened, setIsModalOpened] = useState(false);

    return (
        <>
            <div className="welcome">
                <div>
                    Get your medication <br />
                    delivered to you <br />
                    <a
                        className="link"
                        onClick={() => {
                            navigate('/shop');
                        }}
                        style={{
                            cursor: 'pointer'
                        }}
                    >
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
                    flexWrap: 'nowrap',
                    height: '450px',
                    backgroundColor: '#E4F4F5',
                    paddingY: '25px'
                }}
            >
                {/* box 1 */}
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                    }}
                >
                    <div className="dot">
                        <img
                            src={img1}
                            className="icons"
                            onClick={() => {
                                navigate({
                                    pathname: '/shop',
                                    search: createSearchParams({
                                        category: 'Cold, Cough & Flu'
                                    }).toString()
                                });
                            }}
                        />
                    </div>
                    <br></br>
                    <div className="text">Cold, Cough & Flu</div>
                </Box>

                {/* box 2 */}
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end'
                    }}
                >
                    <div className="dot">
                        <img
                            src={img2}
                            className="digest"
                            onClick={() => {
                                navigate({
                                    pathname: '/shop',
                                    search: createSearchParams({
                                        category: 'Digestive Health'
                                    }).toString()
                                });
                            }}
                        />
                    </div>
                    <br></br>
                    <div className="text">Digestive Health</div>
                </Box>

                {/* box  */}
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                    }}
                >
                    <div className="dot">
                        <img
                            src={img3}
                            className="icons1"
                            onClick={() => {
                                navigate({
                                    pathname: '/shop',
                                    search: createSearchParams({
                                        category: 'Home Tests'
                                    }).toString()
                                });
                            }}
                        />
                    </div>
                    <br></br>
                    <div className="text">Home Tests</div>
                </Box>

                {/* box  */}
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end'
                    }}
                >
                    <div className="dot">
                        <img
                            src={img4}
                            className="diabetes"
                            onClick={() => {
                                navigate({
                                    pathname: '/shop',
                                    search: createSearchParams({
                                        category: 'Diabetes'
                                    }).toString()
                                });
                            }}
                        />
                    </div>
                    <br></br>
                    <div className="text">Diabetes</div>
                </Box>

                {/* box  */}
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                    }}
                >
                    <div className="dot">
                        <img
                            src={img5}
                            className="icons1"
                            onClick={() => {
                                navigate({
                                    pathname: '/shop',
                                    search: createSearchParams({
                                        category: 'Pain & Fever'
                                    }).toString()
                                });
                            }}
                        />
                    </div>
                    <br></br>
                    <div className="text">Pain & Fever</div>
                </Box>

                {/* box  */}
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end'
                    }}
                >
                    <div className="dot">
                        <img
                            src={img6}
                            className="icons1"
                            onClick={() => {
                                navigate({
                                    pathname: '/shop',
                                    search: createSearchParams({
                                        category: 'Weight Loss'
                                    }).toString()
                                });
                            }}
                        />
                    </div>
                    <br></br>
                    <div className="text">Weight Loss</div>
                </Box>

                {/* box  */}
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}
                >
                    <div className="dot">
                        <img
                            src={img7}
                            className="icons1"
                            onClick={() => {
                                navigate({
                                    pathname: '/shop',
                                    search: createSearchParams({
                                        category: 'Vitamins & Supplements'
                                    }).toString()
                                });
                            }}
                        />
                    </div>
                    <br></br>
                    <div className="text">Vitamines & Supplements</div>
                </Box>

                {/* End of categories  */}
            </Box>
            <div
                style={{
                    height: '200px',
                    backgroundColor: '#f7feff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '48px',
                    color: '#37b9c5',
                    fontWeight: 'bold'
                }}
            >
                <p>Trending in medication</p>
            </div>
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
                            Fill in your Rx number, and we&lsquo;ll do the rest.
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
                                <MedicalServicesRounded
                                    sx={{ color: '#37B9C5' }}
                                    fontSize="large"
                                />
                                <TextField
                                    variant="outlined"
                                    placeholder="Rx number"
                                    color="primary"
                                    sx={{
                                        width: '450px',
                                        ml: '25px'
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <CakeRounded sx={{ color: '#37B9C5' }} fontSize="large" />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        toolbarPlaceholder="Date of birth (MM/DD/YYYY)"
                                        value={date}
                                        onChange={(newValue) => {
                                            setDate(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                sx={{ width: '450px', marginLeft: '25px' }}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Box>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => setIsModalOpened(true)}
                                sx={{
                                    color: '#fff',
                                    background: '#37B9C5',
                                    borderRadius: '50px',
                                    mt: '50px',
                                    ml: '25px',
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
                                variant="contained"
                                size="large"
                                sx={{
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
            <PrescriptionModal opened={isModalOpened} onClose={() => setIsModalOpened(false)} />
        </>
    );
};

export default Landing;
