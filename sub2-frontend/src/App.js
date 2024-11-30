import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotesPage from './pages/Some';

const App = () => (
   <Router>
       <Routes>
           <Route path="/" element={<NotesPage />} />
       </Routes>
   </Router>
);

export default App;