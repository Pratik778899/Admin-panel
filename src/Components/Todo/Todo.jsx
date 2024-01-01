import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [popUp, setpopUp] = useState(false);
  const [tasks, settasks] = useState([]);
  const [week, setweek] = useState("");
  const [task, settask] = useState("");
  const todoDatabase = JSON.parse(localStorage.getItem("TodoDatabase"));

  // console.log(tasks);

  const handelTextChange = e => {
    settask(e.target.value);
  };

  const handelWeekChange = e => {
    setweek(e.target.value);
  };

  const handelAddTask = () => {
    setpopUp(!popUp);
  };

  const handleCancel = () => {
    setpopUp(false);
    setweek("");
    settask("");
  };

  const handleRemoveTodo = indexToRemove => {
    const updatedTasks = todoDatabase.filter((task, index) => index !== indexToRemove);
    localStorage.setItem("TodoDatabase", JSON.stringify(updatedTasks));
    settasks(updatedTasks);
  };
  

  const handleSave = () => {
    if (task.trim() !== "" && week.trim() !== "") {
      settasks([...tasks, { week, task }]);
      setpopUp(false);
      setweek("");
      settask("");
      localStorage.setItem(
        "TodoDatabase",
        JSON.stringify([...tasks, { week, task }])
      );
    } else {
      alert("Enter The Task");
    }
  };

  return (
    <>
      {popUp && (
        <div id="popup">
          <h3 className="text-grade">Add New Task</h3>
          <select
            name="todo"
            id="dropdown"
            value={week}
            onChange={handelWeekChange}
          >
            <option className="dropdownOption" value="''">
              ''
            </option>
            <option className="dropdownOption" value="Week 1">
              week 1
            </option>
            <option className="dropdownOption" value="Week 2">
              week 2
            </option>
            <option className="dropdownOption" value="Week 3">
              week 3
            </option>
            <option className="dropdownOption" value="Week 4">
              week 4
            </option>
          </select>
          <div id="todo-input">
            <input
              type="text"
              placeholder="Enter Yor Task Here"
              onChange={handelTextChange}
            />
          </div>
          <div id="cancelSave">
            <button className="button" onClick={handleCancel}>
              Cancel
            </button>
            <button className="button" onClick={handleSave}>
              save
            </button>
          </div>
        </div>
      )}
      <div id="todo-main">
        <div id="todoContent">
          <h3 className="text-grade">Todo For 1 Week</h3>
          <button className="text-grade" onClick={handelAddTask}>
            + Add New Task
          </button>
        </div>
        <ul>
          {todoDatabase && todoDatabase.length > 0
            ? todoDatabase.map((task, index) => (
                <div key={task.task + index}>
                  <li className="flex item-center justify-content">
                    {task.week} , Task: {task.task}
                    <button
                      className="button"
                      onClick={() => handleRemoveTodo(index)}
                    >
                      Remove
                    </button>
                  </li>
                </div>
              ))
            : tasks.map((task, index) => (
                <div key={task.task + index}>
                  <li className="flex item-center justify-content">
                    {task.week} , Task: {task.task}
                    <button
                      className="button"
                      onClick={() => handleRemoveTodo(index)}
                    >
                      Remove
                    </button>
                  </li>
                </div>
              ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
