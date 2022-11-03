import '../styles/App.css';
import Home from '../pages/Home.js'
import Apropos from '../pages/A-Propos'
import Error from '../pages/Error.js';
import React from 'react';
import Logement from '../pages/Logement';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header';

function App() {
  return (
    <div>
      <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/apropos" element={<Apropos />}>
            </Route>
            <Route exact path='/logement/*' element={<Logement />}>
            </Route>
            <Route path='*' element={<Error />}>
            </Route>
          </Routes>
      </Router>
    </div>  
  );
}

export default App;
