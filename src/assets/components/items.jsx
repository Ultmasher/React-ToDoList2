import checkedImage from "../images/checked2.png";
import uncheckedImage from "../images/unchecked.png";


const Items = ({tasks, setInputValue, setEditId, setIsEditing,setTasks}) => {

    const handleDelete = (id) => {
        let deleteTask = tasks.filter((task) => task.id !== id);
        setTasks(deleteTask);
      };
    
      const handleEdit = (id, name) => {
        setInputValue(name);
        setEditId(id);
        setIsEditing(true);
      };
    
      const handleCheck = (id) => {
        setTasks(
          tasks.map((task) => (task.id === id ? { ...task, done: true } : task))
        );
      };
    
      const handleUncheck = (id) => {
        setTasks(
          tasks.map((task) => (task.id === id ? { ...task, done: false } : task))
        );
      };


    return ( 
        <div className="taskList">
        {tasks.map((task) => (
          <div className="taskItem" key={task.id}>
            {task.done ? (
              <img
                className="check"
                src={checkedImage}
                onClick={() => handleUncheck(task.id)}
              />
            ) : (
              <img
                className="check"
                src={uncheckedImage}
                onClick={() => handleCheck(task.id)}
              />
            )}
            <span>{task.done ? <del> {task.name} </del> : task.name}</span>
            <div className="item-btns">
              {task.done ? (
                ""
              ) : (
                <button onClick={() => handleEdit(task.id, task.name)}>
                  edit
                </button>
              )}

              <button onClick={() => handleDelete(task.id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
     );
}
 
export default Items;