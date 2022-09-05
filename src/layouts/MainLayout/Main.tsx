import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <main className='p-3 h-full w-full'>
        <Outlet />
    </main>
  )
}

export default Main