import './navbar.css';
import logo from '../../assets/logo.png';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {
    AppBar,
    Alert,
    Toolbar,
    Button,
    Box,
    IconButton,
    Container,
    Snackbar
} from '@mui/material';
import { FC, useState } from 'react';
import { Link, NavLink, useNavigate, createSearchParams } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    width: '500px',
    height: '40px',
    background: '#F7FEFF',
    border: '1px solid #37B9C5',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    height: '100%',
    width: '12%',
    background: '#37B9C5',
    border: '1px solid #37B9C5',
    borderTopRightRadius: '50px',
    borderBottomRightRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    'color': 'secondary',
    '& .MuiInputBase-input': {
        font: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        color: '#818181',
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            'width': '40ch',
            '&:focus': {
                width: '40ch'
            }
        }
    }
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    style: { color: 'white' },
    height: '100%',
    width: '100%',
    borderRadius: '0',
    borderTopRightRadius: '50px',
    borderBottomRightRadius: '50px'
}));

const StyledButtonGroup = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: '1rem'
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    height: '45px',
    marginBottom: '35px'
}));

const NavbarFC: FC = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSearch = () => {
        if (!keyword) {
            setShowAlert(true);
            return;
        }
        navigate({
            pathname: '/shop',
            search: createSearchParams({
                keyword: `${keyword}`
            }).toString()
        });
    };

    return (
        <>
            <Box
                position="sticky"
                className="appbar"
                style={{ height: '80px', backgroundColor: 'white' }}
            >
                <Toolbar color="default" className="toolbar">
                    <NavLink to="/home">
                        <img src={logo} className="logo" />
                    </NavLink>
                    <Search>
                        <StyledInputBase
                            placeholder="Search for medications and more"
                            style={{ color: '#818181' }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => setKeyword(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleSearch();
                                }
                            }}
                        />
                        <SearchIconWrapper>
                            <StyledIconButton aria-label="SearchButton" onClick={handleSearch}>
                                <SearchIcon fontSize="large" sx={{ color: 'white' }} />
                            </StyledIconButton>
                        </SearchIconWrapper>
                    </Search>
                    <StyledButtonGroup>
                        <Button
                            variant="text"
                            color="primary"
                            style={{
                                fontWeight: 'bold',
                                fontSize: '18px',
                                textTransform: 'none'
                            }}
                        >
                            Are you a doctor?
                        </Button>
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="outlined"
                                style={{
                                    font: 'Manrope',
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    color: '#37B9C5',
                                    borderWidth: '2px',
                                    borderRadius: '20px',
                                    textTransform: 'none'
                                }}
                            >
                                Sign in/up
                            </Button>
                        </Link>
                    </StyledButtonGroup>
                </Toolbar>
            </Box>
            {/* <StyledContainer /> */}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={showAlert}
                onClose={() => setShowAlert(false)}
                autoHideDuration={2000}
            >
                <Alert
                    severity="error"
                    color="error"
                    onClose={() => setShowAlert(false)}
                    sx={{
                        width: '100%',
                        fontSize: '18px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        top: '60px'
                    }}
                >
                    Please enter a keyword
                </Alert>
            </Snackbar>
        </>
    );
};

export default NavbarFC;
