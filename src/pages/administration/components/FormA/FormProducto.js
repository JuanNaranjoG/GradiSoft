import React, { useState } from 'react'
import firebase from "../../../../utils/firebase";

export default function Form() {
    var db = firebase.firestore();
    const [datos, setdatos] = useState({
        nombre: '',
        tipo: '',
        descripcion: '',
        valor: '',
        cantidad: '',
        estado: '',
    });

    const handleInputChange = (event) => {
        setdatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const submit = (event) => {
        event.preventDefault();
        db.collection("productos").add({
            nombre: datos.nombre,
            tipo: datos.tipo,
            descripcion: datos.descripcion,
            valor: datos.valor,
            cantidad: datos.cantidad,
            estado: datos.estado
        })
            .then(function (docRef) {
                return (
                    <div className="alert alert-primary" role="alert">
                        El producto fue creado
                    </div>
                )
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    return (
        <form className="form-signin needs-validation" noValidate onSubmit={submit}>
            <h1 className="h3 mb-3 font-weight-normal text-center"><font className="formv"><font className="formv">Agregar Producto</font></font></h1>
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
                <label htmlFor="inputNombre" className=""><font className="formv"><font className="formv">Tipo</font></font></label>
                <input
                    type="text"
                    id="inputTipo"
                    className="form-control"
                    placeholder="Tipo"
                    required
                    name="tipo"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="inputApellido" className=""><font className="formv"><font className="formv">Descripción</font></font></label>
                <input
                    type="text"
                    id="inputDescricion"
                    className="form-control"
                    placeholder="Descripcion"
                    required
                    name="descripcion"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="inputValor" className=""><font className="formv"><font className="formv">Valor</font></font></label>
                <input
                    type="number"
                    id="inputValor"
                    className="form-control"
                    placeholder="Valor"
                    required
                    name="valor"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="inputCantidad" className=""><font className="formv"><font className="formv">Cantidad</font></font></label>
                <input
                    type="text"
                    id="inputCantidad"
                    className="form-control"
                    placeholder="Cantidad"
                    required
                    name="cantidad"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="inputEstado" className=""><font className="formv"><font className="formv">Estado</font></font></label>
                <input
                    type="text"
                    id="inputEstado"
                    className="form-control"
                    placeholder="Estado"
                    required
                    name="estado"
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
