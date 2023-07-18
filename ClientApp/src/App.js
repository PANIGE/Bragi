import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { Profil } from './components/routes/pages/profil/Profil.jsx';

import './index.css';
import './components/root/pages/profil/profil.css';


  export default function App() {
    return (
    <Profil />
  );
}