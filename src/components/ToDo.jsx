// // src/components/ToDo.jsx
// import React from 'react';

// const ToDo = () => {
//   return (
//     <div className="min-h-screen bg-blue-100 flex flex-col items-center">
//       {/* Header */}
//       <header className="bg-white w-full p-6 rounded-b-3xl shadow-md text-center flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <img
//             src="https://via.placeholder.com/40"
//             alt="User Avatar"
//             className="w-10 h-10 rounded-full"
//           />
//           <div>
//             <p className="text-gray-700 font-medium">Good evening, User</p>
//             <p className="text-sm text-gray-500">Sunday, September 8</p>
//           </div>
//         </div>
//       </header>

//       {/* Calendar */}
//       <div className="bg-white w-full mt-6 px-6 py-4 rounded-lg shadow-md flex items-center justify-between space-x-2 overflow-x-auto">
//         {['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'].map((day, idx) => (
//           <div key={idx} className="flex flex-col items-center">
//             <p className="text-sm text-gray-500">{day}</p>
//             <div className={`h-8 w-8 mt-2 rounded-full flex items-center justify-center ${day === 'Sun' ? 'bg-yellow-400' : 'bg-gray-200'}`}>
//               <p className={`text-sm ${day === 'Sun' ? 'text-white' : 'text-gray-700'}`}>{idx + 5}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Task List */}
//       <div className="bg-white w-full mt-6 px-6 py-4 rounded-lg shadow-md">
//         <h2 className="text-lg font-bold text-gray-700">Today's tasks</h2>
//         <div className="space-y-4 mt-4">
//           {[
//             { time: '8:00 AM', task: 'Go to church' },
//             { time: '12:00 PM', task: 'Cook for the family' },
//             { time: '2:00 PM', task: 'Wash my clothes' },
//             { time: '5:00 PM', task: 'Visit Chastity' },
//             { time: '6:00 PM', task: 'Make my hair' },
//             { time: '8:00 PM', task: 'Call my brother' }
//           ].map((taskItem, idx) => (
//             <div key={idx} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
//               <div className="flex items-center space-x-4">
//                 <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-400" />
//                 <div>
//                   <p className="text-gray-700 font-medium">{taskItem.task}</p>
//                   <p className="text-sm text-gray-500">{taskItem.time}</p>
//                 </div>
//               </div>
//               <button className="text-gray-500 hover:text-yellow-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2}
//                   stroke="currentColor"
//                   className="w-5 h-5"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="w-full flex justify-between items-center bg-white py-4 px-6 mt-auto rounded-t-3xl shadow-lg">
//         <button className="p-2">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
//           </svg>
//         </button>
//         <button className="bg-yellow-400 p-4 rounded-full shadow-md">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//           </svg>
//         </button>
//         <button className="p-2">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 18.364a9 9 0 1112.728 0" />
//           </svg>
//         </button>
//       </footer>
//     </div>
//   );
// };

// export default ToDo;






// src/components/ToDo.jsx
import React, { useState } from 'react';

const ToDo = () => {
  // Initial tasks list
  const [tasks, setTasks] = useState([
    { id: 1, time: '8:00 AM', task: 'Go to church' },
    { id: 2, time: '12:00 PM', task: 'Cook for the family' },
    { id: 3, time: '2:00 PM', task: 'Wash my clothes' },
    { id: 4, time: '5:00 PM', task: 'Visit Chastity' },
    { id: 5, time: '6:00 PM', task: 'Make my hair' },
    { id: 6, time: '8:00 PM', task: 'Call my brother' },
  ]);

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
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
            <p className="text-gray-700 font-medium">Good evening, User</p>
            <p className="text-sm text-gray-500">Sunday, September 8</p>
          </div>
        </div>
      </header>

      {/* Calendar */}
      <div className="bg-white w-full mt-6 px-6 py-4 rounded-lg shadow-md flex items-center justify-between space-x-2 overflow-x-auto">
        {['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'].map((day, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <p className="text-sm text-gray-500">{day}</p>
            <div className={`h-8 w-8 mt-2 rounded-full flex items-center justify-center ${day === 'Sun' ? 'bg-yellow-400' : 'bg-gray-200'}`}>
              <p className={`text-sm ${day === 'Sun' ? 'text-white' : 'text-gray-700'}`}>{idx + 5}</p>
            </div>
          </div>
        ))}
      </div>

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

      {/* Footer */}
      <footer className="w-full flex justify-between items-center bg-white py-4 px-6 mt-auto rounded-t-3xl shadow-lg">
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <button className="bg-yellow-400 p-4 rounded-full shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 18.364a9 9 0 1112.728 0" />
          </svg>
        </button>
      </footer>
    </div>
  );
};

export default ToDo;
