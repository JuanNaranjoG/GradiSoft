import React, { useState } from 'react'
import firebase from "../../../utils/firebase";
import "firebase/auth"
import { Route, Redirect } from "react-router-dom";

export default function Form() {
    const [sesion, setsesion] = useState(false)
    const [datos, setdatos] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        setdatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const submit = (event) => {
        event.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(datos.email, datos.password)
            .then(() => {
                setsesion(true)
                console.log("Inicia Sesion");
            })
            .catch(() => {
                console.log("El correo o la contraseña son incorrectos");
            });
    }

    return (
        <form className="form-signin needs-validation" noValidate onSubmit={submit}>
            <h1 className="h3 mb-3 font-weight-normal"><font className="formv"><font className="formv">Iniciar Sesión</font></font></h1>
            <div className="mb-2">
                <label htmlFor="inputEmail" className=""><font className="formv"><font className="formv">Correo</font></font></label>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Correo"
                    required
                    autoFocus=""
                    name="email"
                    onChange={handleInputChange}
                />
                <div className="valid-tooltip">
                    Looks good!
                </div>
            </div>
            <div className="mb-2">
                <label htmlFor="inputPassword" className="sr-only"><font className="formv"><font className="formv">Contraseña</font></font></label>
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Contraseña"
                    required
                    name="password"
                    onChange={handleInputChange}
                />
            </div>
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" />
                    <font className="formv">
                        <font className="formv"> Recuérdame
                        </font>
                    </font>
                </label>
            </div>
            <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
            >
                <font className="formv"><font className="formv">Aceptar</font></font></button>
            <p className="mt-5 mb-3 text-muted"><font className="formv"><font className="formv">© GradiSoft 2020</font></font></p>
            <Route>
                {sesion ? <Redirect to={{
                    pathname: '/administracion/inicio',
                    state:1,
                    sesion:true
                }} /> : <Redirect to="/" />}
            </Route>
        </form>

    )
}
