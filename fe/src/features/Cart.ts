import { createSlice } from '@reduxjs/toolkit';
import { Cart, Item } from '../types/types';

const initialStateValue = {
    prescribedItems: [],
    nonPrescribedItems: [],
    listItemQuantities: []
} as Cart;

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: initialStateValue
    },
    reducers: {
        itemAdd: (state, action) => {
            let itemIsInTheCart = false;
            const shoppingCart = state.value;
            const updatedNpCart: Item[] = shoppingCart.nonPrescribedItems.map((item) => {
                if (item.key === action.payload.key) {
                    itemIsInTheCart = true;
                    return { ...item, quantity: item.quantity.valueOf() + 1 };
                } else {
                    return item;
                }
            });

            if (itemIsInTheCart) {
                state.value = { ...shoppingCart, nonPrescribedItems: updatedNpCart };
            } else {
                state.value = {
                    ...shoppingCart,
                    nonPrescribedItems: [...shoppingCart.nonPrescribedItems, action.payload]
                };
            }
        },

        itemRemove: (state, action) => {
            const shoppingCart = state.value;
            const updatedNpCart: Item[] = shoppingCart.nonPrescribedItems.map((item) => {
                if (item.key === action.payload.key) {
                    return {
                        ...item,
                        quantity:
                            item.quantity.valueOf() === 0
                                ? item.quantity
                                : item.quantity.valueOf() - 1
                    };
                } else {
                    return item;
                }
            });

            state.value = {
                ...shoppingCart,
                nonPrescribedItems: updatedNpCart.filter((item) => item.quantity.valueOf() !== 0)
            };
        },

        itemAddByKey: (state, action) => {
            const shoppingCart = state.value;
            const updatedNonPrescriptionCart: Item[] = shoppingCart.nonPrescribedItems.map(
                (item) => {
                    if (item.key === action.payload) {
                        return { ...item, quantity: item.quantity.valueOf() + 1 };
                    } else {
                        return item;
                    }
                }
            );
            if (updatedNonPrescriptionCart) {
                state.value = {
                    nonPrescribedItems: [...updatedNonPrescriptionCart],
                    prescribedItems: shoppingCart.prescribedItems
                };
            }
        },

        itemRemoveByKey: (state, action) => {
            const shoppingCart = state.value;
            const updatedNpCart: Item[] = shoppingCart.nonPrescribedItems.map((item) => {
                if (item.key === action.payload) {
                    return {
                        ...item,
                        quantity:
                            item.quantity.valueOf() === 0
                                ? item.quantity
                                : item.quantity.valueOf() - 1
                    };
                } else {
                    return item;
                }
            });
            if (updatedNpCart) {
                state.value = {
                    nonPrescribedItems: updatedNpCart.filter(
                        (item) => item.quantity.valueOf() !== 0
                    ),
                    prescribedItems: shoppingCart.prescribedItems
                };
            }
        },

        itemExtractByKey: (state, action) => {
            const shoppingCart = state.value;
            state.value = {
                nonPrescribedItems: shoppingCart.nonPrescribedItems.filter((item) => {
                    return item.key !== action.payload;
                }),
                prescribedItems: shoppingCart.prescribedItems
            };
        },

        emptyCartByTitle: (state, action) => {
            const shoppingCart = state.value;
            if (action.payload.includes('Non-Prescription')) {
                state.value = {
                    nonPrescribedItems: [],
                    prescribedItems: shoppingCart.prescribedItems
                };
            } else if (action.payload.includes('Prescription')) {
                state.value = {
                    nonPrescribedItems: shoppingCart.nonPrescribedItems,
                    prescribedItems: []
                };
            }
        }
    }
});

export const {
    itemAdd,
    itemAddByKey,
    itemRemove,
    itemRemoveByKey,
    itemExtractByKey,
    emptyCartByTitle
} = cartSlice.actions;

export default cartSlice.reducer;
