import { Carrosel } from "./Carrosel"
import { NavBar } from "./NavBar"
import '../css/Entrada.css'


export const Entrada = () => {
    return (
        <>
            <div>

                <NavBar/>
                
                <Carrosel/>
                <br />

                    <div class="container my-5">
                        <h1>¡Bienvenidos a nuestro hotel!</h1>
                        <p>"Despierta con el sol en nuestro hotel y comienza tu día con la belleza del amanecer."</p>
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2021/06/01/12/39/beach-6301597_1280.jpg" class="d-block w-100 my-5" />
                    <img src="https://cdn.pixabay.com/photo/2017/08/06/14/56/people-2593251_1280.jpg" class="d-block w-100 my-5" />
                </div>
        </>
    )
}