import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import {
  searchUserReservation,
  getReservations,
} from "../api/ReservacionApi";
import '../css/restx.css'

const UserReservation = () => {
  const [usuarioId, setUsuarioId] = useState("");
  const [reservacion, setReservacion] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = jwt_decode(token);

      if (decodedToken.role === "ADMIN_HOTEL") {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleSearch = async () => {
    try {
      const response = await searchUserReservation(usuarioId);
      setReservacion(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchByHotel = async (hotel) => {
    try {
      const response = await getReservations(hotel);
      setReservations(response);
    } catch (error) {
      console.log(error);
    }
  };

  const renderReservationsTable = () => {
    if (reservations.length === 0) {
      return <p>No hay reservas.</p>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Habitación</th>
            <th>Cantidad</th>
            <th>Hotel</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.habitacion}</td>
              <td>{reservation.cantidad}</td>
              <td>{reservation.hotel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      {isAdmin && (
        <>
          <input
            type="text"
            value={usuarioId}
            onChange={(e) => setUsuarioId(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar Reservación</button>
        </>
      )}

      {reservacion && (
        <div>
          <h2>Reservación encontrada:</h2>
          <p>Nombre: {reservacion.usuario.nombre}</p>
          {/* Muestra el resto de los detalles de la reservación */}
        </div>
      )}

      {/* Agrega botones o elementos para llamar a las funciones handleCreateReservation y handleGetReservations */}
      <button onClick={() => handleSearchByHotel("Hotel A")}>
        Buscar Reservas (Hotel A)
      </button>
      <button onClick={() => handleSearchByHotel("Hotel B")}>
        Buscar Reservas (Hotel B)
      </button>

      {renderReservationsTable()}
    </div>
  );
};

export default UserReservation;
