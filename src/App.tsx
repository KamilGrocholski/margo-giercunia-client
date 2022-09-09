import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'

//PAGES
import Simulator from './pages/Simulator/index'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LandingPage from './pages/LandingPage'

import MainLayout from './layouts/MainLayout'
import Role from './components/Role'
import AdminPanel from './pages/AdminPanel'

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

            <Route element={ <Role roleRequired='admin' /> }>
              <Route path='/admin' element={ <AdminPanel /> } />
            </Route>

            <Route index element={ <LandingPage /> } />
            <Route path='/symulator' element={ <Simulator /> } />
            <Route path='/rejestracja' element={ <RegisterPage /> } />
            <Route path='/logowanie' element={ <LoginPage /> } />

        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App