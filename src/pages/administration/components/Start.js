import React, { useEffect, useState } from 'react'
import firebase from "../../../utils/firebase";
import 'firebase/firestore';
import { map } from "lodash"

export default function Clients() {
  var db = firebase.firestore();
  const [datos, setdatos] = useState({});

  const load = () => {
    db.collection("clientes").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id })
      });
      setdatos(docs);
    });

  }

  const remove = (id) => {

    db.collection("clientes").doc(`${id}`).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });

  }

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr className="text-center">
            <th >Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            map(datos, (datos) => (
              <tr key={datos.id} className="text-center">
                <td>{datos.nombre}</td>
                <td>{datos.apellido}</td>
                <td>{datos.telefono}</td>
                <td>{datos.direccion}</td>
                <td>
                <button type="button" className="btn btn-success mr-2 mb-b-2 "
                  >Modificar
                </button>
                  <button type="button" className="btn btn-danger"
                    onClick={() => remove(datos.id)}
                  >Eliminar
                </button>

                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
