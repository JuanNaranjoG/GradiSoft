import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import firebase from "../../../utils/firebase";
import "firebase/auth"
import { Route, Redirect } from "react-router-dom";

export default function Nav() {
    const [sesion, setsesion] = useState(false)

    return (
        <nav className="d-flex navbar navbar-expand-lg navbar-dark bg-primary sticky-top pr-1" id="mu-header">
            <button className="navbar-toggler d-md-none mr-2" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-haspopup="true" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/#">GradiSoft</a>
            <div className="ml-auto">
                <button type="button" className="btn " id="dropdownMenuLink" data-toggle="dropdown">
                    <FontAwesomeIcon icon={faEllipsisV} size="1x" className="text-white  mr-2" />
                </button>

                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                <a  href="/"
                 className="dropdown-item"
                 onClick={(event) => {
                    event.preventDefault();
                    firebase.auth().signOut();
                     setsesion(true)}
                 }>Cerrar Sesión</a>
                    
                </div>
            </div>
            <Route>
                {sesion ? <Redirect to="/" /> : <Redirect to="/administracion/inicio" />}
            </Route>
        </nav>
        
    )
}
