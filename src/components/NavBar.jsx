
export const NavBar = () => {
    return (
        <>

            <div>
                <div className="header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">HotelNuevoAmanecer</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Habitaciones</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Hoteles</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Evento</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Reservación</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Facturas</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown link
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Disponibilidad de la habitación</a></li>
                                            <li><a className="dropdown-item" href="#">Usuario</a></li>
                                            <li><a className="dropdown-item" href="#">Detalle de la cuenta</a></li>
                                            <li><a className="dropdown-item" href="#">Servicios</a></li>
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