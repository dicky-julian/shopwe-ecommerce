import { getPayment } from '../../../Utils/Api';

const fetchPayment = () => dispatch => {
    getPayment().then(res => {
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