import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/landing/landing';
import Sidebar from './components/Sidebar/Sidebar';
import './App.scss'

function App() {
  return (
    <Router>
      <Sidebar></Sidebar>
      <section className="content">
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
