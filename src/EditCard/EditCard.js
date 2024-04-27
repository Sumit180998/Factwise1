import React, { useEffect, useState } from 'react'
import './EditCard.css'
import { useDispatch } from 'react-redux'
import { deletes, edit } from '../Redux/Slice'

const countery= ['New Zealand', 'Norway', 'Ireland', 'Iran', 'Spain', 'Canada', 'Germany', 'United Kingdom', 'Turkey', 'Netherlands', 'France']

export default function EditCard({user,setEdit}) {
    const[gender,setgender]= useState(user.gender)
    const[counterys,setcounterys]=useState(user.country)
    const[date,setdate] = useState(user.dob)
    const[description,setdescription]=useState(user.description)
    const[id,setId]=useState(user.id)
    const[ages,setages]=useState('')
    const[open, setOpen]=useState(user.id)

    const Dispatch =useDispatch()

    function calculateAge(dateOfBirth) {
       console.log(dateOfBirth)
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
    function Update(){
      Dispatch( edit({date,gender,counterys,id,description}))
      setEdit('')
    }
    
    useEffect(()=>{
        
      const age = calculateAge(date) 
    
     
      setages(age)
    },[date])

  return (
    <div className="user-profile-card"  >
    <div className="user-profile-header">
    <p style={{display:'flex',alignItems:"center"}}>  <img src={user.picture} alt="Profile" className="user-profile-icon" />
      <h4>{user.first} {} {user.last}</h4></p>
       <p> {open? <i class="fa-solid fa-chevron-up" onClick={()=>setOpen()}></i>:
        <i class="fa-solid fa-chevron-down" onClick={()=>setOpen(user.id)}></i>}</p>
    </div>
    { open===user.id && 
      <>
    <div className="user-profile-info">
      <p ><strong>Age:</strong> <input type='date' value={date} onChange={(e)=>setdate(e.target.value)}/>
           {ages}years     </p>

      <p><strong> Gender:</strong> <select value={gender} onChange={(e)=>setgender(e.target.value)}>
      <option ></option>
          <option value='male'>male</option>
           <option value='female'>female</option>
           <option value='transgender'>transgender</option>
          

        </select>
        </p>
      <p><strong>Country:</strong> <select value={counterys} onChange={(e)=>setcounterys(e.target.value)}>
      <option ></option>
          {countery.map((s)=>(
             <option value={s}  key={s} >{s}</option>
          ))}
          

        </select></p>
      
    </div>
    <div className="user-profile-description">
      <h3 style={{textAlign:'left'}}>Descriptions</h3>
   <textarea type='text' value={description}  onChange={(e)=>setdescription(e.target.value)}/>
    </div>
    <div className="user-profile-actions">
    <i class="fa-regular fa-circle-xmark" style={{color:'red', fontSize:'20px', margin:'15px'}} onClick={()=>setEdit()}></i>
    <i class="fa-regular fa-circle-check"  style={{color:'green', fontSize:'20px', margin:'15px'}}onClick={()=>Update()}></i>
 
    </div>
    </>
      }
  </div>
  )
}
