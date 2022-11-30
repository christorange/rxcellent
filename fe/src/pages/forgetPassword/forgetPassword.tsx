import { TextField, Button, Avatar, Grid, Typography, Link, Paper, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import './index.css';
import { HowToReg } from '@mui/icons-material';
import React, { useState, FC } from 'react';
import { validateEmail } from '../utils';
import { useNavigate } from 'react-router-dom';
import { changePasswordApi } from '../../service/user/user.service';
import { RegisterInputs } from '../../service/user/user';
import { getValue } from '../utils/getValue';

const forgetPassword: FC = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState<string>();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<RegisterInputs>();
    const onSubmit = async (data: RegisterInputs) => {
        const result = await changePasswordApi(data);

        if (data.password !== data.repassword) {
            setErrorMsg('your password and repassword are not matched!');
            return;
        }
        delete data.repassword;
        if (getValue(result, 'data.status', 0) !== 1) {
            setErrorMsg('your email is error!');
        } else {
            navigate('/login');
        }
        reset();
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
                    style={{ marginTop: '40px', textAlign: 'center' }}
                >
                    Forget Password
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        {...register('email', {
                            required: true,
                            validate: (value: any) => value === validateEmail(value)
                        })}
                        label="email"
                        style={{ marginTop: '50px' }}
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
                        style={{ marginTop: '50px' }}
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
                        style={{ marginTop: '50px' }}
                    />
                    {errors.repassword && (
                        <span style={{ color: 'red' }}>repassword is required</span>
                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '30px', height: '40px' }}
                    >
                        Change
                    </Button>
                    <Grid container style={{ marginTop: '20px' }}>
                        <Grid item xs>
                            <Link href="/login" variant="body2">
                                I want to login
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}
        </Grid>
    );
};

export default forgetPassword;
