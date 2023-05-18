import UserReservation from "../../AdminHotel/BuscadorReseras"
import { NavBarLogin } from "../../components/Navbar/NavBarLogin"

export const PageAdmin = () => {
  return (
    <>
    <div>
      <NavBarLogin/>
      <UserReservation/>
    </div>
    </>

  )
}
