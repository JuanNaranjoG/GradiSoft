import React from 'react';
import FormCliente from './FormA/FormCliente';
import FormOrden from './FormA/FormOrden';
import FormProducto from './FormA/FormProducto';


export default function Modal(props) {

  function Formulario(props) {
    switch (props.id) {

      case 2: return <> <FormCliente /></>;
      case 3: return <> <FormOrden /></>;
      case 4: return <> <FormProducto /></>;
      default: return <> <FormCliente /></>;

    }
  }




  return (
    <div className="modal fade" id="Agregar" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content ">
          <div className="float-md-right">
            <button type="button" className="close mr-2 mt-1" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Formulario id={props.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
