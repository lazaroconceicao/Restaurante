import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import Cardapio from './page/Cardapio';
import Inicio from 'page/Inicio';

ReactDOM.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>,
  document.getElementById('root')
);
