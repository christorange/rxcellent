import type { FC } from 'react';
import { Box } from '@mui/material';
import Logo from '../assets/logo.png';

const FooterFC: FC = () => {
    return (
        <>
            <Box
                component="footer"
                sx={{
                    background: '#50555c'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: '-30px'
                    }}
                >
                    <Box
                        component="img"
                        src={Logo}
                        sx={{
                            transform: 'scale(.35)',
                            ml: '-300px'
                        }}
                    ></Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '100px',
                            alignItems: 'center',
                            ml: '-100px'
                        }}
                    >
                        <Box>
                            <p
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: '20px',
                                    color: 'white'
                                }}
                            >
                                Quick Links
                            </p>
                            <ul
                                style={{
                                    lineHeight: '15px',
                                    fontSize: '18px',
                                    color: 'white',
                                    marginTop: '20px',
                                    listStyle: 'none',
                                    padding: '0'
                                }}
                            >
                                <li>
                                    <p>Privacy Rights</p>
                                </li>
                                <li>
                                    <p>Terms of Use</p>
                                </li>
                                <li>
                                    <p>About Us</p>
                                </li>
                            </ul>
                        </Box>
                        <Box>
                            <p
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: '20px',
                                    color: 'white'
                                }}
                            >
                                Services
                            </p>
                            <ul
                                style={{
                                    lineHeight: '15px',
                                    fontSize: '18px',
                                    color: 'white',
                                    marginTop: '20px',
                                    listStyle: 'none',
                                    padding: '0'
                                }}
                            >
                                <li>
                                    <p>Purchase</p>
                                </li>
                                <li>
                                    <p>Delivery</p>
                                </li>
                                <li>
                                    <p>Consult Physicians</p>
                                </li>
                            </ul>
                        </Box>
                        <Box>
                            <p
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: '20px',
                                    color: 'white'
                                }}
                            >
                                Contact Us
                            </p>
                            <ul
                                style={{
                                    lineHeight: '15px',
                                    fontSize: '18px',
                                    color: 'white',
                                    marginTop: '20px',
                                    listStyle: 'none',
                                    padding: '0'
                                }}
                            >
                                <li>
                                    <p>Email</p>
                                </li>
                                <li>
                                    <p>Twitter</p>
                                </li>
                                <li>
                                    <p>Instagram</p>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        textAlign: 'center',
                        width: '100%',
                        color: 'white',
                        fontSize: '18px',
                        paddingBottom: '20px'
                    }}
                >
                    &copy; 2022 Rxcellent. All rights reserved.
                </Box>
            </Box>
        </>
    );
};

export default FooterFC;
