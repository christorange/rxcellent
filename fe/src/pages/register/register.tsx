import { TextField, Button, Avatar, Grid, Typography, Link, Paper, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import './register.css';
import { HowToReg } from '@mui/icons-material';
import React, { useState, FC } from 'react';
import { validateEmail } from '../utils';
import { registerApi } from '../../service/user/user.service';
import { RegisterInputs } from '../../service/user/user';
import { getValue } from '../utils/getValue';
import { useNavigate } from 'react-router-dom';

const Register: FC = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState<string>();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<RegisterInputs>();
    const onSubmit = async (data: RegisterInputs) => {
        const result = await registerApi(data);
        if (data.password !== data.repassword) {
            setErrorMsg('your password and repassword are not matched!');
            return;
        }
        delete data.repassword;
        if (getValue(result, 'data.status', 0) !== 1) {
            setErrorMsg('your username or email occupied!');
        } else {
            navigate('/login');
            reset();
        }
    };
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
                <Typography
                    component="h1"
                    variant="h5"
                    style={{ marginTop: '20px', textAlign: 'center' }}
                >
                    Sign up
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="username"
                        label="username"
                        {...register('username', { required: true })}
                        style={{ marginTop: '30px' }}
                    />
                    {errors.username && <span style={{ color: 'red' }}>userename is required</span>}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        {...register('email', {
                            required: true,
                            validate: (value: any) => validateEmail(value)
                        })}
                        label="email"
                        style={{ marginTop: '30px' }}
                    />
                    {errors.email && <span style={{ color: 'red' }}>email format is error</span>}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="password"
                        {...register('password', { required: true, min: 6 })}
                        label="password"
                        type="password"
                        style={{ marginTop: '30px' }}
                    />
                    {errors.password && (
                        <span style={{ color: 'red' }}>password format is error</span>
                    )}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="repassword"
                        {...register('repassword', { required: true, min: 6 })}
                        label="repassword"
                        type="password"
                        style={{ marginTop: '30px' }}
                    />
                    {errors.repassword && (
                        <span style={{ color: 'red' }}>repassword format is error</span>
                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '30px', height: '40px' }}
                    >
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
            {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}
        </Grid>
    );
};

export default Register;
