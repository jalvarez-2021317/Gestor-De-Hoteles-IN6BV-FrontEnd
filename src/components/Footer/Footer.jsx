import { Fragment } from "react"
import Logo from '../../img/Hotel-logo.png';



export const Footer = () => {
  return (

    <Fragment>

        <br />
        <br />
        <div className="container-fluid">
            <div className="row p-5 bg-body-secondary text-white">

                <div className="col-xs-12 col-md-6 col-lg-3">
                    <img src={Logo} alt="" />
                </div>
                <div className="col-3 col-lg-1 offset-lg-1 mb-3">
                    <p className="h5 mb-2 text-body-secondary">Herramientas</p>
                    <div className="mb-2">
                        <a className="text-black text-decoration-none" href="">React JS</a>
                    </div>
                    <div className="mb-2 ">
                        <a className="text-black text-decoration-none" href="">Node JS</a>
                    </div>
                    <div className="mb-2">
                        <a className="text-black text-decoration-none" href="">MoongoDB</a>
                    </div>
                    <div className="mb-2">
                        <a className="text-black text-decoration-none" href="">Boostrap</a>
                    </div>
                </div>
                <div className="col-3 col-lg-1 offset-lg-1 mb-3">
                    <p className="h5 mb-2 text-body-secondary">Links</p>
                    <div className="mb-2 px-4">
                        <a className="text-black text-decoration-none" href="">Terms Conditions</a>
                    </div>
                    <div className="mb-2 px-4">
                        <a className="text-black text-decoration-none" href="">Privacy Policy</a>
                    </div>
                </div>
                <div className="col-3 col-lg-1 offset-lg-1 mb-3">
                    <p className="h5 mb-3 text-body-secondary">Contacto</p>
                    <div className="mb-2 px-3">
                        <a className="text-black text-decoration-none" href="">GitHub</a>
                    </div>
                </div>
                
                <div className="col-xs-12 pt-4">
                    <p className="text-black text-center">Copyright - All rights reserved @2023</p>
                </div>

            </div>
        </div>

    </Fragment>

  )
}
