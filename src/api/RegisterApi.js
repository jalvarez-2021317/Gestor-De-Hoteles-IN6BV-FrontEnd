import axios from "axios";
import Swal from "sweetalert2";

const URL = `http://localhost:8080/api/`;

export const apiRegister = async (nombre, correo, password,) => {
  try {
    const response = await axios.post(`${URL}auth/register`, {
      nombre,
      correo,
      password,
    });
    const token = response.data.token;
    // Guardar token en el almacenamiento local
    token ? localStorage.setItem("token", token) : null;

    if (response) {
      Swal.fire({
        icon: "success",
        title: "! Registro completado !",
        text: "¡Correcto!",
        confirmButtonText: "Ok",
      });
    }

    return token;
  } catch ({ response: { data: { msg } } }) {
    Swal.fire({
      icon: "error",
      title: "Error al registrarse",
      text: `${msg}`,
    });
    return false;
  }
};
