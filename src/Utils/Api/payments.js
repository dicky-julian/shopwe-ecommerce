import fetch from '../fetch';
import { apiUri } from '../config.js';
// import { apiUri, tokenApi } from '../config.js';

const getPayment = async (tokenApi) => {
    const options = {
        'method': 'get',
        'url': apiUri.payments,
        'headers': {
            "Authorization": tokenApi
        }
    };

    const res = await fetch(options)
        .then(res => {
            return {
                data: res.data.data
            }
        })
        .catch((err) => {
            console.log(err);
            console.log(err.response);
            return false
        });
    return res;
}

export {
    getPayment
}