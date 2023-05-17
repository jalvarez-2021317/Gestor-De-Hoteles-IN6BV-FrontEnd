import { Fragment } from "react"
import hotelLogo from '../../img/hotel.png'
import Logo from '../../img/Logo.png';
import '../../login.css';
import { useNavigate } from "react-router-dom";

export const NavBarLogin = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log('Al login')
        navigate('/login');
    }

  return (

    <Fragment>
         <header className='bg-warning'>
                <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap navbar navbar-expand-lg bg-warning p-2" id="menu">
                    <div className="container-fluid">
                        <a className="navbar-brand " href="#">
                            <img src={Logo} alt="" width="36" height="35" className="d-inline-block align-text-top" />
                                <span className="text-light fs-5 fw-bolder px-1">Hotel</span>
                                <span className="fs-5 fw-bolder">Amanecer</span>
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item col-6 col-lg-auto">
                                    <a className="nav-link active py-2 px-0 px-lg-2" aria-current="page" href="#">Inicio</a>
                                </li>
                            </ul>


                            <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                                <li className="nav-item py-1 col-12 col-lg-auto">
                                    <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-black"></div>
                                    <hr className="d-lg-none text-black-50" />
                                </li>
                                <button onClick={ handleSubmit } className="btn-primary" role="button"> Login </button>
                                <div className="px-2">
                                    <button className="btn-register" href="#" role="button"> Registro </button>
                                </div>
                            </ul>
                            
                        </div>

                    </div>
                </nav>
        </header>
    </Fragment>

  )
}
