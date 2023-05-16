import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = `http://localhost:8080/api`;

// Función para realizar una reserva
export const createReservation = async (usuario, habitacion, cantidad, hotel) => {
  try {
    const response = await axios.post(`${BASE_URL}/reservaciones/agregar`, {
      usuario,
      habitacion,
      cantidad,
      hotel,
    });

    if (response.status === 201) {
      Swal.fire({
        icon: "success",
        title: "¡Reserva realizada!",
        text: "¡La reserva se ha realizado correctamente!",
        confirmButtonText: "Ok",
      });
      return response.data; // Puedes devolver los datos de la reserva si los necesitas
    } else {
      throw new Error();
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error al realizar la reserva",
      text: "Ha ocurrido un error al realizar la reserva. Por favor, intenta nuevamente.",
    });
    return null;
  }
};

// Función para obtener todas las reservaciones
export const getReservations = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/reservaciones/`);
      return response.data.reservations || []; // Devuelve un array vacío si no hay reservaciones
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al obtener las reservaciones",
        text: "Ha ocurrido un error al obtener las reservaciones. Por favor, intenta nuevamente.",
      });
      return [];
    }
  };
  