import React, { useState } from 'react';
import './UserCard.css'; // Make sure to create a CSS file to style your component
import { useDispatch } from 'react-redux';
import { deletes } from '../Redux/Slice';
import EditCard from '../EditCard/EditCard';
import DeleteDialog from '../Delete/DeleteDialog';

const UserCard = ({profile_Value}) => {

const[edit, setEdit]=useState()
const[P_delete,setP_delete]=useState()
const[open, setOpen]=useState()
  console.log(profile_Value)
  const Dispatch =useDispatch()
  

  function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const currentDate = new Date();
  
    let age = currentDate.getFullYear() - dob.getFullYear();
  
    // Adjust age if the birthday hasn't occurred yet this year
    const currentMonth = currentDate.getMonth();
    const birthMonth = dob.getMonth();
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < dob.getDate())) {
        age--;
    }
    return age;
    
}



const age = calculateAge(profile_Value.dob);

   function Deletes(){
    setEdit()
    if(age>=18){
      setP_delete(profile_Value.id)
    }
    else{
      alert('not adult')
    }
   }
   function Edits(){
    setP_delete()
    if(age>=18){
      setEdit(profile_Value.id)
    }
    else{
      alert('not adult')
    }
   }
   
  return (<>
  
      <div className="user-profile-card"  >
      <div className="user-profile-header">
      <p style={{display:'flex', alignItems:"center"}}>  <img src={profile_Value.picture} alt="Profile" className="user-profile-icon" />
      <h4>{profile_Value.first} {} {profile_Value.last}</h4></p>
        <p> {open? <i class="fa-solid fa-chevron-up" onClick={()=>setOpen()}></i>:
        <i class="fa-solid fa-chevron-down" onClick={()=>setOpen(profile_Value.id)}></i>}</p>
      </div>
      { open===profile_Value.id && 
      <>
      <div className="user-profile-info">
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Gender:</strong> {profile_Value.gender}</p>
      <p><strong>Country:</strong> {profile_Value.country}</p>
    </div>
    <div className="user-profile-description">
    <h3 style={{textAlign:'left'}}>Descriptions</h3>
      <p> {profile_Value.description}</p>
    </div>
    <div className="user-profile-actions">
      <i class="fa-solid fa-trash-can" style={{color:'red', fontSize:'15px', margin:'20px'}} onClick={()=>Deletes()}></i>
      <i class="fa-solid fa-pen"  style={{color:'blue', fontSize:'15px', margin:'20px'}} onClick={()=>Edits()} ></i>

    </div></>
      }
      
    </div>

  {  (edit===profile_Value.id) && <EditCard user={profile_Value} setEdit={setEdit}/>}
  {(P_delete===profile_Value.id) && <DeleteDialog id={profile_Value.id} setP_delete={setP_delete} setOpen={setOpen}/>}
    </>

  );
}

export default UserCard;



