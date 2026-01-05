
import axios from 'axios';
const API="http://localhost:8080";
const api = axios.create({ baseURL: API });
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));
// student , admin
export const  getCurrentUserProfile= async()=>{
    let res=await api.get('/student/profile');
    return res;
}

export const updateUserProfile= async(user)=>{
    let res=await api.put('/student/update',user);
    return res;
}

export const deleteUserAccount= async()=>{
    let res=await api.delete('/student/delete');
    return res;
}


export const getAllStudents= async()=>{
    let res=await api.get('/admin/fetchAllStudents');
    return res;
}