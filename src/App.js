import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import SideNav from './components/sidenav/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from './views/Jobs';
import Settings from './components/settings/Setting';
import AppDND from './components/dndEditor/AppDND';

function App() {
  return (
    <>
      <BrowserRouter>
        <SideNav />
        <Header />

        <Routes>
          <Route>
            <Route path="/" element={<AppDND />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/dashboard" element={<Jobs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
