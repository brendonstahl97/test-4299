import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/landing/landing';
import EpisodeRankings from './pages/Episode-Rankings/Episode-Rankings';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import './App.scss'

function App() {
  return (
    <Router>
      <Sidebar></Sidebar>
      <main className="content">
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/ranked-lists' element={<EpisodeRankings />} />
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </Router>
  );
}

export default App;
