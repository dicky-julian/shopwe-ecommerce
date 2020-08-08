const initialState = {
    product: []
}

const product = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                product: action.payload
            }
        default:
            return state
    }
}

export default product;