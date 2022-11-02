import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SideNav from './components/sidenav/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from './views/Jobs';
import Settings from './components/settings/Setting';

function App() {
  return (
    <>
      <SideNav />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Jobs />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;
