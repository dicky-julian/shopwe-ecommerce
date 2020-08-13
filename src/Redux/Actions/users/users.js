import { getPayment } from '../../../Utils/Api';

const setUpdateUser = (data) => dispatch => {
    dispatch(setUser(data));
}

const setUser = (data) => {
    return {
        type: 'UPDATE_USER',
        payload: data
    }
}

export {
    setUpdateUser
}