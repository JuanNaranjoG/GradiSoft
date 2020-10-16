import React from 'react'
import Form from './Form'

export default function Modal() {
    return (
        <div className="modal fade" id="SesionModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content text-center">
      <div className="float-md-right">
        <button type="button" className="close mr-2 mt-1" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <Form/>
      </div>
    </div>
  </div>
</div>
    )
}
