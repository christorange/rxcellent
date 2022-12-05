import './Doctor.scss';

import React, { FC, useEffect, useState } from 'react';
import {
    Box,
    CircularProgress,
    TextField,
    InputAdornment,
    IconButton,
    Button,
    Avatar,
    Container,
    Typography,
    Link,
    Alert
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Drug from './Drug';
import { useForm } from 'react-hook-form';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useQuery } from '@tanstack/react-query';
import { getDrugByKeywordApi } from './Doctor.service';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { Medicine, DrugItem } from './Doctor.type';
import { preview } from 'vite';

const Doctor: FC = () => {
    const [date, setDate] = useState<Dayjs | null>(null);
    const [keyword, setKeyword] = useState('');
    const [open, setOpen] = useState(false);
    const [drugArr, setDrugArr] = useState<DrugItem[]>([]);
    const [medicineArr, setMedicineArr] = useState<Medicine[]>([]);

    const { data: res, isLoading } = useQuery(['prescribed search', keyword], async () => {
        const result: any = await getDrugByKeywordApi(keyword);
        return result;
    });

    const clickOption = (option: any) => {
        setDrugArr((prev) => {
            // prev.map((item, index)=>{
            //     if(item.key === option.key){
            //         prev.splice(index, 1);
            //         return prev;
            //     }
            // })
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

    useEffect(() => {
        console.log('med', medicineArr);
        console.log('drug', drugArr);
    }, [medicineArr, drugArr]);

    return (
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
                <h3>Patient&rsquo;s Name</h3>
                <TextField
                    required
                    variant="outlined"
                    placeholder="First name"
                    color="primary"
                    sx={{
                        width: '100%',
                        mb: '20px'
                    }}
                />
                <TextField
                    variant="outlined"
                    placeholder="Middle name (optional)"
                    color="primary"
                    sx={{
                        width: '100%',
                        mb: '20px'
                    }}
                />
                <TextField
                    variant="outlined"
                    placeholder="Last name"
                    color="primary"
                    sx={{
                        width: '100%',
                        mb: '10px'
                    }}
                />
                <h3>Patient&rsquo;s Email</h3>
                <TextField
                    variant="outlined"
                    placeholder="Email"
                    sx={{ width: '100%', mb: '10px' }}
                />
                <h3>Patient&rsquo;s Phone Number</h3>
                <TextField
                    variant="outlined"
                    placeholder="Phone number"
                    sx={{ width: '100%', mb: '10px' }}
                />
                <h3>Patient&rsquo;s Date of Birth</h3>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} sx={{ width: '100%', mb: '10px' }} />
                        )}
                    />
                </LocalizationProvider>
                <h3>Prescription Expiration Date</h3>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} sx={{ width: '100%', mb: '10px' }} />
                        )}
                    />
                </LocalizationProvider>
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
                                    <span onClick={() => clickOption(option)}>{option.name}</span>
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
                {/* <TextField 
                    variant='outlined'
                    placeholder='Search for medications'
                    sx={{width: '100%', mb: '10px'}}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSearch();
                        }
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton 
                                    onClick={
                                        () => handleSearch()
                                    }>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    
                /> */}
            </section>
        </Box>
    );
};

export default Doctor;
