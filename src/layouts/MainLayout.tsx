import { useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import { logout, refresh } from "../api/userAPI"
import Session from '../store/SesstionStore'

const MainLayout = () => {

    const { accessToken, setAccessToken, setRole, role } = Session()

    useEffect(() => {
        let first = true

        const setAT = async () => {
            if (!accessToken) return 
            const token = await refresh()
            if (!token.accessToken || !token.role) return 
            setAccessToken(token.accessToken)
            setRole(token.role)
        }

        if (first) {
            setAT() 
        }

        return () => {
            first = false
        }
    } ,[accessToken])

    const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            setAccessToken(undefined)
            setRole(undefined)
        } catch (err) {
            console.log(err)
        } finally {
            await logout()
        }
    }

  return (
    <div className='min-w-screen min-h-screen'>
        <header className='fixed top-0 left-0 right-0 h-16 p-3 flex items-center justify-between'>
            <Link to='/'>Giercunia</Link>
            <div>
                {accessToken && role === 'user' ?
                <>
                    <div>Twój profil</div>
                    <button onClick={ handleLogout }>Wyloguj</button>
                </> : accessToken && role === 'admin' ?
                <>
                    <div>
                        <Link to='/admin'>Panel admina</Link>
                        <button onClick={ handleLogout }>Wyloguj</button>
                    </div>
                </>:
                <>
                    <Link to='/logowanie'>Zaloguj się</Link>
                    <Link to='/rejestracja'>Stwórz konto</Link>
                </>}
            </div>
            <div>
                { role }
            </div>
        </header>
        <main className='fixed top-16 left-0 right-0 bottom-0 p-3'>
            <Outlet />
        </main>
    </div>
  )
}

export default MainLayout