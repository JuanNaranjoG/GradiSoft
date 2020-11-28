import React from 'react'
import Asidebar from './Asidebar'
import BannerTable from './BannerTable'
import Start from './Start'
import Orders from './Orders'
import Products from './Products'
import Clients from './Clients'
import Reports from './Reports'
import Modal from './Modal'



export default function Contenedor(props) {

    function Chagecontent(props) {
        switch (props.id) {

            case 1: return <> <BannerTable title={"Inicio"} /> <Start /></>;
            case 2: return <> <BannerTable title={"Clientes"} /><Clients /></>;
            case 3: return <> <BannerTable title={"Ordenes"} /><Orders /></>;
            case 4: return <> <BannerTable title={"Productos"} /><Products /></>;
            case 5: return <> <BannerTable title={"Reportes"} /><Reports /></>;
            default: return <> <BannerTable title={"Inicio"} /><Start /></>;
        }

    }

    return (
        <div className="container-fluid">
            <div className="row r">
                <Asidebar />
                <div className="col-md-9 ml-sm-auto col-lg-10 pl-md-4">
                    <Chagecontent id={props.id} />
                    <Modal id={props.id} />
                </div>
            </div>
        </div>
    )
}
