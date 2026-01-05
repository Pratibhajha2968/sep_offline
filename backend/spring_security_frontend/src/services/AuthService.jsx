import axios from "axios";
const API="http://localhost:8080/auth";

 export const registerUser=async(user)=>{
    let res=await  axios.post(`${API}/register`,user);
    return res;
}
 export const loginUser=async(credentials)=>{
    let res=await  axios.post(`${API}/login`,credentials);
    let userData=res.data.data;
    localStorage.setItem('token',userData.token);
    localStorage.setItem('role',userData.role);
    localStorage.setItem('email',userData.email);
    localStorage.setItem('name',userData.name);
    axios.defaults.headers.common['Authorization']=`Bearer ${userData.token}`;
    return res;
}
