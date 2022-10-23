import React from "react";
import "./error.css";
import ERROR from "../../assets/404.png";
import { Link } from "react-router-dom";

const Error = () => {
   
  return (
    
    <div className="container error__container">
      <h5>Erro 404</h5>
      <h1>Página não encontrada</h1>

      <div className="error">
        <img src={ERROR} alt="Página não encontrada" />        
        </div>

        <div className="error_link__container">
        <Link to={"/app"} className="btn btn-primary">Home</Link>

      </div>
    </div>
    
  );
};

export default Error;
