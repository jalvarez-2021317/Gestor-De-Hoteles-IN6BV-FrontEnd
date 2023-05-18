import { Fragment } from "react"
import hotel1 from '../../img/Galery1.jpg';
import hotel2 from '../../img/hotel1.jpg';
import hotel3 from '../../img/hotel2.jpg';
import hotel4 from '../../img/hotel3.jpg';
import hotel5 from '../../img/hotel4.jpg';
import hotel6 from '../../img/hotel5.jpg';
import hotel7 from '../../img/hotel6.jpg';
import hotel8 from '../../img/hotel7.jpg';
import hotel9 from '../../img/hotel8.jpg';
import '../../css/Galery.css';

export const GaleryF = () => {
  return (

    <Fragment>

        <div className="container">
            <section className="galeria">

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src={hotel1} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src={hotel2} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src={hotel3} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src={hotel4} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src={hotel5} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src={hotel6} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src={hotel7} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src={hotel8} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src={hotel9} alt="" />
                    </div>
                </div>

            </section>
        </div>


    </Fragment>
   
  )
}
