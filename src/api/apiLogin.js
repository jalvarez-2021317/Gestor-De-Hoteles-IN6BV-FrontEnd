import axios from "axios";
import Swal from "sweetalert2";
const URL = `http://localhost:8080/api/`;

export const apiLogin = async(correo, password) => {

    try {
        const response = await axios.post(`${URL}auth/login`, {
            correo,
            password,
        });

        const token = response.data.token;
        //Token guardado en el almacenamiento local
        token ? localStorage.setItem("token", token) : null;

        if (response) {
            Swal.fire({
                icon: "success",
                title: " ! Inicio de sesión completado ! ",
                text: " ¡ Disfruta ! ",
                confirmButtonText: "Ok",
            });
        }

        return token;

        //Mensaje de error del Back End
    } catch ( { response: { data: { msg } } } ) {
        Swal.fire({
            icon: "error",
            title: "No se pudo iniciar Sección.",
            text: `${ msg }`,
        });
        return false;
    }

};
