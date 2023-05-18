import { Fragment } from "react"
import { AgregarHotel } from "../../components/AgregarHotel"
import { TableHotel } from "../../components/TableHotel"


export const PageSuperAd = () => {
  return (
   <Fragment>
    <div>
    <AgregarHotel/>
    <TableHotel/>
    </div>
   
   </Fragment>
  )
}
