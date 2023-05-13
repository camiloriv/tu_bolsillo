import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div>
            <section class="form-container">
                <img src="../src/img/logo.jpg" alt=""/>
                <h1>Registrar cuenta</h1>
                <br/>
                <form method="post" action="registro.html">
                    <label for="email">Correo</label>
                    <input type="email" name="email" id="email" />
                    <br/>
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" id="password" />
                    <br/>
                    <button class="btn-submit" type="submit">Registrar</button>
                    <button class="btn-volver"><a href="/public/index.html"> Volver </a></button>
                </form>
            </section>

            <div id="modal-container" class="modal-container">
                <div class="modal">
                    <div class="header">
                        Se a generado el usuario
                    </div>
                    <div id="modal-body" class="body">

                    </div>
                    <div class="footer">
                        <button id="modal-btn" class="modal-btn">
                            OK
                        </button>
                    </div>
                </div>
            </div>

        
            <script>
                
                    const form = document.querySelector("form");
                    form.addEventListener("submit", async (eventoSubmit) => { 
                        eventoSubmit.preventDefault();
                        
                        const formElement   = eventoSubmit.currentTarget; 
                        const formData      = new FormData( formElement );
                        
                        const email         = formData.get("email");
                        const password    = formData.get("password");
                        const newUser = {
                            email,
                            password
                        };

                        const baseUrl   = "http://localhost:3000";
                        const url       = baseUrl + "/registro";
                        const fetchConfig = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify( newUser )
                        };
                        try {
                            const response = await fetch(url, fetchConfig);
                            
                            const modalContainer = document.getElementById("modal-container")
                            const modalBody = document.getElementById("modal-body")
                            const modalBtn = document.getElementById("modal-btn")

                            modalContainer.style.display = "flex"

                            modalBtn.addEventListener("click", () => {
                                modalContainer.style.display = "none"
                            })

                            console.log(response)
                            if( !response.ok ) {

                                console.error("La respuesta no está OK");
                            return;
                            } 

                            const objetoJson    = await response.json(); 
                            console.dir( objetoJson);

                        }catch (error) {

                            console.error( {error,code} );
                            console.error( {error,message} );
                        }

                    );
                     </script>
        </div>
    );
}

export default Register;