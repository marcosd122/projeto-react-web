import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Sobre from './components/sobre/Sobre'
import Objetivos from './components/objetivos/Objetivos'
import Atividades from './components/atividades/Atividades'
import Biblioteca from './components/biblioteca/Biblioteca'
import Depoimentos from './components/depoimentos/Depoimentos'
import Contatos from './components/contatos/Contatos'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Sobre />
      <Objetivos />
      <Atividades />
      <Biblioteca />
      <Depoimentos />
      <Contatos />
      <Footer />
    </>
  )
}

export default App
