import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAddHotel } from "../api/AgregarHotel";
import { AgregarHotel } from "./AgregarHotel";


export const TableHotel = () => {

  const [addHotel, setAddHotel] = useState([]);

  const reload = async () => {
    const result = await getAddHotel();
    //console.log(result);
    setAddHotel( result );
  }

  useEffect( () => {
    reload();
  }, [ ] );

  return (
    <>

      <div className="container mt-3">
        <Link to='add'>
          <button className="btn btn-primary mt-3" >
            Add Product
          </button>
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Dirección</th>
              <th scope="col">Descripcion </th>
            </tr>
          </thead>
          <tbody>
            {addHotel.map(( hotel ) => (
              <tr key={hotel._id}>
                <td> {hotel._id} </td>
                <td> {hotel.nombre} </td>
                <td> {hotel.direccion} </td>
                <td> {hotel.descripcion} </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </>
  )
}
