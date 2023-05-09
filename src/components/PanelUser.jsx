import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const UserProfile = () => {
    const user = {
      name: "Juan Perez",
      email: "juanperez@example.com",
      age: 30,
      address: "Av. Siempreviva 123, Springfield",
      phone: "+1 123-456-7890",
      bio: "Soy un desarrollador web apasionado que le encanta aprender cosas nuevas y trabajar en proyectos emocionantes."
    };
  
    return (
      <Container>
        <Card className="my-3">
          <Card.Header>
            <h3>Perfil de Usuario</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xs={12} md={6}>
                <h4>Datos Personales</h4>
                <p><strong>Nombre:</strong> {user.name}</p>
                <p><strong>Correo Electrónico:</strong> {user.email}</p>
                <p><strong>Edad:</strong> {user.age}</p>
                <p><strong>Dirección:</strong> {user.address}</p>
                <p><strong>Teléfono:</strong> {user.phone}</p>
              </Col>
              <Col xs={12} md={6}>
                <h4>Biografía</h4>
                <p>{user.bio}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
  