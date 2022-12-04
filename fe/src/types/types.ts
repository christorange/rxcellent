export type Cart = {
    prescribedItems: Item[] | [];
    nonPrescribedItems: Item[] | [];
    // listItemQuantities: ItemQty[] | [];
};

export type Item = {
    key: String;
    title: String;
    description?: String;
    imageSrc?: String;
    price: Number;
    quantity: Number;
};

export type ItemQty = {
    key: String;
    quantity: Number;
};
