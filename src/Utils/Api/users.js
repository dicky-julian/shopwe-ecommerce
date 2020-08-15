import fetch from '../fetch';
import { apiUri, tokenApi } from '../config.js';

const updateUser = async (data, id) => {
    const options = {
        'method': 'patch',
        'url': `${apiUri.users}/${id}`,
        'headers': {
            "Authorization": tokenApi
        },
        'data': data
    };

    const res = await fetch(options)
        .then(res => {
            console.log(res);
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
    updateUser
}