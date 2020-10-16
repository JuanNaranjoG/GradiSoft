import React from 'react'
import carrousel1 from "../../../img/carrousel1.jpg";
import carrousel2 from "../../../img/carrousel2.jpg";
import carrousel3 from "../../../img/carrousel3.jpg";

export default function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carrousel1} className="d-block  " alt="carrousel-1"/>
        </div>
          <div className="carousel-item">
            <img src={carrousel2} className="d-block  " alt="..."/>
    </div>
            <div className="carousel-item">
              <img src={carrousel3} className="d-block " alt="..."/>
    </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
    )
}
