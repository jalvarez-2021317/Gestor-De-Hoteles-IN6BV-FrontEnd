import { Fragment } from "react"
import { NavBar } from "../../components/NavBar"
import { HotelCard } from "../../components/Card/HotelCard"
import Reservations from "../../components/Reservaciones"

export const PageUsuario = () => {
  return (
   
    <Fragment>
      <div>
      <NavBar />
      <Reservations/>
      </div>
    
    <HotelCard />

    </Fragment>

  )
}
