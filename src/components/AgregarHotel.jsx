import React from 'react'

export const AgregarHotel = ( {nombre, direccion, descripcion, administrador} ) => {
  return (
    <>
        <tr>
        <th> { nombre } </th>
        <td> { direccion } </td>
        <td> { descripcion } </td>
        <td>
          <button className="btn btn-warning m-1">Editar</button>
          <button className="btn btn-danger m-1">Eliminar</button>
        </td>
      </tr>
    </>
  )
}
