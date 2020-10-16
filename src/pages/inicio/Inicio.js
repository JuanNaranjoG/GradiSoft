import React from 'react';
import '../../css/Inicio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import $ from 'jquery';
import Popper from 'popper.js'; */
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nav from "./components/Nav";
import Modal from './components/Modal';
import Carrousel from "./components/Carrousel";
import Services from "./components/Services";
import Footer from './components/Footer';


function Inicio() {
  return (
    <>
    <Nav/>
    <Modal/>
    <Carrousel/>
    <Services/>
    <Footer/>
    </>
  );
}

export default Inicio;
