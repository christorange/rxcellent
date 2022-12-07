import { Box, styled, Typography } from '@mui/material';
import type { FC } from 'react';

interface IRowProps {
    left: string;
    right: string;
    size?: number;
    weight?: number;
}

const defaultAttr = {
    size: 20,
    weight: 300
};

const SummaryRow: FC<IRowProps> = (props: IRowProps) => {
    const SummaryItem = styled(Typography)(() => ({
        font: 'Manrope',
        fontSize: props.size || defaultAttr.size,
        fontWeight: props.weight || defaultAttr.weight,
        color: '#111111'
    }));

    const RedSummaryItem = styled(SummaryItem)(() => ({
        color: '#FF5A5A'
    }));

    return (
        <Box
            sx={{
                'width': '100%',
                'display': 'flex',
                'alignItems': 'center',
                'justifyContent': 'flex-start',
                '> *': {
                    width: '100%',
                    marginBottom: '0.5rem'
                }
            }}
        >
            <SummaryItem>{props.left}</SummaryItem>
            <RedSummaryItem>{props.right}</RedSummaryItem>
        </Box>
    );
};

export default SummaryRow;
