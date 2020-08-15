import { getPayment } from '../../../Utils/Api';

const fetchPayment = (tokenApi) => dispatch => {
    getPayment(tokenApi).then(res => {
        if (res) dispatch(setPayment(res));
    })
}

const setPayment = (data) => {
    return {
        type: 'SET_PAYMENT',
        payload: data
    }
}

export {
    fetchPayment
}