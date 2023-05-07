import React, { Fragment } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import hotelLogo from '../img/CardHotel.png'

function HotelCard() {
  const cardData = [
    {id: 1, 
      title: 'Hotel Barcelo', 
      text: 'El hotel Barceló Guatemala City es un magnífico hotel urbano que goza de una estratégica ubicación dentro de la principal zona de negocios', 
      url: '#'
    },
    {id: 2, 
      title: 'Westin camino rea', 
      text: 'Bienvenido a The Westin Camino Real, Guatemala. Disfrute de una experiencia Heavenly® en la Ciudad de Guatemala.', 
      url: '#'
    },
    {id: 3, 
    title: 'Hotel Clarion', 
    text: 'El Hotel Clario Guatemala está ubicado en el popular distrito de Zona Viva y ofrece gimnasio, aparcamiento gratuito', 
    url: '#'
    },
    {id: 4,
    title: 'Guatemala Inn Hotel', 
    text: 'Hotel Guatemala Inn cuenta con un servicio de traslado gratis disponible previa solicitud.', 
    url: '#'
    },
    {id: 5, 
    title: 'Hotel San Carlos', 
    text: 'Hotel San Carlos en Ciudad de Guatemala es una antigua casa restaurada en Avenida Reforma, Zona 10.', 
    url: '#'
    }
  ];


const cardGrupos = [];
for (let i = 0; i < cardData.length; i += 3) {
  cardGrupos.push(cardData.slice(i, i + 3));
}

  return (

    <Fragment>

      <div className='container'>
        <br />
        <br />
        {cardGrupos.map((group, index) => (
          <Row key={index} className='mb-4'>
            {group.map((card) =>(
              <Col md={4} key={card.id}>
                <Card>
                  <Card.Body>
                  <img src={hotelLogo} alt=""/>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <Button href={card.url}>Al sitio</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </div>

    </Fragment>
    
  );
}

export default HotelCard;