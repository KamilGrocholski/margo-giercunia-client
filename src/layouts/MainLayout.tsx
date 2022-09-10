import { useEffect } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { logout, refresh } from "../api/userAPI"
import Session from '../store/SesstionStore'

const MainLayout = () => {

    const { accessToken, setAccessToken, setRole, role } = Session()

    const navigate = useNavigate()

    useEffect(() => {
        let first = true

        const setAT = async () => {
            const token = await refresh()
            setAccessToken(token.accessToken)
            setRole(token.role)
        }

        if (first) {
            setAT() 
        }

        return () => {
            first = false
        }
    } ,[accessToken, setAccessToken, setRole])

    const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            await logout()
            setAccessToken(undefined)
            setRole(undefined)
        } catch (err) {
            console.log(err)
        } finally {
            navigate('/')
        }
    }

  return (
    <div className='min-h-screen min-w-screen'>
        <header className='bg-texture-light fixed top-0 left-0 font-semibold right-0 flex items-center justify-between h-16 p-3 shadow shadow-black'>
            <Link to='/' className='text-2xl min-w-fit mr-12'>Margonemski symulator</Link>
            <div className='flex flex-row items-center w-full'>
                {accessToken && role === 'user' ?
                <>
                    <div className='grow flex flex-row space-x-3 items-center'>
                        <Link to='/symulator'>Symulator</Link>
                    </div>
                    <button onClick={ handleLogout } className='px-3 py-1 rounded-md border bg-danger border-danger text-black'>Wyloguj</button>
                </> : accessToken && role === 'admin' ?
                <>
                    <div className='grow flex space-x-3 flex-row items-center'>
                        <Link to='/admin'>Panel admina</Link>
                        <Link to='/symulator'>Symulator</Link>
                    </div>
                    <button onClick={ handleLogout } className='px-3 py-1 rounded-md border bg-danger border-danger text-black'>Wyloguj</button>
                </>:
                <>
                    <div className='flex flex-row space-x-3 items-center justify-end grow'>
                        <Link to='/logowanie' className='px-3 py-1 border border-primary rounded-md text-primary'>Zaloguj się</Link>
                        <Link to='/rejestracja' className='px-3 py-1 border bg-primary border-primary rounded-md text-black'>Stwórz konto</Link>
                    </div>
                </>}
            </div>
        </header>
        <main className='fixed bottom-0 left-0 right-0 p-3 top-16 overflow-y-scroll'>
            <Outlet />
        </main>
    </div>
  )
}

export default MainLayout