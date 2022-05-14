//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import AdminHome from './pages/admin/home/AdminHome';
import { AdminLocation } from './pages/admin/location/AdminLocation';
import { AdminUser } from './pages/admin/user/AdminUser';
import { AdminComment } from './pages/admin/comment/AdminComment';
import { Home } from './pages/user/home/homepage';
import Login from './pages/user/login/Login';
import Logout from './pages/user/logout/Logout';
import { Process } from './pages/user/process/process';
import { SearchResult } from './pages/user/searchResult/searchResult';
import { Favourite } from './pages/user/Favor/Favor';
//import  Detail from './pages/user/detail/detail';
import LocDetail from './pages/user/locDetail/locDetail';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/Admin' element={<AdminHome />} />
        <Route path='/Admin/Location' element={<AdminLocation />} />
        <Route path='/Admin/User' element={<AdminUser />} />
        <Route path='/Admin/Comment' element={<AdminComment />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<Login />} />
        <Route path='/Logout' element={<Logout />} />
        <Route path='/Process' element={<Process />} />
        <Route path='/Search' element={<SearchResult />} />
        <Route path='/Favor' element={<Favourite />} />
        <Route path='/detail/:name' element={<LocDetail />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

function NoMatch() {
  let location = useLocation();
  return (
  <div>
  <h3>
  No match for <code>{location.pathname}</code>
  </h3>
  </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
