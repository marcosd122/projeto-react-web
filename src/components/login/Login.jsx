/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
// eslint-disable-next-line

import React from "react";
import {
  Container,
  InscreverSeContainer,
  Form,
  Titulo,
  Input,
  Button,
  EntrarContainer,
  Anchor,
  OverlayContainer,
  Overlay,
  LeftOverlayPanel,
  RightOverlayPanel,
  Paragraph,
  GhostButton,
} from "./Componente";
import "./forms.css";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle, BsGithub } from "react-icons/bs";

export default function Login() {

  const [entrar, toggle] = React.useState(true);


      return (
        <div className="container__login">
          <Container >
            <InscreverSeContainer Conectar={entrar} >
              <Form>
                <Titulo>Criar uma conta</Titulo>

                <Input
                  type="text"
                  placeholder="Nome"             
                />

                <Input
                  type="text"
                  placeholder="Sobrenome"                
                />

                <Input
                  type="email"
                  placeholder="E-mail"                
                />

                <Input  type="password" placeholder="Password"/>

                
                <Button>Inscrever-se</Button>

                <div class="login_midias_sociais">
                  <a href="# " class="login_midias_sociais-icon">
                    <i class="fab fa-facebook-f">
                      <FaFacebookF />
                    </i>
                  </a>
                  <a href="# " class="login_midias_sociais-icon">
                    <i class="fab fa-google">
                      <BsGoogle />
                    </i>
                  </a>
                  <a href="# " class="login_midias_sociais-icon">
                    <i class="fab fa-linkedin-in">
                      <BsGithub />
                    </i>
                  </a>
                </div>
              </Form>
              
            </InscreverSeContainer>

            <EntrarContainer Conectar={entrar} >
              <Form>
                <Titulo>Entrar</Titulo>

                <Input type="email" placeholder="E-mail" name="email"
						/>

                <Input type="password" placeholder="Senha"/>


                <Button >Entrar</Button>

                <Anchor href="# ">Esqueceu sua senha?</Anchor>

                <div class="login_midias_sociais">
                  <a href="# " class="login_midias_sociais-icon">
                    <i class="fab fa-facebook-f">
                      <FaFacebookF />
                    </i>
                  </a>
                  <a href="# " class="login_midias_sociais-icon">
                    <i class="fab fa-google">
                      <BsGoogle />
                    </i>
                  </a>
                  <a href="# " class="login_midias_sociais-icon">
                    <i class="fab fa-linkedin-in">
                      <BsGithub />
                    </i>
                  </a>
                </div>
              </Form>
            </EntrarContainer>

            <OverlayContainer Conectar={entrar}>
              <Overlay Conectar={entrar}>
                <LeftOverlayPanel Conectar={entrar}>                
                  <Titulo>Bem vindo de volta!</Titulo>
                  <Paragraph>
                    Para se manter conectado conosco, faça login com suas
                    informações pessoais
                  </Paragraph>
                  <GhostButton onClick={() => toggle(true)}>Entrar</GhostButton>
                </LeftOverlayPanel>

                <RightOverlayPanel Conectar={entrar}>
                  <Titulo>Olá amigo!</Titulo>
                  <Paragraph>
                    Insira seus dados pessoais e comece a jornada conosco
                  </Paragraph>
                  <GhostButton onClick={() => toggle(false)}>
                    Inscreva-se
                  </GhostButton>
                </RightOverlayPanel>
              </Overlay>
            </OverlayContainer>
            
          </Container>
          

          <div className="container_link__container">
            <Link to={"/app"} className="btn">
              <IoMdArrowBack />
            </Link>
          </div>
        </div>
      );
    };
 


/*

- Biblioteca styled-componente

- Biblioteca Axios

É um cliente HTTP baseado em Promises para fazer requisições.
Pode ser utilizado tanto no navegador quanto no Node. js ou qualquer serviço de API.

*/
