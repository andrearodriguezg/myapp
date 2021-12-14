import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Login } from './componentes/Login';
import { Registrarse } from './componentes/Registrarse';
import { HomeusuarioInt } from './componentes/HomeusuarioInt';
import { Examenesint } from './componentes/Examenesint';

ReactDOM.render(
  <React.StrictMode>
      {/* Componente principal */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Registrarse" element={<Registrarse/>} />
          <Route path="/HomeUsuarioint" element={<HomeusuarioInt/>} />
          <Route path="/Examenesint" element={<Examenesint/>} />
          <Route path="/Agendaint" element={<Agendaint/>} />
          <Route path="/Examenesint" element={<Examenesint/>} />
          <Route path="/Resultadospacientes" element={<Resultadospacientes/>} />


        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
