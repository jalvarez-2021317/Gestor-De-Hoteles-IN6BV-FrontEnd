import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = `http://localhost:8080/api`;

export const getHotel = async () =>{
    try {
        const response = await axios.get(`${BASE_URL}/hoteles/getHotel`);
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
}