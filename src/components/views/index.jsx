import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
        return(
            <div className="main-container">
                    <nav className="nav-container">
                        <div className="logo">
                            <img src={require("../../img/logo.jpg")} alt=""/>
                        </div>
                        <div className="menu-container">
                            <Link className="btn-nav"  to="Index">Sugerencias y reclamosreclamosreclamos</Link>
                            <a className="btn-nav" href="/public/aboutUs.html">Sobre nosotros</a>
                            <a className="btn-nav" href="/public/fa&q.html">Preguntas frecuentes</a>
                            <a className="btn-nav" href="/public/registro.html">Registrarse</a>
                            <a className="btn-nav btn-login" href="/public/login.html">Iniciar sesion</a>
                        </div>
                    </nav>
            
                    <header className="main-container">
                        <div className="container-50">
                        <h1>Registra tu <span>Bolsillo</span><br/> y haz <span>versus a tus gastos</span></h1>
                        <p>Con la app bolsillo podrás mantener ordenada tus finanzas personales de una forma fácil y segura. Podrás registrar tus ingresos y gastos, crear presupuestos, establecer metas de ahorro y consultar informes detallados de tu situación financiera. </p>
                        <p> Bolsillo es la app ideal para gestionar tu economía personal y alcanzar tus objetivos financieros.</p>
                            <h3>Proximamente disponible en:</h3>
                            <img src="https://static.fintonic.com/ES/public/src/images/android-store-v3.svg?v=1678966294315" alt="Foto de android"/>
                            <img src="https://static.fintonic.com/ES/public/src/images/ios-store-v2.svg?v=1678966294315" alt="foto de applestore"/>
                        </div>
                        <div className="container-50 header-img-container">
                            <img src={require("../../img/header-img.jpg")} alt="imagen de celular"/>
                        </div>
                    </header>
                    
                    <footer >
                        <div className="logo-copyright">COPYRIGTH LOGO</div>
                        <div className="btn-footer-container">
                            <Link className="btn-footer"  to="">Sugerencias y reclamos</Link>
                            <Link className="btn-footer"  to="">Politicas de privacidad</Link>
                            <Link className="btn-footer"  to="">Trabaja con nosotros</Link>
                        </div>
                    </footer>
                </div>
        );
    }

export default Index;