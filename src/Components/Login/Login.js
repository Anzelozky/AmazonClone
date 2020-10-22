import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import "./Login.css";
import { auth } from "../../Services/Firebase"

function Login() {
    const history = useHistory()
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const login = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then( auth => {
            //loggedIn
            history.push("/");
        })
        .catch(e => alert(e.message));
    };

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then( auth => {
            //Registered
            history.push("/");
        })
        .catch(e = alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
            <img
            className="login__logo"
            alt="amazon clone login logo"
            src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
            />
            </Link>

            <div className="login__form">
                <h1>Regístrate</h1>

                <form>
                    <h5>E-Mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email"></input>
                    <h5>Contraseña</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"></input>
                    <button type="submit" onClick={login} className="login__register-button">Regístrate</button>
                </form>

                <p>
                    Al registrarte tu accedes a los términos y condiciones de Amazon para uso y venta. Por favor
                    lee nuestra política de privacidad, nuestra noticia de cookies y nuestro interés basado en
                    anuncios.
                </p>

                <button onClick={register} className="login__create-button">Crear tu cuenta de Amazon</button>

            </div>

        </div>
    )
}

export default Login
