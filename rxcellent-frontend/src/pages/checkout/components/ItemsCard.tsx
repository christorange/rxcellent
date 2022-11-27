import { AddCircleRounded, RemoveCircleRounded } from '@mui/icons-material';
import { IconButton, styled, Typography } from '@mui/material';
import type { FC } from 'react';

type Item = {
    key: String;
    title: String;
    description?: String;
    imageSrc?: String;
    price: Number;
    quantity: Number;
};

type ItemsCardProps = {
    items: Array<Item>;
    prescribed?: boolean;
    clickAddHandler?(key: String): void;
    clickRemoveHandler?(key: String): void;
    clickRemoveItemHandler?(key: String): void;
};

const ItemsCard: FC<ItemsCardProps> = (props: ItemsCardProps) => {
    const StyledDiv = styled('div')(() => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: '1rem'
    }));

    const StyledQty = styled(Typography)(() => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '20px'
    }));

    return (
        <StyledDiv>
            {props.items.map((item) => {
                return (
                    <div
                        style={{
                            width: '100%',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            margin: '1rem '
                        }}
                        key={item.key.toString()}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                margin: '1rem 1.5rem'
                            }}
                        >
                            <img src={item.imageSrc?.toString()} />
                            <div
                                style={{
                                    flexDirection: 'column'
                                }}
                            >
                                <p style={{ color: 'red', textAlign: 'center' }}>
                                    {'$ ' +
                                        (item.price.valueOf() * item.quantity.valueOf())
                                            .toFixed(2)
                                            .toString()}
                                </p>
                                <p style={{ textAlign: 'center' }}>
                                    {'X ' + item.quantity.toString()}
                                </p>
                            </div>
                        </div>
                        <p style={{ width: '70%', font: 'Manrope', fontSize: '20px' }}>
                            {item.title}
                        </p>
                        <p>{item.description}</p>
                        {!props.prescribed ? (
                            <>
                                <p
                                    style={{
                                        width: '300px',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        marginLeft: '1.5rem',
                                        alignItems: 'space-between',
                                        gap: '1rem',
                                        borderRadius: '50px',
                                        backgroundColor: '#f0f3f7'
                                    }}
                                >
                                    <IconButton
                                        color="primary"
                                        onClick={() =>
                                            props.clickRemoveHandler
                                                ? props.clickRemoveHandler(item.key)
                                                : undefined
                                        }
                                        disabled={item.quantity.valueOf() === 0}
                                        sx={{ zIndex: '1' }}
                                    >
                                        <RemoveCircleRounded sx={{ fontSize: '40px' }} />
                                    </IconButton>
                                    <StyledQty sx={{ zIndex: '1' }}>
                                        {item.quantity.toString()}
                                    </StyledQty>
                                    <IconButton
                                        color="primary"
                                        onClick={() =>
                                            props.clickAddHandler
                                                ? props.clickAddHandler(item.key)
                                                : undefined
                                        }
                                        sx={{ zIndex: '1' }}
                                    >
                                        <AddCircleRounded sx={{ fontSize: '40px' }} />
                                    </IconButton>
                                </p>
                                <Typography
                                    onClick={() =>
                                        props.clickRemoveItemHandler
                                            ? props.clickRemoveItemHandler(item.key)
                                            : undefined
                                    }
                                    component="span"
                                    sx={{
                                        'color': 'red',
                                        'font': 'Manrope',
                                        'fontSize': '20px',
                                        'fontStyle': 'underlined',
                                        'margin': '2rem 2rem',
                                        '&:hover': {
                                            cursor: 'pointer'
                                        }
                                    }}
                                >
                                    Remove Item
                                </Typography>
                            </>
                        ) : (
                            <></>
                        )}
                        <hr
                            style={{
                                marginTop: 0,
                                width: '95%',
                                height: '1px',
                                border: 'none',
                                background: '#D1D5DB'
                            }}
                        />
                    </div>
                );
            })}
        </StyledDiv>
    );
};

export default ItemsCard;
