import React from "react";
import "./objetivos.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Objetivos = () => {
  return (
    <section id='objetivos'>
      <h5>União de esforços</h5>
      <h2>Objetivos para o projeto</h2>

      <div className="container objetivos__container">
        <div className="objetivos__projeto">
          <h3>Objetivos</h3>
          <div className="objetivos__conteudo">
            <article className="objetivos__detalhes">
              <BsPatchCheckFill className="objetivos__detalhes-icones" />
              <div>
                <h4>Objetivos1</h4>
                <small className="text-light">Objetivos1</small>
              </div>
            </article>

            <article className="objetivos__detalhes">
              <BsPatchCheckFill className="objetivos__detalhes-icones" />
              <div>
                <h4>Objetivos2</h4>
                <small className="text-light">Objetivos2</small>
              </div>
            </article>

            <article className="objetivos__detalhes">
              <BsPatchCheckFill className="objetivos__detalhes-icones" />
              <div>
                <h4>Objetivos3</h4>
                <small className="text-light">Objetivos3</small>
              </div>
            </article>

            <article className="objetivos__detalhes">
              <BsPatchCheckFill className="objetivos__detalhes-icones" />
              <div>
                <h4>Objetivos4</h4>
                <small className="text-light">Objetivos4</small>
              </div>
            </article>

            <article className="objetivos__detalhes">
              <BsPatchCheckFill className="objetivos__detalhes-icones" />
              <div>
                <h4>Objetivos5</h4>
                <small className="text-light">Objetivos5</small>
              </div>
            </article>
          </div>
        </div>

        {/* FIM DA AREA OBJETIVOS  */}

        <div className="objetivos__ferramentas">
          <h3>Ferramentas</h3>
          <div className="objetivos__conteudo">
            <article className="objetivos__detalhes">
              <BsPatchCheckFill className="objetivos__detalhes-icones" />
              <div>
                <h4>Ferramentas1</h4>
                <small className="text-light">Ferramentas1</small>
              </div>
            </article>

            <article className="objetivos__detalhes">
              <BsPatchCheckFill className="objetivos__detalhes-icones" />
              <div>
                <h4>Ferramentas2</h4>
                <small className="text-light">Ferramentas2</small>
              </div>
            </article>

            <article className="objetivos__detalhes">
              <BsPatchCheckFill className="objetivos__detalhes-icones" />
              <div>
                <h4>Ferramentas3</h4>
                <small className="text-light">Ferramentas3</small>
              </div>
            </article>

            <article className="objetivos__detalhes">
              <BsPatchCheckFill className="objetivos__detalhes-icones" />
              <div>
                <h4>Ferramentas4</h4>
                <small className="text-light">Ferramentas4</small>
              </div>
            </article>

            <article className="objetivos__detalhes">
              <BsPatchCheckFill className="objetivos__detalhes-icones" />
              <div>
                <h4>Ferramentas5</h4>
                <small className="text-light">Ferramentas5</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objetivos;
