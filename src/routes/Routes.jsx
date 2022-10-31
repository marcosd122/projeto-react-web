import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/login/Login";
import Registro from "../components/registro/Registro";
import Acervo from "../components/acervo/Acervo";
import Error from "../components/error/Error";
import App from "../App";

export function MyRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />

        <Route path="app" element={<App />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        <Route exact path="/acervo" element={<Acervo />} />

        <Route path="*" element={<Error />} />
        <Route path="/" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
