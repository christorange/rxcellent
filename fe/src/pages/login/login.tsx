import {
    TextField,
    Alert,
    Button,
    Avatar,
    Grid,
    Typography,
    Link,
    Paper,
    Radio,
    RadioGroup,
    FormControlLabel
} from '@mui/material';
import { useForm } from 'react-hook-form';
import './login.css';
import { Login as LoginIcon } from '@mui/icons-material';
import React, { useState, FC } from 'react';
import { loginApi } from '../../service/user/user.service';
import { LoginInputs } from '../../service/user/user';
import { getValue } from '../utils/getValue';
import { useNavigate } from 'react-router-dom';

import { setCookie } from '../utils/cookie';

const Login: FC = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState<string>();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<LoginInputs>();

    const onSubmit = async (data: LoginInputs) => {
        if (data.idenity == null) data.idenity = 0;
        const result = await loginApi(data);
        if (getValue(result, 'data.status', 0) !== 1) {
            setErrorMsg('your username or password or idenity is error!');
        } else {
            setCookie('token', getValue(result, 'data.data.token', ''));
            navigate('/doctor');
            reset();
        }
    };
    //const handleSignup = () => {};
    return (
        <Grid
            style={{ width: '600px', padding: '40px', margin: '150px auto' }}
            className="login-container"
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
        >
            <div>
                <Avatar style={{ margin: '0 auto' }}>
                    <LoginIcon style={{ color: '#37b9c5' }} />
                </Avatar>
                <Typography
                    component="h1"
                    variant="h5"
                    style={{ marginTop: '40px', textAlign: 'center' }}
                >
                    Sign in
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="username"
                        label="username"
                        {...register('username')}
                        style={{ marginTop: '50px' }}
                    />
                    {errors.username && <span style={{ color: 'red' }}>username is required</span>}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="password"
                        {...register('password', { required: true, min: 6 })}
                        label="password"
                        type="password"
                        style={{ marginTop: '50px' }}
                    />
                    {errors.password && (
                        <span style={{ color: 'red' }}>password format is error</span>
                    )}
                    <RadioGroup
                        id="idenity"
                        defaultValue={0}
                        {...register('idenity')}
                        style={{ marginTop: '40px', display: 'block' }}
                    >
                        <FormControlLabel value={1} label="Doctor" control={<Radio />} />
                        <FormControlLabel value={0} label="Normal" control={<Radio />} />
                    </RadioGroup>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '50px', height: '40px' }}
                    >
                        Sign In
                    </Button>
                    <Grid container style={{ marginTop: '30px' }}>
                        <Grid item xs>
                            <Link href="/forget" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}
        </Grid>
    );
};

export default Login;
