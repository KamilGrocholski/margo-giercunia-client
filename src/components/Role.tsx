import { Navigate, Outlet } from "react-router-dom"
import Session, { ISession } from "../store/SesstionStore"

const Role = ({ rolesRequired }: { rolesRequired: ISession['role'][] }) => {

    const { role } = Session()
    console.log(role)
  return (  
    <>
        {rolesRequired.some(rl => rl === role)
        ? <Outlet />
        : <Navigate to='/' />}
    </>
  )
}

export default Role