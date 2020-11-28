import React from 'react';
import FormClienteM from './FormM/FormClienteM';


export default function Modal(props) {


  return (
    <div className="modal fade" id="Modificar" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content ">
          <div className="float-md-right">
            <button type="button" className="close mr-2 mt-1" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <FormClienteM id={props.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
