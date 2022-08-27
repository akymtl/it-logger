import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import './App.css';
import Navbar from './components/layout/Navbar';
import Logs from './components/logs/Logs';
import AddLog from './components/logs/AddLog';
import EditLog from './components/logs/EditLog';
import AddTech from './components/techs/AddTech';
import Techs from './components/techs/Techs';
import store from './store';
import NoPage from './components/layout/NoPage';


const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Logs />} />
            <Route path="logs" element={<Logs />} />
            <Route path="add-log" element={<AddLog />} />
            <Route path="edit-log" element={<EditLog />} />
            <Route path="techs" element={<Techs />} />
            <Route path="add-tech" element={<AddTech />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
