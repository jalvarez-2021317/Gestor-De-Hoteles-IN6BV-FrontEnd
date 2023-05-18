import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { apiRegister } from "../api/RegisterApi";
import "../css/Register.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await apiRegister(
        formData.nombre,
        formData.correo,
        formData.password
      );
      console.log(response); // Maneja la respuesta del servidor según sea necesario
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="register-form">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="nombre">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Ingresa tu nombre completo"
              required
            />
          </Form.Group>
          <Form.Group controlId="correo">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              name="correo"
              value={formData.correo}
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
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
