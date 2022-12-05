import '../styles/App.css';
import Home from '../pages/Home.js'
import Apropos from '../pages/A-Propos'
import Error from '../pages/Error.js';
import React from 'react';
import Logement from '../pages/Logement';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'

function App() {
  return (
    <div className='root'>
      <Router>
          <Header />
          <Routes>
            <Route exact path="/accueil" element={<Home />}>
            </Route>
            <Route exact path="/" element={<Navigate to="/accueil" />}>
            </Route>
            <Route exact path="/apropos" element={<Apropos />}>
            </Route>
            <Route exact path='/logement/*' element={<Logement />}>
            </Route>
            <Route path='*' element={<Error />}>
            </Route>
          </Routes>
          <Footer />
      </Router>
    </div>  
  );
}

export default App;
