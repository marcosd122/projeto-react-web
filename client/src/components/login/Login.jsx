/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
// eslint-disable-next-line


import React from "react";
import * as Componente from "./Componente.jsx";
import "./login.css";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";


function Login() {
  const [entrar, toggle] = React.useState(true);
  return (

    <div className="container__login">

      


      <Componente.Container>
      
        <Componente.Inscrever_se_Container login={entrar}>
        
          <Componente.Form>
            <Componente.Titulo>Criar uma conta</Componente.Titulo>
            <Componente.Input type="nome" placeholder="Nome" />
            <Componente.Input type="email" placeholder="E-mail" />
            <Componente.Input type="senha" placeholder="Senha" /> 
            <Componente.Button>Inscrever-se</Componente.Button>
            

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

        <Componente.EntrarContainer login={entrar}>
          <Componente.Form>
            <Componente.Titulo>Entrar</Componente.Titulo>
            <Componente.Input type="email" placeholder="E-mail" />
            <Componente.Input type="senha" placeholder="Senha" />
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

            <Componente.Button>Entrar</Componente.Button>
          </Componente.Form>
        </Componente.EntrarContainer>

        <Componente.OverlayContainer login={entrar}>
          <Componente.Overlay login={entrar}>
            <Componente.LeftOverlayPanel login={entrar}>
              <Componente.Titulo>Bem vindo de volta!</Componente.Titulo>
              <Componente.Paragraph>
                Para se manter conectado conosco, faça login com suas
                informações pessoais
              </Componente.Paragraph>
              <Componente.GhostButton onClick={() => toggle(true)}>
                Entrar
              </Componente.GhostButton>
            </Componente.LeftOverlayPanel>

            <Componente.RightOverlayPanel login={entrar}>
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
        <Link to="/" className="btn"><IoMdArrowBack /></Link>

      </div>
    </div>
  );
}

export default Login;
