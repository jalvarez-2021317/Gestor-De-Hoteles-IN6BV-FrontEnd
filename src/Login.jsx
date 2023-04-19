import { Fragment } from "react"

import hotelLogo from './img/hotel.png'
import { NavBar }  from './components/NavBar'

export const Login = () => {
  return (
    <Fragment>
        <div className="p-5"/>
        <div className="container w-75 bg-primary mt-5 rounded shadow">
            <div className="row align-items-stretch">
                <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">

                </div>
                <div className="col bg-white p-5 rounded-end">
                    <div className="text-end">
                        <img src={hotelLogo} width="48" alt=""/>
                    </div>

                    <h2 className="fw-bold text-center pt-5 mb-5">Bienvenido</h2>

                    {/* Login */}
                    <form action="#">
                        <div className="mb-4">
                            <label for="email" className="form-label">Correo</label>
                            <input type="email" className="form-control" name="email"/>
                        </div>
                        <div className="mb-4">
                        <label for="email" className="form-label">Password</label>
                            <input type="password" className="form-control" name="email"/>
                        </div>
                        <div className="mb-4 form-check">
                            <input type="checkbox" name="connected" className="form-check-input " id=""/>
                            <label for="connected" className="form-check-label">Mantenerme connectado</label>
                        </div>

                        <div className="d-grid mb-5">
                            <br />
                            <button type="submit" className="btn btn-primary w-100 my-1">Iniciar Sesión</button>
                            <br />
                            <br />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </Fragment>
  )
}
