export const ReducerFUnction = (state, action) => {
    switch (action.type) {
        case "FETCH_PRODUCT":
            return {...state, product: action.payload };
        case "INCREMENT_PRODUCT":
            return {...state };
        case "DECREMENT_PRODUCT":
            return {...state };
        default:
            return { state };
    }
};