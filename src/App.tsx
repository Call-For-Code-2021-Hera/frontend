import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/join.css';

import api from './services/api'
import { useEffect } from 'react';
import { Rotas } from './components';

function App() {

  return (
    <>
      <Rotas></Rotas>
    </>
  );
}

export default App;
