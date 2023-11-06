import React from 'react';

function CompletedList(props) {

  return (
    <li className="list-item">
      <span className='check-box'>
        <i
          className="fa-regular fa-square-check"
          onClick={() => {
            props.moveTaskToTodo(props.index);
          }}
        ></i>
      </span>
        <div>
            <strike>{props.item}</strike>
          <span className='icons'>
            <i className="fa-solid fa-trash-can icon-delete" onClick={() => props.deleteItem(props.index)}></i>
          </span>
        </div>
    </li>
  );
}

export default CompletedList;
