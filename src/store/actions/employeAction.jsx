import { Instance } from "../../utils/Axios";
import { setEmploye } from "../reducers/employeSlice";

export const loadEmploye = (navigate)=> async (dispatch , getstate)=>{
    
    try {
        const { data } = await Instance.post('/employe/current');
        dispatch(setEmploye(data));
        localStorage.setItem('isLoggedIn', true);
    } catch (error) {
        localStorage.setItem('isLoggedIn', false);
        if(error.response.data.error.message === 'jwt expired'){
            alert('please login first');
        }else{
            console.log(`%c${error.response.data.error.message}`,
            'background-color: blue; color: white; padding: 20px;'
            );
        }
        navigate('/');
    }
}
