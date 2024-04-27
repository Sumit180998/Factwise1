import { createSlice } from "@reduxjs/toolkit";
import { celebrities } from "../Data";

const value=celebrities

export const Slice=createSlice({
    name:'task',
    initialState:{
        value:value
    },
    reducers:{
        deletes:(state,action)=>{
          

            const updatedValues = state.value.filter(item => item.id !== action.payload);
            console.log(updatedValues)
             state.value=updatedValues

        },
        edit:(state,action)=>{
            const updatedValues=state.value.filter((item)=>{
                if(item.id===action.payload.id){
                   item.gender=action.payload.gender;
                   item.dob=action.payload.date;
                   item.country=action.payload.counterys;
                   item.description=action.payload.description
                   
                }

                return item
            })
            state.value=updatedValues
            console.log(action.payload.date)
        }
        
    }

})
export const {deletes, edit}=Slice.actions
export default Slice.reducer