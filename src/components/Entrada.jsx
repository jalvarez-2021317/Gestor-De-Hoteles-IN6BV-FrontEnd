import { Carrosel } from "./Carrosel"
import { NavBar } from "./NavBar"
import '../css/Entrada.css'
import { NavBarLogin } from "./Navbar/NavBarLogin"
import { Footer } from "./Footer/Footer";
import { GaleryF } from "./Galery/GaleryF";


export const Entrada = () => {
    return (
        <>
            <div>
                <NavBarLogin />

                <Carrosel />

                <br />
                <br />

                <section className="w-50 mx-auto text-center pt-5">
                    <h1 className="p-3 border-3" />    

                    <h2 className="f-2">
                        <br />
                        Encuentra en linea los mejores
                        <span className="text-warning"> Hoteles </span>
                         y <span className="text-warning"> Ofertas </span>
                    </h2>                   

                    <p class="p-4 fs-4">
                        <span class="text-warning">Hotel Amanecer </span>
                        te da la bienvenida, donde estamos seguros que gozaras de una buena experiencia,
                        y cumpliremos tus expectativas.
                    </p>

                    <p class="p-4 fs-4">
                        Contamos con el apoyo de hoteles de renombre como Hotel Barceló, Hotel Tikal Futura y 
                        Hostal Tequila Sunrise.
                    </p>
                </section>

                <GaleryF />

                <Footer />

            </div>
        </>
    )
}