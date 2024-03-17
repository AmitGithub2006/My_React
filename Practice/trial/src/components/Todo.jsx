// import React, { useState } from "react";

// function TodoApp() {
//   const [tasks, setTasks] = useState([]);
//   const [currentTask, setCurrentTask] = useState("");
//   const [taskId, setTaskId] = useState(1);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (currentTask === "") {
//       return;
//     }
//     const newTask = {
//       id: taskId,
//       task: currentTask,
//     };
//     setTasks([...tasks, newTask]);
//     setCurrentTask("");
//     setTaskId(taskId + 1);
//   };

//   const handleEdit = (id, updatedTask) => {
//     const updatedTasks = tasks.map((task) => {
//       if (task.id === id) {
//         return { ...task, task: updatedTask };
//       } else {
//         return task;
//       }
//     });
//     setTasks(updatedTasks);
//   };

//   const handleDelete = (id) => {
//     const filteredTasks = tasks.filter((task) => task.id !== id);
//     setTasks(filteredTasks);
//   };

//   return (
//     <div>
//       <h1>TODO App</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={currentTask}
//           onChange={(event) => setCurrentTask(event.target.value)}
//         />
//         <button type="submit">Add Task</button>
//       </form>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             {task.task}
//             <button
//               onClick={() => {
//                 const updatedTask = prompt("Enter new task:", task.task);
//                 if (updatedTask !== null) {
//                   handleEdit(task.id, updatedTask);
//                 }
//               }}
//             >
//               Edit
//             </button>
//             <button onClick={() => handleDelete(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoApp;


import React, { useState } from "react";
function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const handleInputChange = (event) => {
    setCurrentTask(event.target.value);
  };
  const handleAddTask = () => {
    if (currentTask !== "") {
      if (editIndex !== null) {
        // update existing task
        const newTasks = [...tasks];
        newTasks[editIndex] = currentTask;
        setTasks(newTasks);
        setEditIndex(null);
      } else {
        // add new task
        setTasks([...tasks, currentTask]);
      }
      setCurrentTask("");
    }
  };
  const handleEditTask = (index) => {
    setEditIndex(index);
    setCurrentTask(tasks[index]);
  };
  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={currentTask}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>
        {editIndex !== null ? "Update Task" : "Add Task"}
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={currentTask}
                onChange={handleInputChange}
              />
            ) : (
              <span>{task}</span>
            )}
            <button onClick={() => handleEditTask(index)}>
              {editIndex === index ? "Cancel" : "Edit"}
            </button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
