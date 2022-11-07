import type { FC } from 'react';
import { Box } from '@mui/material';
import Logo from '../assets/Logo.svg';

interface footerProps {}

const footerCol = () => {
    return (
        <Box>
            <p></p>
        </Box>
    );
};

const FooterFC: FC = () => {
    return (
        <>
            <Box
                component="footer"
                sx={{
                    background: '#50555c',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: '50px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        mb: '50px',
                        gap: '100px'
                    }}
                >
                    <img
                        src={Logo}
                        style={{
                            width: '400px'
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '150px'
                            //alignItems: 'center',
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
                        color: '#d1d5db',
                        fontSize: '14px',
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
