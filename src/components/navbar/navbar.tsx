import './navbar.css';
import logo from '../../assets/logo.png';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Toolbar, Button, IconButton, Container } from '@mui/material';

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
    backgroundColor: '#E4F4F5',
    color: '#37B9C5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Manrope',
    fontSize: '20px',
    fontStyle: 'bold',
    marginBottom: '10px'
}));

const Navbar = () => {
    return (
        <div>
            <AppBar position="fixed" elevation={0} className="appbar" style={{ height: '80px', backgroundColor: 'white' }}>
                <Toolbar color="default" className="toolbar">
                    <img src={logo} className="logo" />
                    <Search>
                        <StyledInputBase
                            placeholder="Search for medications and more"
                            style={{ color: '#818181' }}
                            inputProps={{ 'aria-label': 'search' }}
                        ></StyledInputBase>
                        <SearchIconWrapper>
                            <StyledIconButton>
                                <SearchIcon fontSize="large" sx={{ color: 'white' }} />
                            </StyledIconButton>
                        </SearchIconWrapper>
                    </Search>
                    <StyledButtonGroup>
                        <Button
                            style={{
                                color: '#37B9C5',
                                backgroundColor: 'transparent',
                                font: 'Manrope',
                                fontWeight: '700',
                                fontSize: '16px',
                                textTransform: 'none'
                            }}
                        >
                            Are you a doctor?
                        </Button>
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
                    </StyledButtonGroup>
                </Toolbar>
            </AppBar>
            <StyledContainer />
        </div>
    );
};

export default Navbar;
