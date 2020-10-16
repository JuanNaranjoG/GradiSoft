import React from 'react'
import '../../css/Inicio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nav from "./components/Nav";
import Contenedor from './components/Contenedor';
import '../../css/Administracion.css';



export default function Administration(props) {

    return (
        <>
            <Nav />
            <Contenedor id={props.location.state} />
        </>
    )
}
