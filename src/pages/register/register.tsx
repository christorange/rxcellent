import { TextField, Button, Avatar, Grid, Typography, Link, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import './register.css';
import { HowToReg } from '@mui/icons-material';
import React, { useState, FC } from 'react';

interface Inputs {
    userename: string;
    email: String;
    password: String;
    repassword: String;
}

const Register: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Inputs>();
    const onSubmit = (data: Inputs) => {
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
                    <HowToReg style={{ color: '#37b9c5' }} />
                </Avatar>
                <Typography component="h1" variant="h5" style={{ marginTop: '20px', textAlign: 'center' }}>
                    Sign up
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="username"
                        label="userename"
                        {...register('userename', { required: true })}
                        style={{ marginTop: '30px' }}
                    />
                    {errors.userename && <span style={{ color: 'red' }}>userename is required</span>}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        {...register('email', { required: true })}
                        label="email"
                        style={{ marginTop: '30px' }}
                    />
                    {errors.email && <span style={{ color: 'red' }}>email is required</span>}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="password"
                        {...register('password', { required: true })}
                        label="password"
                        type="password"
                        style={{ marginTop: '30px' }}
                    />
                    {errors.password && <span style={{ color: 'red' }}>password is required</span>}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="repassword"
                        {...register('repassword', { required: true })}
                        label="repassword"
                        type="password"
                        style={{ marginTop: '30px' }}
                    />
                    {errors.repassword && <span style={{ color: 'red' }}>repassword is required</span>}
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '30px', height: '40px' }}>
                        Sign Up
                    </Button>
                    <Grid container style={{ marginTop: '20px' }}>
                        <Grid item xs>
                            <Link href="/login" variant="body2">
                                Already have account !
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Grid>
    );
};

export default Register;
