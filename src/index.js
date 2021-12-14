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
import { Agendaint } from './componentes/Agendaint';
import { Resultadospacientes } from './componentes/Resultadospacientes';
import { Cerrarsesion } from './componentes/Cerrarsesion';
import { HomeUsuarioext } from './componentes/Homeusuarioext';
import { Mismensajes } from './Mismensajes';
import { Misresultados } from './componentes/Misresultados';
import { Homeadmin } from './componentes/Homeadmin';
import { Home } from './componentes/Home';



ReactDOM.render(
  <React.StrictMode>
      {/* Componente principal */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Registrarse" element={<Registrarse/>} />
          <Route path="/HomeUsuarioint" element={<HomeusuarioInt/>} />
          <Route path="/Examenesint" element={<Examenesint/>} />
          <Route path="/Agendaint" element={<Agendaint/>} />
          <Route path="/Resultadospacientes" element={<Resultadospacientes/>} />
          <Route path="/Cerrarsesion" element={<Cerrarsesion/>} />
          <Route path="/HomeUsuarioext" element={<HomeUsuarioext/>} />
          <Route path="/Agendarmuestra" element={<Agendarmuestra/>} />
          <Route path="/Misresultados" element={<Misresultados/>} />
          <Route path="/Mismensajes" element={<Mismensajes/>} />
          <Route path="/Homeadmin" element={<Homeadmin/>} />

          

        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
