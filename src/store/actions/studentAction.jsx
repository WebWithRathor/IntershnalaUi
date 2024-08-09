import { Instance } from "../../utils/Axios";
import { setStudent } from "../reducers/studentSlice";

export const loadStudent = (navigate)=> async (dispatch , getstate)=>{
    try {
        const { data } = await Instance.post('/student');
        dispatch(setStudent(data));
        localStorage.setItem('isLoggedIn', true);
    } catch (error) {
        localStorage.setItem('isLoggedIn', false);
        if(error.response.data.error.message === 'jwt expired'){
            alert('please login first');
        }else{
            console.log(`%c${error.response.data.error.message}`,
            'background-color: red; color: white; padding: 4px;'
            );
        }
        navigate('/');
    }
}
