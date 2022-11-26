import type { FC } from 'react';
import { Modal } from '@mantine/core';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface PrescriptionModalProps {
    opened: boolean;
    onClose: () => void;
}

// add a prescirption modal
const PrescriptionModal: FC<PrescriptionModalProps> = ({ opened = false, onClose }) => {
    const navigate = useNavigate();

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
                        Name: <b>Jack Hall</b>
                    </p>
                    <p>
                        Date of birth: <b>07/01/1995</b>
                    </p>
                    <p>
                        Rx number: <b>2022110900001</b>
                    </p>
                    <p>
                        Physician: <b>Dr. Andrew Lee</b>
                    </p>
                    <p>
                        Medications: <b>Bayer, Headache Aspirin, Pain Relief and Fever Reduction, 500mg;</b>
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
