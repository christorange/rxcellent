import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#37b9c5',
            contrastText: '#fff'
        },
        secondary: {
            main: '#F7FEFF',
            contrastText: '#000000'
        },
        error: {
            main: '#ff5a5a'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '50px',
                    boxShadow: 'none',
                    textTransform: 'none',
                    fontSize: 20
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#37B9C5',
                            borderRadius: '10px',
                            borderWidth: '1px',
                            textColor: '#37B9C5'
                        },
                        '&:hover fieldset': {
                            border: '2px solid #37B9C5'
                        }
                    }
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        cursor: 'pointer'
                    }
                }
            }
        }
    }
});
