import { Navigate, Outlet } from "react-router-dom"
import Session from "../store/SesstionStore"

const Role = ({ roleRequired }: { roleRequired?: 'admin' | 'user' }) => {

    const { role } = Session()
    
  return (
    <>
        {roleRequired === role
        ? <Outlet />
        : <Navigate to='/' />}
    </>
  )
}

export default Role