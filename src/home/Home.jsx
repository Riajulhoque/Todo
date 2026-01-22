import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { AiOutlineFileDone } from "react-icons/ai";

const Home = () => {

  const[task,setTasks]= React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const [doneTask, setDoneTask] = React.useState([]);
  const handleAdddTask = () => {
    if(task.trim() === "") return;
    setTasks([...tasks,{id:DataTransfer.now(), tassk}]);
    setTask("");
  };
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== taskItem.id));
    setDoneTask([...doneTask, taskItem]);
  };

  return (
    <div>
      <h1 className='text-center text-4xl font-bold m-[50px]'>Welcome to your  Todo list</h1>
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

      <div className='flex gap-4'>

        <div className="input_section w-[60%] mx-auto my-4 p-4 border border-gray-300 rounded-lg  items-center">

        
        <li className="list-row flex justify-between items-center p-4 border-b border-gray-200">
            <div>Dio Lupa</div>
            <div>
          <button className="btn btn-square btn-ghost">
            <RxCross1 />
          </button>
          <button className="btn btn-square btn-ghost">
            <AiOutlineFileDone />
          </button>
            </div>
        </li>
        <li className="list-row flex justify-between items-center p-4 border-b border-gray-200">
            <div>Dio Lupa</div>
            <div>
          <button className="btn btn-square btn-ghost">
            <RxCross1 />
          </button>
          <button className="btn btn-square btn-ghost">
            <AiOutlineFileDone />
          </button>
            </div>
        </li>
        <li className="list-row flex justify-between items-center p-4 border-b border-gray-200">
            <div>Dio Lupa</div>
            <div>
          <button className="btn btn-square btn-ghost">
            <RxCross1 />
          </button>
          <button className="btn btn-square btn-ghost">
            <AiOutlineFileDone />
          </button>
            </div>
        </li>
        <li className="list-row flex justify-between items-center p-4 border-b border-gray-200">
            <div>Dio Lupa</div>
            <div>
          <button className="btn btn-square btn-ghost">
            <RxCross1 />
          </button>
          <button className="btn btn-square btn-ghost">
            <AiOutlineFileDone />
          </button>
            </div>
        </li>
        
        </div>
        <div className="done w-[35%] mx-auto my-4 p-4 border border-gray-300 rounded-lg  items-center">

        </div>
      </div>
    </div>
  );
};

export default Home;