import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = `http://localhost:8080/api`;

export const createReservation = async (usuario, habitacion, cantidad, hotel) => {
    try {
        if (!usuario || !habitacion || !cantidad || !hotel) {
            throw new Error(
                "Por favor, proporciona todos los datos necesarios para realizar la reserva."
            );
        }

        const token = localStorage.getItem("token");

        const response = await axios.post(
            `${BASE_URL}/reservaciones/agregar`,
            {
                usuario,
                habitacion,
                cantidad,
                hotel,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.status === 201) {
            Swal.fire({
                icon: "success",
                title: "¡Reserva realizada!",
                text: "¡La reserva se ha realizado correctamente!",
                confirmButtonText: "Ok",
            });
            return response.data;
        } else {
            throw new Error(
                "Error al realizar la reserva. Por favor, intenta nuevamente."
            );
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error al realizar la reserva",
            text: error.message,
        });
        return null;
    }
};

export const searchUserReservation = async (usuarioId) => {
    try {
        const token = localStorage.getItem("token");
        console.log(token);

        const response = await axios.get(
            `${BASE_URL}/reservaciones/hotel/usuario/`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        console.log(response.data);
        return response.data;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error al buscar el usuario hospedado",
            text: "Ha ocurrido un error al buscar el usuario hospedado. Por favor, intenta nuevamente.",
        });
        return null;
    }
};

export const getReservations = async () => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${BASE_URL}/reservaciones/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(response.data);
        return response.data || [];
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error al obtener las reservaciones",
            text: "Ha ocurrido un error al obtener las reservaciones. Por favor, intenta nuevamente.",
        });
        return [];
    }
};
