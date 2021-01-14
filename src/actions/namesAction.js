import axios from 'axios';

export const FETCH_NAMES = 'FETCH_NAMES';

export const getAllNames = () => {
    return async (dispatch) => {
        try {
            const response = await axios('https://jsonplaceholder.typicode.com/users');
            dispatch({
                type: FETCH_NAMES,
                names: response.data
            });
        } catch (err) {
            console.log(err);
        }
    }
}