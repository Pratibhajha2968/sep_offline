import React, { useEffect } from 'react'
import { getAllStudents, getCurrentUserProfile } from '../services/apiService'

const StudentDashboard = () => {
  let [user, setUser] = React.useState({});
  
   useEffect(() => {
    getCurrentUserProfile()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => { 
        console.log(err);
      });

    }, []);
    let handleLogout=()=>{
      localStorage.clear();
      window.location.href='/login';
    }
    
  return (
    <>
      <div >

        <div>Profile Name : {user.name}</div>
        <div>Profile Email : {user.email}</div>
        <div>Profile Phone : {user.phone}</div>
        <div>Profile Role : {user.role}</div>
        <button onClick={handleLogout}>LogOut</button>
      </div>

    </>
  )
}
export default StudentDashboard