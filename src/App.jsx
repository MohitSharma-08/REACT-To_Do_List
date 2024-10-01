import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Login from './components/Login'; // Import Login component
import ToDo from './components/ToDo';   // Import ToDo component

function App() {
  return (
    <Router>
      <Routes>
        
        {/* Default Route for Login */}
        <Route path="/" element={<Login />} />
        
        {/* Route for ToDo Page */}
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </Router>
  );
}

export default App;
