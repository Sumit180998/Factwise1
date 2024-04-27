import logo from './logo.svg';
import './App.css';

import { useSelector } from 'react-redux';
import UserCard from './Card/UserCard';
import { useEffect, useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
   const d=useSelector(state=>state.value)

   const filterCelebrities = (term) => {
    const results = d.filter((celebrity) =>
        `${celebrity.first} ${celebrity.last}`.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
};
   useEffect(()=>{
    setSearchResults(d)
   },[d])
   useEffect(() => {
    filterCelebrities(searchTerm);
}, [searchTerm]);

  return (
    <div style={{display:'flex', justifyContent:"center"}}>
    <div className="App">
      <p style={{display:"flex", textAlign:'left', fontSize:"20px",fontFamily:'solid'}}>List View</p>
         <input style={{width:'75%', borderRadius:'10px', padding:'5px'}}
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
            />
      <div style={{display:"flex",flexDirection:'column'}}>
          {searchResults?.map((s)=>(
            
            <UserCard profile_Value={s}/>
          ))

          } 
          </div>
    </div>
    </div>
  );
}

export default App;
