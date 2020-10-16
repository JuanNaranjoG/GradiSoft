import React from 'react'

export default function BannerTable(props) {
  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h2 className="h2">{props.title}</h2>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#Agregar">Agregar</button>
    </div>

  )
}
