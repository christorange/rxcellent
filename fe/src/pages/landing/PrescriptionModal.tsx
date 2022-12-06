import { FC, useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getOneItemApi } from './landing.service';

interface PrescriptionModalProps {
    opened: boolean;
    onClose: () => void;
    data?: any;
    mdData?: any;
}

// add a prescirption modal
const PrescriptionModal: FC<PrescriptionModalProps> = ({
    data,
    mdData,
    opened = false,
    onClose
}) => {
    const navigate = useNavigate();

    // const getOneItemByKey = async () => {
    //     const meds: any = [];
    //     if (res !== undefined) {
    //         res.data.medicines.forEach(async (element: any) => {
    //             const med: any = await getOneItemApi(element.key);
    //             meds.push(med.name + '  X' + element.quantity);
    //         });
    //         return meds;
    //     }
    // };

    // const { data, refetch } = useQuery(['oneItemByKey'], getOneItemByKey, {
    //     enabled: true
    // });

    // useEffect(() => {
    //     getOneItemByKey();
    // }, []);

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            centered={true}
            size={600}
            transition="fade"
            transitionDuration={300}
            transitionTimingFunction="ease"
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <h1 style={{}}>Prescription Verified!</h1>
                <Box
                    sx={{
                        width: '70%',
                        fontSize: '24px',
                        lineHeight: '1.5'
                    }}
                >
                    <p>
                        Name:<b>{data?.patientName}</b>
                    </p>
                    <p>
                        Date of birth: <b>{data?.patientDateOfBirth}</b>
                    </p>
                    <p>
                        Rx number: <b>{data?.prescriptionNumber}</b>
                    </p>
                    {/* <p>
                        Physician: <b>Dr. Andrew Lee</b>
                    </p> */}
                    <p>
                        Medications:{' '}
                        {/* <b>Bayer, Headache Aspirin, Pain Relief and Fever Reduction, 500mg;</b> */}
                        <ul>
                            {mdData?.forEach((medicineInfo: string) => {
                                <li>
                                    <b>{medicineInfo}</b>
                                </li>;
                            })}
                        </ul>
                    </p>
                </Box>
                <Button
                    variant="contained"
                    onClick={() => navigate('/shop')}
                    sx={{
                        my: '30px',
                        height: '50px',
                        width: '200px'
                    }}
                >
                    Confirm
                </Button>
            </Box>
        </Modal>
    );
};

export default PrescriptionModal;
