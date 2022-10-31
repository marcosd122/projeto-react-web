import React from "react";
import { useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import './registro.css'
import { IoMdArrowBack } from "react-icons/io";

function Registro() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(nome, email, password)
        axios.post('http://localhost:5000/inscrever',
            {
              nome: nome,  
              email: email,
                password: password
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    alert('Sucesso na inscrição.')
                } else {
                    alert('Erro no cadastro.')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
    <>
        <h1 className="center"> INSCREVER-SE</h1>
        <div className="outcard">
          <form className="registro_form_container">
        Nome
            <input
                onChange={(e) => {
                    setNome(e.target.value)
                }}
                value={nome}
                className="inputs"
                type="nome" /> <br /> <br />
            E-mail
            <input
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                value={email}
                className="inputs"
                type="email" /> <br /> <br />
           Senha
            <input
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                value={password}
                className="inputs" type="password" /> <br /> <br />
                </form>
            <button
                onClick={handleSubmit}
                className="btn btn-primary"> ENVIAR </button>
            <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}
                to={'/login'}>ENTRAR </Link>
        </div>
        <div className="container_link__container">
        <Link to={"/app"} className="btn">
          <IoMdArrowBack />
        </Link>
        </div>
    </>
    )
}


export default Registro