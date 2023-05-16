import React, { useEffect, useState } from "react";
import { createReservation, getReservations } from "../api/ReservacionApi.js";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [newReservation, setNewReservation] = useState({
    usuario: "",
    habitacion: "",
    cantidad: 0,
    hotel: "",
  });

  useEffect(() => {
    // Obtener las reservaciones al cargar el componente
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    const data = await getReservations();
    setReservations(data);
  };

  const handleInputChange = (e) => {
    setNewReservation({ ...newReservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createReservation(newReservation.usuario, newReservation.habitacion, newReservation.cantidad, newReservation.hotel);
    if (data) {
      // Reserva exitosa, actualizar las reservaciones
      fetchReservations();
      setNewReservation({
        usuario: "",
        habitacion: "",
        cantidad: 0,
        hotel: "",
      });
    }
  };

  return (
    <div>
      <h2>Reservaciones</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="usuario"
        value={newReservation.usuario} onChange={handleInputChange} placeholder="Usuario" />
        <input type="text" name="habitacion" value={newReservation.habitacion} onChange={handleInputChange} placeholder="Habitación" />
        <input type="number" name="cantidad" value={newReservation.cantidad} onChange={handleInputChange} placeholder="Cantidad" />
        <input type="text" name="hotel" value={newReservation.hotel} onChange={handleInputChange} placeholder="Hotel" />
        <button type="submit">Reservar</button>
        </form>
        <ul>
        {reservations.map((reservation) => (
        <li key={reservation._id}>
        Usuario: {reservation.usuario}, Habitación: {reservation.habitacion}, Cantidad: {reservation.cantidad}, Hotel: {reservation.hotel}
        </li>
        ))}
        </ul>
        </div>
        );
        }
        export default Reservations;
