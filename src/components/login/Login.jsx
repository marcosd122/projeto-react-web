import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { IoMdArrowBack } from "react-icons/io";

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(email, password);
    axios
      .post("http://localhost:5000/entrar", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.code === 500) {
          alert("Usuário não encontrado");
        }
        if (res.data.code === 404) {
          alert("A senha está errada");
        }
        if (res.data.code === 200) {
          navigate("/acervo");
          localStorage.setItem("TOKEN", res.data.token);
          localStorage.setItem("EMAIL", res.data.email);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="center"> ENTRAR </h1>
      <div className="outcard">
      <form className="login_form_container">
        E-mail
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          className="inputs"
          type="email"
        />{" "}
        <br /> <br />
        Senha
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          className="inputs"
          type="password"
        />{" "}
        <br /> <br />
        </form>
        <button onClick={handleSubmit} className="btn btn-primary">
          {" "}
          ENVIAR{" "}
        </button>
        <Link
          style={{ textAlign: "center", display: "block", marginTop: "5px" }}
          to={"/registro"}
        >
          {" "}
          INSCREVER-SE{" "}
        </Link>
      </div>
      <div className="container_link__container">
        <Link to={"/app"} className="btn">
          <IoMdArrowBack />
        </Link>
        </div>
    </>
  );
}

export default Login;
