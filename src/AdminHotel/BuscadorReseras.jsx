import React, { useState, useEffect } from "react";
// import jwt_decode from "jwt-decode";

import { createReservation, searchUserReservation, getReservations } from "../api/ReservacionApi";

const UserReservation = () => {
  const [usuarioId, setUsuarioId] = useState("");
  const [reservacion, setReservacion] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

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

  const handleCreateReservation = async () => {
    try {
      // Aquí puedes obtener los datos necesarios para la reserva (usuario, habitacion, cantidad, hotel)
      const usuario = ""; // Obtener el usuario de alguna forma
      const habitacion = ""; // Obtener la habitación de alguna forma
      const cantidad = ""; // Obtener la cantidad de alguna forma
      const hotel = ""; // Obtener el hotel de alguna forma

      const response = await createReservation(usuario, habitacion, cantidad, hotel);
      // Realizar las acciones necesarias después de crear la reserva, como actualizar el estado, mostrar mensajes, etc.
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetReservations = async () => {
    try {
      const reservations = await getReservations();
      // Realizar las acciones necesarias después de obtener las reservas, como actualizar el estado, mostrar mensajes, etc.
    } catch (error) {
      console.log(error);
    }
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

      {/* Aquí puedes agregar botones o elementos para llamar a las funciones handleCreateReservation y handleGetReservations */}
    </div>
  );
};

export default UserReservation;
