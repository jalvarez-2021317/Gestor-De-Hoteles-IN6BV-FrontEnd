import { Carrosel } from "./Carrosel"
import { NavBar } from "./NavBar"
import '../css/Entrada.css'
import { NavBarLogin } from "./Navbar/NavBarLogin"
import {HotelCard} from "./Card/HotelCard";
import { Footer } from "./Footer/Footer";


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
                </section>

                <HotelCard />

                <Footer />

            </div>
        </>
    )
}