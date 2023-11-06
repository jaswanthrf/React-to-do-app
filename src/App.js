import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';
import CompletedList from './components/CompletedList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [editIndex, setEditIndex] = useState();
  const [editInitialText, setEditInitialText] = useState('');
  const [completedList, setCompletedList] = useState([]);

  const addList = (inputText) => {
    if (inputText !== "")
      setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    const itemToDelete = listTodo[key];
    const confirmed = window.confirm(`Are you sure you want to delete "${itemToDelete}"?`);
    
    if (confirmed) {
      let newListTodo = [...listTodo];
      newListTodo.splice(key, 1);
      setListTodo(newListTodo);
    }
  };

  const editListItem = (index, newText) => {
    let updatedList = [...listTodo];
    updatedList[index] = newText;
    setListTodo(updatedList);
  };

  const moveTaskToCompleted = (index) => {
    const task = listTodo[index];
    setListTodo(listTodo.filter((_, i) => i !== index));
    setCompletedList([...completedList, task]);
  };

  const moveTaskToTodo = (index) => {
    const task = completedList[index];
    setCompletedList(completedList.filter((_, i) => i !== index));
    setListTodo([...listTodo, task]);
  };

  const deleteCompletedItem = (key) => {
    const itemToDelete = completedList[key];
    const confirmed = window.confirm(`Are you sure you want to delete "${itemToDelete}" from the completed list?`);
  
    if (confirmed) {
      let newCompletedList = [...completedList];
      newCompletedList.splice(key, 1);
      setCompletedList(newCompletedList);
    }
  };
  

  return (
    <div className="main-container">
      <div className="center-container">
        <div className="column">
          
          <TodoInput addList={addList} />
          <br />
          <h1 className="app-heading">TODO LIST</h1>
          <hr />
          {listTodo.map((listItem, i) => (
            <Todolist
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
              editItem={editListItem}
              isEditing={i === editIndex}
              initialText={i === editIndex ? editInitialText : ''}
              setEditIndex={setEditIndex}
              setEditInitialText={setEditInitialText}
              moveTaskToCompleted={moveTaskToCompleted}
            />
            ))}
        </div>
        <br />
        <div className="column">
          <h1 className="app-heading">Completed</h1>
          <hr />
          <ul>
            {completedList.map((listItem, i) => (
              <CompletedList
                key={i}
                index={i}
                item={listItem}
                deleteItem={deleteCompletedItem}
                moveTaskToTodo={moveTaskToTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
