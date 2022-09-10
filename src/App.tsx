import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'

//PAGES
import Simulator from './pages/Simulator/index'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LandingPage from './pages/LandingPage'
import AdminPanel from './pages/AdminPanel'

import MainLayout from './layouts/MainLayout'
import Role from './components/Role'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})  

function App() {

  return (
    <QueryClientProvider client={ queryClient }>
      <Routes>
        <Route element={ <MainLayout /> }>

            <Route index element={ <LandingPage /> } />

            <Route element={ <Role rolesRequired={ [undefined] } /> }>
              <Route path='/rejestracja' element={ <RegisterPage /> } />
              <Route path='/logowanie' element={ <LoginPage /> } />
            </Route>

            <Route element={ <Role rolesRequired={ ['admin'] } /> }>
              <Route path='/admin' element={ <AdminPanel /> } />  
            </Route>

            <Route element={ <Role rolesRequired={ ['user', 'admin'] } /> }>
              <Route path='/symulator' element={ <Simulator /> } />
            </Route>

        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App