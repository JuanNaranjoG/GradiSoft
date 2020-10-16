import React from 'react'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top" id="mu-header">
            <a className="navbar-brand" href="/#">GradiSoft</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/#">Inicio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#Servicios">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Portafolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Equipo</a>
                    </li>
                </ul>
                <div className="float-md-right">
                <button type="button" className="btn btn-light" data-toggle="modal" data-target="#SesionModal">Iniciar Sesion</button>
                </div>
            </div>
        </nav>
    )
}
