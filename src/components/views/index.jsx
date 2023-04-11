import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <div className="container">
        <header>
            <div className="logo">LOGO</div>
            <div className="div-nav">
                <Link className="btn-nav" href="index.html">Inicio</Link>
                <Link className="btn-nav" href="aboutUs.html">Sobre nosotros</Link>
                <Link className="btn-nav" href="fa&q.html">Preguntas frecuentes</Link>
                <Link className="btn-nav" href="">Registrarse</Link>
                <Link className="btn-nav" href="">Iniciar sesion</Link>
            </div>
        </header>
        <aside>
            <p className="aside1">Registra "tu Bolsillo"</p>
            <p className="aside2">y haz <b>VERSUS</b></p>
            <p className="aside3">con tus gastos</p>
        </aside>
        <nav>
            <div className="rrss">
                <h3>Proximamente disponible en:</h3>
                <img src={require("https://static.fintonic.com/ES/public/src/images/android-store-v3.svg?v=1678966294315")} alt="Foto de android"/>
                <img src={require("https://static.fintonic.com/ES/public/src/images/ios-store-v2.svg?v=1678966294315")} alt="foto de applestore"/>
            </div>
        </nav>
        <section>
            <div className="telefono">
                <div className="foto-app"> AQUI VA LA FOTO DEL PROYECTO VISTA DE UN TELEFONO</div>
            </div>
        </section>
        <footer>
            <div className="logo-copyright">COPYRIGTH LOGO</div>
            <div className="div-nav">
                <Link to="../modals/m_sugerencias.js"className="btn-nav">Sugerencias y reclamos</Link>
                <Link className="btn-nav" href="">Politicas de privacidad</Link>
                <Link className="btn-nav" href="">Trabaja con nosotros</Link>
            </div>
        </footer>
        </div>
    );
};

export default Index;