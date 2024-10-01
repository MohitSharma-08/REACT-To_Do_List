import React, { useState } from 'react';

const ToDo = () => {
  {/*Initial task*/}

  const [tasks, setTasks] = useState([
    { id: 1, time: '6:00 AM', task: 'Go for a run' },
    { id: 2, time: '8:00 AM', task: 'Breakfast' },
    { id: 3, time: '2:00 PM', task: 'Study' },
    { id: 4, time: '8:00 PM', task: 'Dinner' },
  ]);

  
  {/*State for new task inputs*/}

  const [newTask, setNewTask] = useState('');
  const [newTime, setNewTime] = useState('');

  {/*function to delete a task*/ }
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  {/*Function to add a new task*/}

  const addTask = () => {
    if (newTask && newTime) {
      const newTaskItem = {
        id: tasks.length + 1,
        time: newTime,
        task: newTask,
      };
      setTasks([...tasks, newTaskItem]);

      {/*clear input fields*/}
      setNewTask('');  
      setNewTime('');  
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center">
      {/* Header */}
      <header className="bg-white w-full p-6 rounded-b-3xl shadow-md text-center flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-gray-700 font-medium">Hi, User</p>
          </div>
        </div>
      </header>

      {/* Task List */}
      <div className="bg-white w-full mt-6 px-6 py-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-700">Today's tasks</h2>
        <div className="space-y-4 mt-4">
          {tasks.map((taskItem) => (
            <div key={taskItem.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center space-x-4">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-gray-700 font-medium">{taskItem.task}</p>
                  <p className="text-sm text-gray-500">{taskItem.time}</p>
                </div>
              </div>
              <button
                onClick={() => deleteTask(taskItem.id)}
                className="text-gray-500 hover:text-yellow-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add New Task Section */}
      <div className="bg-white w-full mt-6 px-6 py-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-700">Add a new task</h2>
        <div className="mt-4 space-y-2">
          <input
            type="text"
            placeholder="New Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300"
          />
          <input
            type="time"
            placeholder="Time (e.g., 2:00 PM)"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300"
          />
        </div>
      </div>

      {/* Footer with Add Button */}
      <footer className="w-full flex justify-center items-center bg-white py-4 px-6 mt-auto rounded-t-3xl shadow-lg">
        <button onClick={addTask} className="bg-yellow-400 p-4 rounded-full shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </footer>
    </div>
  );
};

export default ToDo;
