import { Fragment } from "react"
import { Outlet } from "react-router-dom"

export const App = () => {
  return (

    <Fragment>
        <Outlet />
    </Fragment>

  )
}
