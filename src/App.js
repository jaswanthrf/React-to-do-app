import React, { useState } from 'react';
import "./App.css";
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [editIndex, setEditIndex] = useState();
  const [editInitialText, setEditInitialText] = useState("");

  const addList = (inputText) => {
    if (inputText !== "")
      setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo(newListTodo);
  };

  const editListItem = (index, newText) => {
    setEditIndex(-1);
    setEditInitialText("");
    let updatedList = [...listTodo];
    updatedList[index] = newText;
    setListTodo(updatedList);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
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
            initialText={i === editIndex ? editInitialText : ""}
            setEditIndex={setEditIndex}
            setEditInitialText={setEditInitialText}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
