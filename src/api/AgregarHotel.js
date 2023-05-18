import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = `http://localhost:8080/api`;

export const AgregarHotel = async (nombre, direccion, descripcion) => {
    try {
        
        if (!nombre || !direccion || descripcion) {
            throw new Error("Ingresa todos los datos para poder agregar un usuario.")
        }

        const response = await axios.post(`${BASE_URL}/hoteles/agregarH`, {
            nombre,
            direccion,
            descripcion,
        });

        if (response.status === 201) {
            Swal.fire({
                icon: "success",
                title: "Hotel agregado",
                text: "¡Hotel agregado con éxito!",
                confirmButtonText: "Ok",
            });
            return response.data;
        } else {
            throw new Error("Hubo un error al intentar agregar el hotel.")
        }
        
    } catch (error) {
        Swal.fire({
            icon: "error",
            title:"No se puede agregar el hotel",
            text: error.message,
        });
        return null;
    }
}

export const getAddHotel = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/reservaciones/`);
        console.log(response.data);
        return response.data || []; // Devuelve un array vacío si no hay reservaciones
    } catch (error) {
        // Mostrar mensaje de error al usuario
        Swal.fire({
            icon: "error",
            title: "Error al obtener las reservaciones",
            text: "Ha ocurrido un error al obtener las reservaciones. Por favor, intenta nuevamente.",
        });
        return [];
    }
};
