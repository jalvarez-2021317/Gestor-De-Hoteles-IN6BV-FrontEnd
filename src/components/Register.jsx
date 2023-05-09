import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Ingresa tu nombre completo"
          required
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Ingresa tu correo electrónico"
          required
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Ingresa tu contraseña"
          required
        />
      </Form.Group>
      <Form.Group controlId="confirmPassword">
        <Form.Label>Confirmar contraseña</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirma tu contraseña"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

export default RegisterForm;
