import type { FC } from 'react';
import { Box, Link } from '@mui/material';
import Logo from '../assets/Logo.svg';

interface footerProps {
    title: string;
    links: string[];
}

const FooterCol = ({ title, links }: footerProps) => {
    return (
        <Box>
            <p
                style={{
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: 'white'
                }}
            >
                {title}
            </p>
            <ul
                style={{
                    marginTop: '20px',
                    listStyle: 'none',
                    padding: '0'
                }}
            >
                {links.map((i) => (
                    <li>
                        <Link
                            sx={{
                                lineHeight: '45px',
                                fontSize: '18px',
                                color: 'white'
                            }}
                            underline="hover"
                        >
                            {i}
                        </Link>
                    </li>
                ))}
            </ul>
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
                    pt: '50px',
                    px: '100px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: '50px',
                        minWidth: '1100px',
                        mx: 'auto'
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
                        }}
                    >
                        <FooterCol title="Quick Links" links={['Privacy Policy', 'Terms of Use', 'Contact Us']} />
                        <FooterCol title="Services" links={['Delivery', 'Purchase', 'Consulting']} />
                        <FooterCol title="Social Media" links={['Facebook', 'Twitter', 'Linkedin']} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        textAlign: 'center',
                        width: '100%',
                        color: '#d1d5db',
                        fontSize: '14px',
                        paddingBottom: '20px',
                        textJustify: 'center'
                    }}
                >
                    &copy; 2022 Rxcellent. All rights reserved.
                </Box>
            </Box>
        </>
    );
};

export default FooterFC;
