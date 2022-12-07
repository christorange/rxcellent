import { DeleteForever } from '@mui/icons-material';
import { IconButton, styled, Typography } from '@mui/material';
import type { FC } from 'react';
import React from 'react';

type CardContainerProps = {
    title: String;
    addDeleteButton?: Boolean;
    clickDeleteHandler?(title: String): void;
    children: React.ReactNode; // 👈️ type children
};

const CardContainer: FC<CardContainerProps> = (props: CardContainerProps) => {
    const StyledDiv = styled('div')(() => ({
        'background': '#ffffff',
        'borderRadius': '20px',
        'boxShadow': '0px 0px 20px rgba(0, 0, 0, 0.25)',
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'flex-start',
        'justifyContent': 'center',
        '& p, button': {
            font: 'Manrope',
            fontSize: '24px',
            fontWeight: 500,
            margin: '1rem 1.5rem'
        }
    }));
    return (
        <StyledDiv>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    style={{
                        fontSize: '32px',
                        fontWeight: 550
                    }}
                >
                    {props.title}
                </Typography>
                {props.addDeleteButton ? (
                    <IconButton
                        onClick={() =>
                            props.clickDeleteHandler
                                ? props.clickDeleteHandler(props.title)
                                : undefined
                        }
                    >
                        <DeleteForever fontSize="large" color="warning" />
                    </IconButton>
                ) : (
                    <></>
                )}
            </div>
            <hr
                style={{
                    marginTop: 0,
                    width: '95%',
                    height: '1px',
                    border: 'none',
                    background: '#D1D5DB'
                }}
            />

            {props.children}
        </StyledDiv>
    );
};

export default CardContainer;
