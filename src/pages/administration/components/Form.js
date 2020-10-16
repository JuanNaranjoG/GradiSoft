import React, { useState } from 'react'
import firebase from "../../../utils/firebase";

export default function Form() {
    var db = firebase.firestore();
    const [datos, setdatos] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        direccion: '',
    });

    const handleInputChange = (event) => {
        setdatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const submit = (event) => {
        event.preventDefault();
        db.collection("clientes").add({
            nombre: datos.nombre,
            apellido: datos.apellido,
            telefono: datos.telefono,
            direccion: datos.direccion
        })
            .then(function (docRef) {
                return (
                    <div className="alert alert-primary" role="alert">
                        El cliente fue creado
                    </div>
                )
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }
    
    return (
        <form className="form-signin needs-validation" noValidate onSubmit={submit}>
            <h1 className="h3 mb-3 font-weight-normal text-center"><font className="formv"><font className="formv">Agregar cliente</font></font></h1>
            <div className="mb-2">
                <label htmlFor="inputNombre" className=""><font className="formv"><font className="formv">Nombre</font></font></label>
                <input
                    type="text"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Nombre"
                    required
                    name="nombre"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="inputApellido" className=""><font className="formv"><font className="formv">Apellido</font></font></label>
                <input
                    type="text"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Apellido"
                    required
                    name="apellido"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="inputTelefono" className=""><font className="formv"><font className="formv">Telefono</font></font></label>
                <input
                    type="tel"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Telefono"
                    required
                    name="telefono"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="inputDireccion" className=""><font className="formv"><font className="formv">Dirección</font></font></label>
                <input
                    type="text"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Dirección"
                    required
                    name="direccion"
                    onChange={handleInputChange}
                />
            </div>
            <button
                className="btn btn-sm btn-primary btn-block"
                type="submit"
            >
                <font className="formv"><font className="formv">Aceptar</font></font></button>
        </form>

    )
}
