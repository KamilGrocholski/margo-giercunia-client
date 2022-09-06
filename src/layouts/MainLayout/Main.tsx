import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <main className='h-full w-full'>
        <Outlet />
    </main>
  )
}

export default Main