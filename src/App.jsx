/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
/*eslint-disable-next-line*/

import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Sobre from "./components/sobre/Sobre";
import Objetivos from "./components/objetivos/Objetivos";
import Atividades from "./components/atividades/Atividades";
import Biblioteca from "./components/biblioteca/Biblioteca";
import Depoimentos from "./components/depoimentos/Depoimentos";
import Contatos from "./components/contatos/Contatos";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Acervo from "./components/acervo/Acervo";
// import Error from "./components/error/Error";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,  
  Route,
  Routes, 
} from "react-router-dom";


const App = () => {

  return (
    
    <>
          <Router>

        <Routes>
          <Route exact path="/" element={<Header />} />          
        </Routes>
        <Routes>
          <Route exact path="/" element={<Nav />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Sobre />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Objetivos />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Atividades />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Biblioteca />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Depoimentos />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Contatos />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Footer />} />
        </Routes>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>

        <Routes>
          <Route path='/acervo' element={<Acervo />} />
        </Routes>

        <Routes>
        
        </Routes>
 
      </Router>
  
    </>
  );
};

  
export default App;

/*npx create-react-app my-app
code
*/

/*Para uso de navegação entre telas foi utilizado a biblioteca router-react*/

/* 
<Header />
<Nav />
<Sobre />
<Objetivos />
<Atividades />
<Biblioteca />      
<Depoimentos />
<Contatos />
<Footer />
*/
