import React, { useState } from 'react';

function Todolist(props) {
  const [isEditing, setEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(props.item);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    props.editItem(props.index, editedItem);
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setEditedItem(props.item);
  };


  return (
    <li className="list-item">
      <span className='check-box'>
        <i
          className={`fa-regular fa-square`}
          onClick={() => {
            props.moveTaskToCompleted(props.index);
          }}
        ></i>
      </span>
        
      {isEditing ? (
        <div>
          <input
            type="text"
            className="edit-input-box"
            value={editedItem}
            onChange={(e) => setEditedItem(e.target.value)}
          />
          <span className='icons'>
            <i className="fa-solid fa-circle-check icon-save" onClick={handleSaveClick}></i>
            <i className="fa-solid fa-circle-xmark icon-delete" onClick={handleCancelClick}></i>
          </span>
        </div>
      ) : (
        <div>
          {props.item}
          <span className='icons'>
            <i className="fas fa-pencil icon-edit" onClick={handleEditClick}></i>
            <i className="fa-solid fa-trash-can icon-delete" onClick={() => props.deleteItem(props.index)}></i>
          </span>
        </div>
      )}
    </li>
  );
}

export default Todolist;
