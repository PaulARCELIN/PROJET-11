import '../styles/App.css';
import Home from '../pages/Home.js'
import Fiche from '../pages/Fiche.js'
import Apropos from '../pages/A-Propos'
import Error from '../pages/Error.js';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header';

function App() {
  return (
    <Router>
      <div>
        
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/fiche" element={<Fiche />}>
          </Route>
          <Route exact path="/apropos" element={<Apropos />}>
          </Route>
          <Route path='*' element={<Error />}>
          </Route>
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
