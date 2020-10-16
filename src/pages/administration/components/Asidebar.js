import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFile, faDollyFlatbed, faUserAlt, faChartBar } from '@fortawesome/free-solid-svg-icons';
import {
  Link
} from "react-router-dom";

export default function Asidebar() {
  return (
    <nav id="sidebarMenu" className=" col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to={{
              pathname: '/administracion/inicio',
              state:1
            }}
            >
              <FontAwesomeIcon icon={faHome} size="1x" className=" mr-md-2 mr-2 " />
              Inicio
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={{
              pathname: '/administracion/ordenes',
              state:2
            }}>
              <FontAwesomeIcon icon={faFile} size="1x" className=" mr-md-2 mr-2 " />
              Ordenes
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={{
              pathname: "/administracion/productos",
              state:3
            }}>
              <FontAwesomeIcon icon={faDollyFlatbed} size="1x" className=" mr-md-2 mr-2 " />
              Productos
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to={{
              pathname: "/administracion/cliente",
              state:4
            }}>
              <FontAwesomeIcon icon={faUserAlt} size="1x" className=" mr-md-2 mr-2 " />
              Clientes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={{
              pathname: "/administracion/reportes",
              state:5
            }}>
              <FontAwesomeIcon icon={faChartBar} size="1x" className=" mr-md-2 mr-2 " />
              Reportes
              </Link>
          </li>
        </ul>
      </div >
    </nav >
  )
}
