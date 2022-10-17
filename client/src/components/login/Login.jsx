/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
// eslint-disable-next-line


import React, {useState} from "react";
import * as Componente from "./Componente.jsx";
import "./login.css";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import Axios from 'axios'


function Login() {
  
  const [entrar, toggle] = React.useState(true);

  const [UsuarioNomeReg, setUsuarioNomeReg] = useState('')
  const [UsuarioEmailReg, setUsuarioEmailReg] = useState('')
  const [UsuarioSenhaReg, setUsuarioSenhaReg] = useState('')

  const [UsuarioNomeLog, setUsuarioNomeLog] = useState('')
  const [UsuarioEmailLog, setUsuarioEmailLog] = useState('')
  const [UsuarioSenhaLog, setUsuarioSenhaLog] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const registro = () => {
    Axios.post('http://localhost:3001/registro', {
      usuarioNome: UsuarioNomeReg,
      usuarioEmail: UsuarioEmailReg,
      usuarioSenha: UsuarioSenhaReg,
    }).then((response) => {
      console.log(response)
    })   
  }

  const logado = () => {
    Axios.post('http://localhost:3001/logado', {      
      usuarioNome: UsuarioNomeLog,
      usuarioEmail: UsuarioEmailLog,
      usuarioSenha: UsuarioSenhaLog,
    }).then((response) => {

      if (response.data.message) {
      setLoginStatus(response.data.message)
    } else {
      setLoginStatus(response.data[0].usuarioNome)
    }
    })   
  }


  return (

    <div className="container__login">

      <Componente.Container>
      
        <Componente.Inscrever_se_Container Conectar={entrar}>
        
          <Componente.Form>

            <Componente.Titulo>Criar uma conta</Componente.Titulo>

            <Componente.Input type="nome" onChange={(e) => {
              setUsuarioNomeReg(e.target.value) }} placeholder="Nome" />
            <Componente.Input type="email" onChange={(e) => {
              setUsuarioEmailReg(e.target.value) }} placeholder="E-mail" />
            <Componente.Input type="password" onChange={(e) => {
              setUsuarioSenhaReg(e.target.value) }} placeholder="Senha" />                       

            <Componente.Button onClick={registro}>Inscrever-se</Componente.Button>
            

            <div class="login_midias_sociais">
              <a href="# " class="login_midias_sociais-icon">
                <i class="fab fa-facebook-f"><FaFacebookF /></i>
              </a>
              <a href="# " class="login_midias_sociais-icon">
                <i class="fab fa-google"><BsGoogle /></i>
              </a>
              <a href="# " class="login_midias_sociais-icon">
                <i class="fab fa-linkedin-in"><IoLogoTwitter /></i>
              </a>
            </div>
        

          </Componente.Form>
        </Componente.Inscrever_se_Container>

        <Componente.EntrarContainer Conectar={entrar}>
          <Componente.Form>
            <Componente.Titulo>Entrar</Componente.Titulo>
            <Componente.Input type="nome" onChange={(e) => {
              setUsuarioNomeLog(e.target.value) }} placeholder="Nome" />
            <Componente.Input type="email" placeholder="E-mail" 
            onChange={(e) => {setUsuarioEmailLog(e.target.value)}}/>
            <Componente.Input type="password" placeholder="Senha" 
            onChange={(e) => {setUsuarioSenhaLog(e.target.value)}}/>        

            <Componente.Button onClick={logado }  >Entrar</Componente.Button>

            <Componente.Anchor href="# ">Esqueceu sua senha?</Componente.Anchor>

            <div class="login_midias_sociais">
              <a href="# " class="login_midias_sociais-icon">
                <i class="fab fa-facebook-f"><FaFacebookF /></i>
              </a>
              <a href="# " class="login_midias_sociais-icon">
                <i class="fab fa-google"><BsGoogle /></i>
              </a>
              <a href="# " class="login_midias_sociais-icon">                
                <i class="fab fa-linkedin-in"><IoLogoTwitter /></i>
              </a>
            </div>

          </Componente.Form>
        </Componente.EntrarContainer>

        <Componente.OverlayContainer Conectar={entrar}>
          <Componente.Overlay Conectar={entrar}>
            <Componente.LeftOverlayPanel Conectar={entrar}>
              <Componente.Titulo>Bem vindo de volta!</Componente.Titulo>
              <Componente.Paragraph>
                Para se manter conectado conosco, faça login com suas
                informações pessoais
              </Componente.Paragraph>
              <Componente.GhostButton onClick={() => toggle(true)}>
                Entrar
              </Componente.GhostButton>
            </Componente.LeftOverlayPanel>

            <Componente.RightOverlayPanel Conectar={entrar}>
              <Componente.Titulo>Olá amigo!</Componente.Titulo>
              <Componente.Paragraph>
                Insira seus dados pessoais e comece a jornada conosco
              </Componente.Paragraph>
              <Componente.GhostButton onClick={() => toggle(false)}>
                Inscreva-se
              </Componente.GhostButton>
            </Componente.RightOverlayPanel>
          </Componente.Overlay>
        </Componente.OverlayContainer>
      </Componente.Container>

      <div className="container_link__container">
        <Link to={"/"} className="btn"><IoMdArrowBack /></Link>

      </div>

      <h1>{loginStatus}</h1>

    </div>
  );
}

export default Login;

/*

- Biblioteca styled-componente

- Biblioteca Axios

É um cliente HTTP baseado em Promises para fazer requisições.
Pode ser utilizado tanto no navegador quanto no Node. js ou qualquer serviço de API.


*/