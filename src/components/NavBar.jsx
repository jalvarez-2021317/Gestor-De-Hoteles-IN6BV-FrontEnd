
export const NavBar = () => {
    return (
        <>

            <div>
                <div className="header">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">HotelNuevoAmanecer</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Habitaciones</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Tipo de Evento</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Evento</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Reservación</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Facturas</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown link
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">Disponibilidad de la habitación</a></li>
                                            <li><a class="dropdown-item" href="#">Usuario</a></li>
                                            <li><a class="dropdown-item" href="#">Detalle de la cuenta</a></li>
                                            <li><a class="dropdown-item" href="#">Servicios</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}