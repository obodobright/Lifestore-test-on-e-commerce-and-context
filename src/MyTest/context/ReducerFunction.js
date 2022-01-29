export const ReducerFUnction = (state, action) => {
    switch (action.type) {
        case "FETCH_PRODUCT":
            return {...state, product: action.payload };
        case "INCREMENT_PRODUCT":
            return {...state, quantity: action.payload + 1 };
        case "DECREMENT_PRODUCT":
            return {...state, quantity: action.payload - 1 };
        default:
            return { state };
    }
};