import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import api from './services/api'
import { useEffect } from 'react';
import { Rotas } from './components';

function App() {
  const [senhaMd5, setSenhaMd5] = useState('');
  useEffect(()=>{
    api.get("login/1234").then(({data}) =>{
      setSenhaMd5(data.senha)
    })
  },[])
  return (
    <>
      <Rotas></Rotas>
    </>
  );
}

export default App;
