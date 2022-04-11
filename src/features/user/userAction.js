import {getUserPending, getUserSuccess, getUserFail} from './userSlice';
import { fetchUser } from '../../api/userApi';

export const getUserProfile = () => async (dispatch) => {
    try {
        dispatch(getUserPending());
        //Call the API
        const result = await fetchUser();
        console.log(result);
        
        if(result && result.id)
            return dispatch(getUserSuccess(result));

        dispatch(getUserFail("User is not found"));
    } catch (error) {
        dispatch(getUserFail(error));
    }
}