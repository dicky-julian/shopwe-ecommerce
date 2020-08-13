const initialState = {
    payment: ''
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PAYMENT':
            return {
                ...state,
                payment: action.payload
            }
        default:
            return state
    }
}

export default products;