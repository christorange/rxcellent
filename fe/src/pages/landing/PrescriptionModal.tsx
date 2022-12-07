import { FC, useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getOneItemApi } from './landing.service';
import { l } from 'vitest/dist/index-220c1d70';

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
    const [flag, setFlag] = useState(false);
    const [meds, setMeds] = useState([]);

    useEffect(() => {
        if (mdData !== undefined) {
            // eslint-disable-next-line no-inner-declarations
            Promise.all(mdData).then((res: any) => setMeds(res));
            setFlag(true);
        }
    }, [data, mdData]);

    return (
        <>
            {flag && (
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
                            <p>
                                Medications:{' '}
                                <ul>
                                    <>
                                        {meds.forEach((medicineInfo: string) => {
                                            <li>
                                                <b>{JSON.stringify(medicineInfo)}</b>
                                            </li>;
                                        })}
                                    </>
                                </ul>
                            </p>
                            {JSON.stringify(meds)}
                            {/* {meds.forEach((medicineInfo: string) => {
                                <p>
                                    <b>{JSON.stringify(medicineInfo)}</b>
                                </p>;
                            })} */}
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
            )}
        </>
    );
};

export default PrescriptionModal;
