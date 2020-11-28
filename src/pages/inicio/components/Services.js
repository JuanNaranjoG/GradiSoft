import React from 'react';
import item1 from '../../../img/item1.png';
import item2 from '../../../img/item2.png';
import item3 from '../../../img/item3.png';

export default function Services() {
    return (
        <div className="container services" id="Servicios">
            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" src={item1} alt="Item 1" width="140" height="140" />
                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a className="btn btn-secondary" href="/#" role="button">Ver detalles »</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src={item2} alt="Item 2" width="140" height="140" />
                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a className="btn btn-secondary" href="/#" role="button">Ver detalles »</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle"  src={item3} alt="Item 3" width="140" height="140" />
                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a className="btn btn-secondary" href="/#" role="button">Ver detalles »</a></p>
                </div>
            </div>
        </div>
    )
}
