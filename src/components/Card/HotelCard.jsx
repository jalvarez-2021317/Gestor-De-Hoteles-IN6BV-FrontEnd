import React, { Fragment, useEffect, useState } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import hotelLogo from '../../img/hotel1.jpg';
import hotel2 from '../../img/hotel2.jpg';
import hotel3 from '../../img/hotel3.jpg';
import hotel4 from '../../img/hotel4.jpg';
import hotel5 from '../../img/hotel5.jpg';

import '../../css/CardStyle.css';
import { getHotel } from '../../api/HotelApi';
import { NavBar } from '../NavBar';


export const HotelCard = () => {
  const [hotel, setHotel] = useState([]);

  const fetchHotels = async () => {
    const data = await getHotel();
    setHotel(data);
  };

  useEffect(() => {
    fetchHotels();
  }, [])




  return (

    <Fragment>

      <div className='container'>
        <div className="row">
          <div className="col-12">
            <h1>Hoteles</h1>
          </div>
        </div>
        {Array.isArray(hotel) && hotel.length > 0 ? (
          <div className='row'>
            {hotel.map((hotel) => (
              <div className='col-4'>
                <div className="card " key={hotel._id} >
                  <img src={hotel2} className="card-img-top" alt="Not Found" />
                  <div className="card-body">
                    <h5 className="card-title">{hotel.nombre}</h5>
                    <p className="card-text">{hotel.descripcion}</p>
                    <p className="card-text">{hotel.direccion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No hay reservaciones disponibles</div>
        )}
      </div>

    </Fragment>

  );
}