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
    const data = await createReservation(
      newReservation.usuario,
      newReservation.habitacion,
      newReservation.cantidad,
      newReservation.hotel
    );
    if (data) {
      // Reserva exitosa, actualizar las reservaciones
      setReservations([...reservations, data]);
      setNewReservation({
        usuario: "",
        habitacion: "",
        cantidad: 0,
        hotel: "",
      });
    } else {
      console.log("Error al crear la reservación");
    }
  };

  return (
    <div>
      <h2>Reservaciones</h2>
      <form onSubmit={handleSubmit}>
      <input
                    type="text"
                    name="usuario"
                    value={newReservation.usuario}
                    onChange={handleInputChange}
                    placeholder="Usuario"
                />
                <input
                    type="text"
                    name="habitacion"
                    value={newReservation.habitacion}
                    onChange={handleInputChange}
                    placeholder="Habitación"
                />
                <input
                    type="number"
                    name="cantidad"
                    value={newReservation.cantidad}
                    onChange={handleInputChange}
                    placeholder="Cantidad"
                />
                <input
                    type="text"
                    name="hotel"
                    value={newReservation.hotel}
                    onChange={handleInputChange}
                    placeholder="Hotel"
                />
                <button type="submit">Reservar</button>
      </form>
      <div>
        {Array.isArray(reservations) && reservations.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Habitación</th>
                <th>Cantidad</th>
                <th>Hotel</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation._id}>
                  <td>{reservation._id}</td>
                  <td>{reservation.usuario}</td>
                  <td>{reservation.habitacion}</td>
                  <td>{reservation.cantidad}</td>
                  <td>{reservation.hotel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No hay reservaciones disponibles</div>
        )}
      </div>
    </div>
  );
};

export default Reservations;
