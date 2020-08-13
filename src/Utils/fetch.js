import axios from 'axios';

export default ((options) => {
    return new Promise((resolve, reject) => {
        axios(options)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    })
})