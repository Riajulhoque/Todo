import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineFileDone } from "react-icons/ai";

const Home = () => {
  // state for input field
  const [task, setTask] = useState("");

  // state for todo list
  const [tasks, setTasks] = useState([]);

  // state for done list
  const [doneTasks, setDoneTasks] = useState([]);

  // add task
  const handleAddTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask("");
  };

  // delete task
  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // mark as done
  const handleDone = (taskItem) => {
    setTasks(tasks.filter((t) => t.id !== taskItem.id));
    setDoneTasks([...doneTasks, taskItem]);
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold m-[50px]">
        Welcome to your Todo list
      </h1>

      {/* Add task */}
      <div className="add_list w-[60%] mx-auto flex">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full mx-4"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary mx-4" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <div className="flex gap-4 mt-6">
        {/* Todo Section */}
        <div className="input_section w-[60%] mx-auto p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Your All Tasks</h2>

          {tasks.length === 0 && <p>No tasks yet</p>}

          {tasks.map((item) => (
            <li
              key={item.id}
              className="list-row flex justify-between items-center p-4 border-b"
            >
              <div>{item.text}</div>
              <div>
                <button
                  className="btn btn-square btn-ghost"
                  onClick={() => handleDelete(item.id)}
                >
                  <RxCross1 />
                </button>

                <button
                  className="btn btn-square btn-ghost"
                  onClick={() => handleDone(item)}
                >
                  <AiOutlineFileDone />
                </button>
              </div>
            </li>
          ))}
        </div>

        {/* Done Section */}
        <div className="done w-[35%] mx-auto p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Done</h2>

          {doneTasks.length === 0 && <p>No completed tasks</p>}

          {doneTasks.map((item) => (
            <li
              key={item.id}
              className="p-3 border-b line-through text-gray-500"
            >
              {item.text}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;