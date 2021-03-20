import api from './api';

export const getAll = () => {
    return fetch(api.posts)
        .then((res) =>  res.json())
        .catch((err) => 'Handled error' + err)
};