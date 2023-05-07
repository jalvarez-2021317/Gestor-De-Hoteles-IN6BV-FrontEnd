
export const NavBar = () => {
    return (
        <>
            <div>

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">HotelNuevoAmanecer</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Habitaciones</a>
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


                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_1280.jpg" class="d-block w-100" alt="1" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_1280.jpg" class="d-block w-100" alt="2" />
                        </div>

                        <div class="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_1280.jpg" class="d-block w-100" alt="3" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_1280.jpg" class="d-block w-100" alt="4" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2015/09/15/11/04/hotel-940730_1280.jpg" class="d-block w-100" alt="5" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2016/12/11/18/10/apartment-1899964_1280.jpg" class="d-block w-100" alt="6" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_1280.jpg" class="d-block w-100" alt="7" />
                        </div>


                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>

                    <div class="container my-5">
                        <h2>¡Bienvenidos a nuestro hotel!</h2>
                        <p>"Despierta con el sol en nuestro hotel y comienza tu día con la belleza del amanecer."</p>
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2021/06/01/12/39/beach-6301597_1280.jpg" class="d-block w-100 my-5" />
                    <img src="https://cdn.pixabay.com/photo/2017/08/06/14/56/people-2593251_1280.jpg" class="d-block w-100 my-5" />
                </div>
            </div>
        </>
    )
}