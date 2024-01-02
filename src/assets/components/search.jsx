const Search = ({tasks,setTasks,setInputValue,inputValue,setIsEditing,isEditing,editId}) => {
    const newTask = (e) => {
      e.preventDefault();
      if (!inputValue) {
        alert("Please write a task.");
      } else {
        let task = {
          name: inputValue,
          id: Math.floor(Math.random() * 10000),
          done: false,
        };
        let newTasks = [...tasks, task];
        setTasks(newTasks);
      }
      setInputValue("");
      
    };
  
    const handleEditSubmit = () => {
      setTasks(
        tasks.map((task) =>
          task.id === editId ? { ...task, name: inputValue } : task
        )
      );
      setIsEditing(false);
      setInputValue("");
    };
  
    return (
      <form className="to-do-form">
        <input
          id="task-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
  
        {isEditing && (
          <button className="btn-edit" onClick={handleEditSubmit} id="input-btn">
            Save Task
          </button>
        )}
        {!isEditing && (
          <button onClick={newTask} id="input-btn">
            Add Task
          </button>
        )}
      </form>
    );
  };
  
  export default Search;
  