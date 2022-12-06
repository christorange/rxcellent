import './Doctor.scss';

import React, { FC, useEffect, useState } from 'react';
import {
    Alert,
    Box,
    CircularProgress,
    TextField,
    InputAdornment,
    Button,
    Snackbar
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Drug from './Drug';
import { useForm } from 'react-hook-form';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useQuery } from '@tanstack/react-query';
import { getDrugByKeywordApi, createPrescriptionApi } from './Doctor.service';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { Medicine, DrugItem, PrescriptionType, FormType } from './Doctor.type';
import { preview } from 'vite';
import { validateEmail } from '../utils';
import { getValue } from '../utils/getValue';
import { Modal } from '@mantine/core';
import SUCCESS from '@assets/success.png';

const Doctor: FC = () => {
    const [dob, setDob] = useState<Dayjs | null>(null);
    const [expDate, setExpDate] = useState<Dayjs | null>(null);
    const [keyword, setKeyword] = useState('');
    const [open, setOpen] = useState(false);
    const [drugArr, setDrugArr] = useState<DrugItem[]>([]);
    const [medicineArr, setMedicineArr] = useState<Medicine[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [showError, setShowError] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormType>();
    const navigate = useNavigate();
    const { data: res, isLoading } = useQuery(['prescribed search', keyword], async () => {
        const result: any = await getDrugByKeywordApi(keyword);
        return result;
    });

    const clickOption = (option: any) => {
        setDrugArr((prev) => {
            prev = [
                ...prev,
                { key: option.key, name: option.name, img: option.img, price: option.price }
            ];
            return prev;
        });
        setMedicineArr((prev) => {
            return [...prev, { key: option.key, quantity: 1 }];
        });
    };

    const increase = (key: string) => {
        setMedicineArr((prev) => {
            prev.map((item) => {
                if (item.key === key) {
                    item.quantity += 1;
                }
            });
            return prev;
        });
    };

    const decrease = (key: string) => {
        setMedicineArr((prev) => {
            prev.map((item) => {
                if (item.key === key) {
                    if (item.quantity === 1) {
                        prev = prev.filter((med) => med.key !== key);
                        setDrugArr((before) => {
                            before = before.filter((drg) => drg.key !== key);
                            return before;
                        });
                    }
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                    }
                }
            });
            return prev;
        });
    };

    const onSubmit = async (data: FormType) => {
        const prescription: PrescriptionType = {
            ...data,
            mediciens: medicineArr
        };
        console.log(prescription);
        const result: any = await createPrescriptionApi(prescription);
        if (result.status === 200) {
            setShowModal(true);
            reset();
            setDrugArr([]);
            setMedicineArr([]);
        } else {
            setShowError(true);
        }
    };

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <h1>Generate Prescription</h1>
                <div
                    style={{
                        width: '1000px',
                        height: '0',
                        border: '1px solid #d1d5d8'
                    }}
                />
                <section
                    style={{
                        width: '500px'
                    }}
                >
                    <form>
                        <h3>Patient&rsquo;s Name</h3>
                        <TextField
                            required
                            variant="outlined"
                            placeholder="First name"
                            color="primary"
                            id="firstName"
                            sx={{
                                width: '100%',
                                mb: '20px'
                            }}
                            {...register('patientFirstName', { required: true })}
                        />
                        {errors.patientFirstName && (
                            <span style={{ color: 'red' }}>First name is required</span>
                        )}
                        <TextField
                            variant="outlined"
                            placeholder="Middle name (optional)"
                            color="primary"
                            sx={{
                                width: '100%',
                                mb: '20px'
                            }}
                            {...register('patientMiddleName', { required: false })}
                        />
                        <TextField
                            variant="outlined"
                            placeholder="Last name"
                            color="primary"
                            sx={{
                                width: '100%',
                                mb: '10px'
                            }}
                            {...register('patientLastName', { required: true })}
                        />
                        {errors.patientLastName && (
                            <span style={{ color: 'red' }}>Last name is required</span>
                        )}
                        <h3>Patient&rsquo;s Email</h3>
                        <TextField
                            variant="outlined"
                            placeholder="Email"
                            sx={{ width: '100%', mb: '10px' }}
                            {...register('patientEmail', {
                                required: true,
                                validate: (value: any) => validateEmail(value)
                            })}
                        />
                        {errors.patientEmail && (
                            <span style={{ color: 'red' }}>Email is required</span>
                        )}
                        <h3>Patient&rsquo;s Phone Number</h3>
                        <TextField
                            variant="outlined"
                            placeholder="Phone number"
                            sx={{ width: '100%', mb: '10px' }}
                            {...register('patientPhoneNumber', { required: true })}
                        />
                        {errors.patientPhoneNumber && (
                            <span style={{ color: 'red' }}>Phone number is required</span>
                        )}
                        <h3>Patient&rsquo;s Date of Birth</h3>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={dob}
                                onChange={(newValue) => {
                                    setDob(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        sx={{ width: '100%', mb: '10px' }}
                                        {...register('patientDateOfBirth', { required: true })}
                                    />
                                )}
                            />
                            {errors.patientDateOfBirth && (
                                <span style={{ color: 'red' }}>Date of birth is required</span>
                            )}
                        </LocalizationProvider>
                        <h3>Prescription Expiration Date</h3>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={expDate}
                                onChange={(newValue) => {
                                    setExpDate(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        sx={{ width: '100%', mb: '10px' }}
                                        {...register('patientPrescriptionExpiration', {
                                            required: true
                                        })}
                                    />
                                )}
                            />
                            {errors.patientPrescriptionExpiration && (
                                <span style={{ color: 'red' }}>
                                    Prescription expiration date is required
                                </span>
                            )}
                        </LocalizationProvider>
                    </form>
                    <h3>Add medications</h3>
                    <Autocomplete
                        options={res?.data || []}
                        getOptionLabel={(option: any) => option?.name || ''}
                        loading={isLoading}
                        open={open}
                        onOpen={() => setOpen(true)}
                        onClose={() => setOpen(false)}
                        autoComplete
                        sx={{ width: '100%', mb: '30px' }}
                        filterOptions={(x) => x}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Search for medications"
                                onChange={(e) => setKeyword(e.target.value)}
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {isLoading && <CircularProgress color="inherit" />}
                                            {params.InputProps.endAdornment}
                                        </InputAdornment>
                                    )
                                }}
                            />
                        )}
                        renderOption={(props, option) => {
                            return (
                                <li {...props}>
                                    <div>
                                        <span onClick={() => clickOption(option)}>
                                            {option.name}
                                        </span>
                                    </div>
                                </li>
                            );
                        }}
                    />
                    <h3>Added medications:</h3>
                    {drugArr.map((drug) => (
                        <Drug
                            img={drug.img}
                            name={drug.name}
                            price={drug.price}
                            key={drug.key}
                            increase={() => increase(drug.key)}
                            decrease={() => decrease(drug.key)}
                        />
                    ))}
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            mt: '50px',
                            width: '100%',
                            height: '50px'
                        }}
                        onClick={handleSubmit(onSubmit)}
                    >
                        Submit
                    </Button>
                </section>
            </Box>
            <Modal
                opened={showModal}
                onClose={() => setShowModal(false)}
                centered={true}
                transition="fade"
                transitionDuration={300}
                transitionTimingFunction="ease"
                size={500}
                radius={20}
                overflow="inside"
                sx={{
                    '& .mantine-Modal-body': {
                        padding: '0 10px'
                    }
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: 'fit-content'
                    }}
                >
                    <img src={SUCCESS} />
                    <h2
                        style={{
                            margin: '30px 0'
                        }}
                    >
                        Prescription Generated
                    </h2>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            width: '200px',
                            height: '50px'
                        }}
                        onClick={() => navigate('/')}
                    >
                        Back to home
                    </Button>
                </Box>
            </Modal>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={showError}
                onClose={() => setShowError(false)}
                autoHideDuration={2000}
            >
                <Alert
                    severity="error"
                    color="error"
                    onClose={() => setShowError(false)}
                    sx={{
                        width: '200px',
                        fontSize: '18px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        top: '60px'
                    }}
                >
                    Failed
                </Alert>
            </Snackbar>
        </>
    );
};

export default Doctor;
