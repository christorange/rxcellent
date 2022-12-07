import { FC, useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SUCCESS from '@assets/success.png';
import { Item } from '@/types/types';
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
                    overflow="inside"
                    radius={20}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <img
                            src={SUCCESS}
                            style={{
                                transform: 'scale(0.8)'
                            }}
                        />
                        <h1 style={{}}>Prescription Verified!</h1>
                        <Box
                            sx={{
                                width: '70%',
                                fontSize: '20px',
                                lineHeight: '1.5'
                            }}
                        >
                            <p>
                                <b>Name: </b> {data?.patientName}
                            </p>
                            <p>
                                <b>Date of birth: </b> {data?.patientDateOfBirth}
                            </p>
                            <p>
                                <b>Rx number: </b>
                                {data?.prescriptionNumber}
                            </p>
                            <p>
                                <b>Medications: </b>
                                <ul>
                                    {meds.map((med: any) => {
                                        return (
                                            <>
                                                <li>
                                                    <b>{`${med.name}   Qty: ${med.qty}`}</b>
                                                </li>
                                            </>
                                        );
                                    })}
                                </ul>
                            </p>
                        </Box>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/shop', { state: [...meds] })}
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
