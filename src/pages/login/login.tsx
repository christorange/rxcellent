import { TextField, Box, Button, Avatar, Grid, Typography, Link, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import './login.css';
import { Login as LoginIcon } from '@mui/icons-material';
import React, { useState, FC } from 'react';
import { httpGet } from '../../service/index';

interface Inputs {
    useremail: string;
    password: String;
}

const Login: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Inputs>();
    const onSubmit = (data: Inputs) => {
        httpGet('/users', { user_email: 'shaoyouqing1213@gmail.com', password: '123456' });
        console.log(data);
        // reset();
    };
    const handleSignup = () => {};
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
                <Typography component="h1" variant="h5" style={{ marginTop: '40px', textAlign: 'center' }}>
                    Sign in
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="useremail"
                        label="username or email"
                        {...register('useremail', { required: true })}
                        style={{ marginTop: '50px' }}
                    />
                    {errors.useremail && <span style={{ color: 'red' }}>username or email is required</span>}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="password"
                        {...register('password', { required: true })}
                        label="password"
                        type="password"
                        style={{ marginTop: '50px' }}
                    />
                    {errors.password && <span style={{ color: 'red' }}>password is required</span>}
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '50px', height: '40px' }}>
                        Sign In
                    </Button>
                    <Grid container style={{ marginTop: '30px' }}>
                        <Grid item xs>
                            <Link href="#" variant="body2">
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
        </Grid>
    );
};

export default Login;
