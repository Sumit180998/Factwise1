import React from 'react';
import './DeleteDialog.css'; 
import { useDispatch } from 'react-redux';
import { deletes } from '../Redux/Slice';

function DeleteDialog({id,setP_delete,setOpen}) {

  const Dispatch =useDispatch()
  function delitem(){
    Dispatch(deletes(id))
    setOpen()
  }

  return (
    <div className="delete-dialog-backdrop">
      <div className="delete-dialog">
        <div className="delete-dialog-header">
          <button className="delete-dialog-close" onClick={()=>setP_delete()}>×</button>
        </div>
        <div className="delete-dialog-content">
          <p>Are you sure you want to delete?</p>
        </div>
        <div className="delete-dialog-actions">
          <button className="delete-dialog-cancel" onClick={()=>setP_delete()}>Cancel</button>
          <button className="delete-dialog-confirm" onClick={()=>delitem()}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteDialog;
