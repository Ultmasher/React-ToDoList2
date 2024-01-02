import { useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import Search from "./assets/components/search";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <h2>To-Do-List</h2>
      <Search tasks={tasks} setInputValue={setInputValue}inputValue={inputValue} setTasks={setTasks} setIsEditing={setIsEditing}isEditing={isEditing} editId={editId} setEditId={setEditId}/>
      <ItemList tasks={tasks} setInputValue={setInputValue} setEditId={setEditId} setIsEditing={setIsEditing} setTasks={setTasks}/>
    </>
  );
}

export default App;